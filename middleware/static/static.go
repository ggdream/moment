package static

import (
	"embed"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)


func WareStatic(fs embed.FS) gin.HandlerFunc {
	return static.Serve("/", EmbedFolder(fs, "page/dist"))
}
