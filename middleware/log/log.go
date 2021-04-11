package log

import (
	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)


func WareLog() gin.HandlerFunc {

	logger := logrus.New()
	logger.SetLevel(logrus.DebugLevel)
	logger.SetFormatter(&logrus.TextFormatter{
		TimestampFormat:"2006-01-02 15:04:05",
	})

	return func(c *gin.Context) {
		reqUri := c.Request.RequestURI
		statusCode := c.Writer.Status()
		reqMethod := c.Request.Method
		c.Next()
		clientIP := c.ClientIP()


		logger.Infof("| %3d | %15s | %s | %s",
			statusCode,
			clientIP,
			reqMethod,
			reqUri)
	}
}
