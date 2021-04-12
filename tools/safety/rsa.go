package safety

import (
	"crypto/rsa"
	"fmt"
	"unsafe"

	. "github.com/ggdream/crypto/rsa"
	"github.com/ggdream/moment/global"
)


func GenerateKeyPairs() (string, *rsa.PublicKey) {
	pri, pub := GenerateKey(1024)
	return SetPrivateKeyToPem(pri), pub
}

func VerifySign(text, hash string) bool {
	fmt.Println(*global.PublicKey)
	return Verify(*(*[]byte)(unsafe.Pointer(&text)), *(*[]byte)(unsafe.Pointer(&hash)), global.PublicKey)
}
