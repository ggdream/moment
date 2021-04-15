package app

import (
	"embed"
	"fmt"
	"net/http"
	"net/http/httputil"
	"net/url"
	"path"
	"strings"

	"github.com/ggdream/moment/global"
)

func transPort(port int) string {
	return fmt.Sprintf(":%d", port)
}

func frontServer(fs embed.FS) {
	port := transPort(global.Config.Port)
	http.Handle("/", AddPrefix("/page/dist/", http.FileServer(http.FS(fs))))
	if err := http.ListenAndServe(port, nil); err != nil {
		panic(err)
	}
}

// resolve the http2fs interface
func AddPrefix(prefix string, h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		secArray := strings.Split(r.URL.Path, "/")
		// 如果不是静态资源，
		// 1.不包含/x和/o：认定为前端路由，一律重定向值至根目录，即 "/"
		// 2.包含/x和/o：反向代理到global.Config.Server (`server` field defined in config file)
		if !strings.ContainsAny(secArray[len(secArray)-1], ".") && r.URL.Path != "/" {
			if strings.HasPrefix(r.URL.Path, "/o") || strings.HasPrefix(r.URL.Path, "/x") {
				remote, err := url.Parse(global.Config.Server)
				if err != nil {
					panic(err)
				}
				proxy := httputil.NewSingleHostReverseProxy(remote)
				proxy.ServeHTTP(w, r)
			} else {
				http.Redirect(w, r, "/", http.StatusMovedPermanently)
				return
			}
		}

		var p string
		var rp string
		if r.URL.Path != "/" {
			p = path.Join(prefix, r.URL.Path)
			rp = path.Join(prefix, r.URL.RawPath)
		} else {
			p = prefix
			rp = prefix
		}

		if len(p) > len(r.URL.Path) && (r.URL.RawPath == "" || len(rp) > len(r.URL.RawPath)) {
			r2 := new(http.Request)
			*r2 = *r
			r2.URL = new(url.URL)
			*r2.URL = *r.URL
			r2.URL.Path = p
			r2.URL.RawPath = rp
			h.ServeHTTP(w, r2)
		} else {
			http.Redirect(w, r, "/", http.StatusMovedPermanently)
		}
	})
}
