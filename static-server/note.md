url.parse(req.url)后得到一个url对象
```
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/luoqian',
  path: '/luoqian',
  href: '/luoqian' }

```

缓存控制
1、Gzip压缩文件可以减少响应的大小
2、浏览器缓存中存有文件副本的时候，不能确定有效的时候，会生成一个条件get请求。
  请求头中包含if-modified-since
  如果文件在服务器端修改，发送整个文件
  如果没有修改返回304
  ETag
3、如果副本有效，这个get请求都会省掉。判断有效的方法是服务器响应时候带上expires头
  浏览器会判断expires头，直到制定的日期过期，才会发起新的请求
  Cache-Control：max-age=xxx

1、为指定几种后缀的文件，在响应时添加Expries头和Cache-Control：max-age头。超时日期为1年
2、为所有请求，响应时返回Last-Modified
3、为带if-modified-since的请求头，做日期检查，如果没有修改，返回304,若修改返回文件

