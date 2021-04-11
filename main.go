package main

import (
	"embed"
	"github.com/ggdream/moment/app"
)


//go:embed page/dist
var moment embed.FS

func main() {
	app.New(moment)
}
