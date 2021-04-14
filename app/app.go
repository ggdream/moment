package app

import "embed"


func New(fs embed.FS) {
	Init()

	// front static server
	go frontServer(fs)

	// backup server
	backupServer()
}
