package app

import (
	"embed"
	"fmt"
	"github.com/ggdream/mini"
	"github.com/ggdream/moment/global"
	"github.com/ggdream/moment/middleware/cors"
	"github.com/ggdream/moment/middleware/log"
	"github.com/ggdream/moment/middleware/static"
	"github.com/ggdream/moment/router"
	"github.com/ggdream/moment/tools/config"
	"github.com/ggdream/moment/tools/safety"
	"github.com/gin-gonic/gin"
	"net/http"
	"os"
)


func New(fs embed.FS) {
	Init()

	gin.SetMode(gin.ReleaseMode)
	r := gin.New()
	r.MaxMultipartMemory = 4 << 20
	r.Use(log.WareLog(), cors.WareCors(), static.WareStatic(fs))
	router.SetRouter(r)
	r.NoRoute(func(c *gin.Context) {
		c.Redirect(http.StatusMovedPermanently, "/")
	})

	port := transPort(global.Config.Port)
	if global.Config.Tls == nil {
		// http
		if err := r.Run(port); err != nil {
			panic(err)
		}
	} else {
		// https
		if err := r.RunTLS(port, global.Config.Tls.Cert, global.Config.Tls.Key); err != nil {
			panic(err)
		}
	}
}

func transPort(port int) string {
	return fmt.Sprintf(":%d", port)
}

func printPriPemKey(key string) {
	println("please save the private rsa key of next line for the docs upload:")
	println(key)
	println("\n")
}

func Init() {
	argv := mini.New(os.Args[1:])
	conf, err := config.Parse(argv.GetFlag("-f"), &global.Records)
	if err != nil {
		panic(err)
	}
	global.Config = conf
	priPem, pubPem := safety.GenerateKeyPairs()
	global.PublicKey = pubPem
	printPriPemKey(priPem)
}





