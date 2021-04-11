package router

import (
	"github.com/ggdream/moment/global"
	"github.com/ggdream/moment/service/file"
	"github.com/ggdream/moment/service/login"
	"github.com/ggdream/moment/service/meta"
	"github.com/ggdream/moment/service/record"
	"github.com/gin-gonic/gin"
	"net/http"
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
	x.GET("/verify", login.Verify)

	x.GET("/record/get", record.GetRecord)
	//x.GET("/record/set", safe.VerifyToken(), record.SetRecord)
	x.GET("/record/set", record.SetRecord)
	x.GET("/record/text", file.TextGetter)
}

