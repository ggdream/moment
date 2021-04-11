package paths

import (
	"path/filepath"
)


func GetMarkdFilePath(prefix, vid string) string {
	return filepath.Join(prefix, "markd", vid + ".md")
}
