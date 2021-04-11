package errno

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func Return(c *gin.Context, types int, data interface{}, msg string) {
	c.JSON(http.StatusOK, gin.H{
		"code": types,
		"data": data,
		"msg": msg,
	})
}
