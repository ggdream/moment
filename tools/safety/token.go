package safety

import (
	"crypto/md5"
	"fmt"
	"strconv"
	"time"
	"unsafe"
)


func GenToken() string {
	ts := time.Now().UnixNano()
	str := strconv.Itoa(int(ts))
	return fmt.Sprintf("%x", md5.Sum(*(*[]byte)(unsafe.Pointer(&str))))
}
