package record

import (
	"crypto/md5"
	"encoding/json"
	"fmt"
	"github.com/ggdream/moment/global"
	"os"
	"unsafe"

	"github.com/ggdream/moment/model"
	"github.com/ggdream/moment/tools/errno"
	"github.com/ggdream/moment/tools/paths"
	"github.com/gin-gonic/gin"
)



func SetRecord(c *gin.Context) {
	var form model.TextModel
	if err := c.ShouldBind(&form); err != nil {
		errno.Return(c, errno.FAILED, nil, "表单错误")
		return
	}

	vid := fmt.Sprintf("%x", md5.Sum(*(*[]byte)(unsafe.Pointer(&form.Text))))
	record := &model.Record{
		Label: form.Label,
		SubTitle: form.SubTitle,
		DateTime: form.DateTime,
		Image: form.Image,
		Vid: vid,
	}
	global.Records = append(global.Records, record)

	finalData, err := json.Marshal(global.Records)
	if err != nil {
		errno.Return(c, errno.FAILED, nil, "序列化Json失败")
		return
	}

	if err := os.WriteFile(paths.GetMarkdFilePath(global.Config.File, vid), *(*[]byte)(unsafe.Pointer(&form.Text)), 0666); err != nil {
		errno.Return(c, errno.FAILED, nil, "写入Mark文件失败")
		return
	}

	if err := os.WriteFile(paths.GetRecordFilePath(global.Config.File, global.RecordFile), finalData, 0666); err != nil {
		errno.Return(c, errno.FAILED, nil, "写入Json文件失败")
		return
	}

	errno.Return(c, errno.SUCCESS, vid, "上传成功")
}
