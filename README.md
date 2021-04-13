# 轻量级迷你博客

## 安装

1. golang环境
    ~~~sh
    # require golang sdk version >= 1.16
    $ go get -u github.com/ggdream/moment
    ~~~

2. 二进制分发
    ~~~sh
    # 打开Release页面选择对应OS-ARCH下载
    ~~~


3. 手动编译
    ~~~sh
    # require golang sdk version >= 1.16 and node.js env
    $ git clone https://github.com/ggdream/moment.git
    $ ./run.cmd     # Windows
    $ ./run.sh      # Linux or MacOS
    # must compile the front page before running `go build` to be compiled into the binary file through `embed feature`
    ~~~
