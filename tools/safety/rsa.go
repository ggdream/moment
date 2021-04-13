package safety

import (
	"crypto/rsa"
	"unsafe"

	"github.com/ggdream/crypto"
	. "github.com/ggdream/crypto/rsa"
	"github.com/ggdream/moment/global"
)


func GenerateKeyPairs() (string, *rsa.PublicKey) {
	pri, pub := GenerateKey(1024)
	return SetPrivateKeyToPem(pri), pub
}

func VerifySign(text, hash string) bool {
	base, err := crypto.DeBase64(hash)
	if err != nil {
		return false
	}
	return Verify(*(*[]byte)(unsafe.Pointer(&text)), base, global.PublicKey)
}
