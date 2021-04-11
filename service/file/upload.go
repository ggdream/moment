package file

import (
	"crypto/md5"
	"fmt"
	"github.com/ggdream/moment/global"
	"github.com/ggdream/moment/tools/errno"
	"github.com/ggdream/moment/tools/paths"
	"github.com/gin-gonic/gin"
	"strconv"
	"strings"
	"time"
	"unsafe"
)


func UploadImage(c *gin.Context)  {
	file, err := c.FormFile("file")
	if err != nil {
		errno.Return(c, errno.FAILED, nil, "图片表单错误")
		return
	}
	str := file.Filename + strconv.FormatInt(file.Size, 10) + time.Now().String()
	token := fmt.Sprintf("%x", md5.Sum(*(*[]byte)(unsafe.Pointer(&str))))

	if err := c.SaveUploadedFile(file, paths.GetImagesPath(global.Config.File, token, strings.Split(file.Filename, ".")[1])); err != nil {
		errno.Return(c, errno.FAILED, nil, "图片保存失败")
		return
	}
	errno.Return(c, errno.SUCCESS, "/o/images/"+token+"."+strings.Split(file.Filename, ".")[1], "图片保存成功")
}
