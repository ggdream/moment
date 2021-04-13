package login

import (
	"strconv"
	"time"

	"github.com/ggdream/moment/global"
	"github.com/ggdream/moment/model"
	"github.com/ggdream/moment/tools/errno"
	"github.com/ggdream/moment/tools/safety"
	"github.com/gin-gonic/gin"
)


func Verify(c *gin.Context)  {
	var form model.VerifyForm
	if err := c.ShouldBind(&form); err != nil {
		errno.Return(c, errno.FAILED, nil, "表单错误")
		return
	}

	if (form.Time + 1000*60 > int(time.Now().UnixNano())) {
		errno.Return(c, errno.FAILED, nil, "表单过期")
		return
	}

	if !safety.VerifySign(strconv.Itoa(form.Time)+form.Salt, form.Sign) {
		errno.Return(c, errno.FAILED, nil, "认证失败")
		return
	}

	token := safety.GenToken()
	global.VerifyClients = append(global.VerifyClients, token)
	go timer(len(global.VerifyClients)-1)
	errno.Return(c, errno.SUCCESS, token, "认证成功")
}

func timer(index int) {
	time.Sleep(1 * time.Hour)
	global.VerifyClients = append(global.VerifyClients[:index], global.VerifyClients[index+1:]...)
}
