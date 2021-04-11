package global

import (
	"crypto/rsa"
	"github.com/ggdream/moment/tools/config"
)


var (
	Config  	*config.Config
	PublicKey	*rsa.PublicKey

	VerifyClients = make([]string, 0)
)
