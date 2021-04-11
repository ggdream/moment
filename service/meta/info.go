package meta

import (
	"github.com/ggdream/moment/global"
	"github.com/ggdream/moment/tools/errno"
	"github.com/gin-gonic/gin"
	"path"
)

func ShowInfo(c *gin.Context) {
	show := global.Config.Show
	showes := make([]string, 0)
	if show != nil {
		for _, v := range show {
			showes = append(showes, path.Join("/o", v))
		}
	}
	errno.Return(c, errno.SUCCESS, gin.H{
		"avatar": path.Join("/o", global.Config.Avatar),
		"show": showes,
	}, "获取成功")
}
