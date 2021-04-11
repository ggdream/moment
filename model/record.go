package model


type RecordForm struct {
	Offset		int	`json:"offset" form:"offset"`
	Number		int	`json:"number" form:"number"`
}


type Record struct {
	Label		string	`json:"label" form:"Label"`
	SubTitle	string	`json:"subtitle" form:"subtitle"`
	DateTime	string	`json:"datetime" form:"datetime"`
	Vid			string	`json:"vid" form:"vid"`
	Image		string	`json:"image" form:"image"`
}
