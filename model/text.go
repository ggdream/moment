package model


type TextModel struct {
	Label		string	`json:"label" form:"label"`
	SubTitle	string	`json:"subtitle" form:"subtitle"`
	DateTime	string	`json:"datetime" form:"datetime"`
	Image		string	`json:"image" form:"image"`
	Text		string	`json:"text" form:"text"`
	Vid			string	`json:"vid" form:"vid"`
}
