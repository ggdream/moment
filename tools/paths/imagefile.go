package paths

import (
	"path/filepath"
)


func GetImagesPath(prefix, hash, suffix string) string {
	return filepath.Join(prefix, "images", hash + "." + suffix)
}
