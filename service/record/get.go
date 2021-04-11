package record

import (
	"github.com/ggdream/moment/global"
	"github.com/ggdream/moment/model"
	"github.com/ggdream/moment/tools/errno"
	"github.com/gin-gonic/gin"
	"path"
)


func GetRecord(c *gin.Context) {
	var form model.RecordForm
	if err := c.ShouldBind(&form); err != nil {
		errno.Return(c, errno.FAILED, nil, "表单错误")
		return
	}
	temp := make([]*model.Record, 0)
	if form.Offset + form.Number <= len(global.Records) {
		temp = global.Records[form.Offset: form.Offset + form.Number]
	} else if form.Offset < len(global.Records) {
		temp = global.Records[form.Offset:]
	}

	res := make([]*model.Record, 0)

	for _, v := range temp {
		res = append(res, &model.Record{
			Label: v.Label,
			SubTitle: v.SubTitle,
			Image: path.Join("/o", "images", v.Image),
			Vid: v.Vid,
			DateTime: v.DateTime,
		})
	}

	errno.Return(c, errno.SUCCESS, res, "获取成功")
}
