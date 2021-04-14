# 轻量级迷你博客

## 安装
1. 二进制分发
    ~~~sh
    # 打开Release页面选择对应OS-ARCH下载
    ~~~

2. 手动编译并运行(exclude page)
    ~~~sh
    # require golang sdk version >= 1.16
    $ git clone https://github.com/ggdream/moment.git && cd moment
    $ go generate
    ~~~


3. 手动编译并运行(include page)
    ~~~sh
    # require golang sdk version >= 1.16 and node.js env
    $ git clone https://github.com/ggdream/moment.git && cd moment
    $ ./run.cmd     # Windows
    # or
    $ ./run.sh      # Linux or MacOS
    # must compile the front page before running `go build` to be compiled into the binary file through `embed feature`
    ~~~
