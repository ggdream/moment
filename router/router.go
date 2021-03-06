package router

import (
	"net/http"

	"github.com/ggdream/moment/global"
	"github.com/ggdream/moment/middleware/safe"
	"github.com/ggdream/moment/service/file"
	"github.com/ggdream/moment/service/login"
	"github.com/ggdream/moment/service/meta"
	"github.com/ggdream/moment/service/record"
	"github.com/gin-gonic/gin"
)


func SetRouter(r *gin.Engine) {
	staticRoutes(r.Group("/o"))
	dynamicRoutes(r.Group("/x"))
}

// static routes
func staticRoutes(o *gin.RouterGroup) {
	o.StaticFS("/", http.Dir(global.Config.File))
}
// dynamic routes
func dynamicRoutes(x *gin.RouterGroup) {
	x.GET("/meta/info", meta.ShowInfo)
	x.POST("/verify", login.Verify)

	x.GET("/record/get", record.GetRecord)
	x.POST("/record/set", safe.VerifyToken(), record.SetRecord)
	x.GET("/record/text", file.TextGetter)
	x.POST("/record/image", file.UploadImage)
}

