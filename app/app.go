package app

import (
	"embed"
	"fmt"
	"net/http"
	"os"

	"github.com/ggdream/mini"
	"github.com/ggdream/moment/global"
	"github.com/ggdream/moment/middleware/cors"
	"github.com/ggdream/moment/middleware/log"
	"github.com/ggdream/moment/middleware/static"
	"github.com/ggdream/moment/router"
	"github.com/ggdream/moment/tools/config"
	"github.com/ggdream/moment/tools/safety"
	"github.com/gin-gonic/gin"
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


func Init() {
	argv := mini.New(os.Args[1:])
	conf, err := config.Parse(argv.GetFlag("-f"), &global.Records)
	if err != nil {
		panic(err)
	}
	global.Config = conf

	priPem, pubPem := safety.GenerateKeyPairs()
	if err := os.WriteFile("verify.key", []byte(priPem), 0644); err != nil {
		panic(err)
	}
	global.PublicKey = pubPem
}
