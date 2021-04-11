package safe

import (
	"github.com/ggdream/moment/global"
	"github.com/gin-gonic/gin"
	"net/http"
)

func VerifyToken() gin.HandlerFunc {
	return func(c *gin.Context) {
		token := c.Request.Header.Get("token")
		isHave := false
		for _, v := range global.VerifyClients {
			if v == token {
				isHave = true
				break
			}
		}

		if isHave {
			c.Next()
		} else {
			c.AbortWithStatusJSON(http.StatusOK, gin.H{
				"code": "1",
				"data": "",
				"msg": "没有权限",
			})
		}
	}
}
