package model


type VerifyForm struct {
	Time		int	`json:"time" form:"time"`
	Salt		string	`json:"salt" form:"salt"`
	Sign		string	`json:"sign" form:"sign"`
}
