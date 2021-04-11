package config


type Config struct {
	Port		int			`yaml:"port"`
	Tls			*Tls		`yaml:"tls"`

	File		string		`yaml:"file"`
	Show		[]string	`yaml:"show"`
	Avatar		string		`yaml:"avatar"`
}

type Tls struct {
	Cert		string		`yaml:"cert"`
	Key			string		`yaml:"key"`
}
