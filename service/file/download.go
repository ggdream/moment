package file

import (
	"github.com/ggdream/moment/global"
	"github.com/ggdream/moment/tools/errno"
	"github.com/ggdream/moment/tools/paths"
	"github.com/gin-gonic/gin"
	"github.com/russross/blackfriday/v2"
	"os"
	"unsafe"
)

func TextGetter(c *gin.Context) {
	vid := c.Query("v")
	filePath := paths.GetMarkdFilePath(global.Config.File, vid)
	data, err := os.ReadFile(filePath)
	if err != nil {
		errno.Return(c, errno.FAILED, nil, "文件获取失败")
		return
	}

	res := blackfriday.Run(data)
	errno.Return(c, errno.SUCCESS, *(*string)(unsafe.Pointer(&res)), "文件获取成功")
}
