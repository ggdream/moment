export default class Config {
    static baseURL = location.origin + '/x'
    static timeout = 3000
    static iv = '0102030405060708'

    static mock = [
        {
          label: "记录1",
          datetime: "2021/04/10 18:04",
          vid: '0',
          image: 'http://127.0.0.1:54639/100.jpg'
        },
        {
            label: "记录11",
            datetime: "2021/04/10 18:04",
            vid: '1',
            image: 'http://127.0.0.1:54639/130.jpg'
        },
        {
            label: "记录12",
            datetime: "2021/04/10 18:04",
            vid: '2',
            image: 'http://127.0.0.1:54639/120.jpg'
        },
        {
            label: "记录13",
            datetime: "2021/04/10 18:04",
            vid: '3',
            image: 'http://127.0.0.1:54639/104.jpg'
        },
        {
            label: "记录14",
            datetime: "2021/04/10 18:04",
            vid: '4',
            image: 'http://127.0.0.1:54639/400.jpg'
        },
        {
            label: "记录15",
            datetime: "2021/04/10 18:04",
            vid: '5',
            image: 'http://127.0.0.1:54639/160.jpg'
        },
        {
            label: "记录1",
            datetime: "2021/04/10 18:04",
            vid: '6',
            image: 'http://127.0.0.1:54639/600.jpg'
        },
      ]
    static marker = {
        toolbars: {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          link: true, // 链接
          imagelink: true, // 图片链接
          code: true, // code
          table: true, // 表格
          fullscreen: true, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          htmlcode: true, // 展示html源码
          save: true, // 保存（触发events中的save事件）
          navigation: true, // 导航目录
          alignleft: true, // 左对齐
          aligncenter: true, // 居中
          alignright: true, // 右对齐
          subfield: false, // 单双栏模式
          preview: true, // 预览
        },
      }
}
