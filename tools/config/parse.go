package config

import (
	"encoding/json"
	"os"
	"path/filepath"
	"strings"

	"github.com/ggdream/moment/model"

	"gopkg.in/yaml.v2"
)

func Parse(_path interface{}, records *[]*model.Record) (*Config, error) {
	path, ok := _path.(string)
	if !ok {
		path = ""
	}
	res, err := os.ReadFile(path)
	if err != nil && os.IsExist(err) {
		return nil, err
	}

	var config Config
	if err == nil {
		// 使用配置文件
		err = yaml.Unmarshal(res, &config)
		if err != nil {
			return nil, err
		}
	}
	if err := handler(&config, records); err != nil {
		return nil, err
	}

	return &config, nil
}

func handler(config *Config, globalRecords *[]*model.Record) error {
	if config.Port == 0 {
		if config.Tls == nil {
			config.Port = 80
		} else {
			config.Port = 443
		}
	}

	if config.Server == "" {
		config.Server = "http://127.0.0.1:54639"
	} else if !strings.HasPrefix(config.Server, "http") {
		config.Server = "http://" + config.Server
	}

	if config.Avatar == "" {
		config.Avatar = "avatar.jpg"
	}
	if config.File == "" {
		config.File = "workdir"
	}

	_filePath1 := filepath.Join(config.File, "markd")
	_, err := os.Stat(_filePath1)
	if err != nil && os.IsNotExist(err) {
		if err := os.MkdirAll(_filePath1, 0666); err != nil {
			return err
		}
	}

	_filePath2 := filepath.Join(config.File, "images")
	_, err = os.Stat(_filePath2)
	if err != nil && os.IsNotExist(err) {
		if err := os.MkdirAll(_filePath2, 0666); err != nil {
			return err
		}
	}

	if _, err := os.Stat( filepath.Join(config.File, "recordfile.json")); !os.IsNotExist(err) {
		data, err := os.ReadFile(filepath.Join(config.File, "recordfile.json"))
		if err != nil {
			return err
		}

		var records []*model.Record
		if err := json.Unmarshal(data, &records); err != nil {
			return err
		}
		*globalRecords = records
	}

	return nil
}
