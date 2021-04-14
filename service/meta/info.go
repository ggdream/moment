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
		showes = append(showes, "http://"+path.Join("127.0.0.1:54639/o", v))
	}
	errno.Return(c, errno.SUCCESS, gin.H{
		"avatar": "http://"+path.Join("127.0.0.1:54639/o", global.Config.Avatar),
		"show": showes,
	}, "获取成功")
}
