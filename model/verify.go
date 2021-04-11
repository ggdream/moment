package model


type VerifyForm struct {
	Text		string	`json:"file" form:"file"`
	Hash		string	`json:"hash" form:"hash"`
}
