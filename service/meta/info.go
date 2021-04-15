package meta

import (
	"path"

	"github.com/ggdream/moment/global"
	"github.com/ggdream/moment/tools/errno"
	"github.com/gin-gonic/gin"
)

func ShowInfo(c *gin.Context) {
	show := global.Config.Show
	showes := make([]string, 0)
	for _, v := range show {
		showes = append(showes, global.Config.Server+path.Join("/o", v))
	}
	errno.Return(c, errno.SUCCESS, gin.H{
		"avatar": global.Config.Server+path.Join("/o", global.Config.Avatar),
		"show": showes,
	}, "获取成功")
}
