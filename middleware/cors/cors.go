package cors

import (
	"github.com/gin-gonic/gin"
	"net/http"
)


func WareCors() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Methods", "GET,POST,POTIONS")
		c.Header("Access-Control-Allow-Headers", "Content-Length,token,Content-Type")
		c.Header("Access-Control-Expose-Headers", "Content-Length")
		c.Header("Access-Control-Max-Age", "172800")
		c.Header("Access-Control-Allow-Credentials", "true")

		if c.Request.Method == http.MethodOptions {
			c.AbortWithStatus(http.StatusNoContent)
		}
		c.Next()
	}
}