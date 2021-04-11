package paths

import (
	"path/filepath"
)


func GetRecordFilePath(prefix, recordFile string) string {
	return filepath.Join(prefix, recordFile)
}
