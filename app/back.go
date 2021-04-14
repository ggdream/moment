package app

import (
	"github.com/ggdream/moment/middleware/cors"
	"github.com/ggdream/moment/middleware/log"
	"github.com/ggdream/moment/router"
	"github.com/gin-gonic/gin"
)


func backupServer() {
	gin.SetMode(gin.ReleaseMode)
r := gin.New()
r.MaxMultipartMemory = 4 << 20
r.Use(log.WareLog(), cors.WareCors())
router.SetRouter(r)

// backup server
if err := r.Run(":54639"); err != nil {
	panic(err)
}
// if global.Config.Tls == nil {
// 	// http
// 	if err := r.Run(port); err != nil {
// 		panic(err)
// 	}
// } else {
// 	// https
// 	if err := r.RunTLS(port, global.Config.Tls.Cert, global.Config.Tls.Key); err != nil {
// 		panic(err)
// 	}
// }
}
