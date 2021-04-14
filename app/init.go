package app

import (
	"os"

	"github.com/ggdream/mini"
	"github.com/ggdream/moment/global"
	"github.com/ggdream/moment/tools/config"
	"github.com/ggdream/moment/tools/safety"
)


func Init() {
	argv := mini.New(os.Args[1:])
	conf, err := config.Parse(argv.GetFlag("-f"), &global.Records)
	if err != nil {
		panic(err)
	}
	global.Config = conf

	priPem, pubPem := safety.GenerateKeyPairs()
	if err := os.WriteFile("verify.key", []byte(priPem), 0644); err != nil {
		panic(err)
	}
	global.PublicKey = pubPem
}
