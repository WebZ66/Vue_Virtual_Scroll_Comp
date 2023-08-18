| 参数           | 方法                                                 | 效果                                                         |
| -------------- | ---------------------------------------------------- | ------------------------------------------------------------ |
| 获取请求头     | const {request}=ctx<br />console.log(request.header) | ![image-20230817145715595](https://gitee.com/zhengdashun/pic_bed/raw/master/img/image-20230817145715595.png) |
| 获取query参数  | ctx.query                                            | ![image-20230817145732644](https://gitee.com/zhengdashun/pic_bed/raw/master/img/image-20230817145732644.png) |
| 获取params参数 | ctx.params                                           | 同理                                                         |
| 设置响应头     | ctx.set()或者ctx.response.set()                      | ctx.set('Access-Control-Allow-Origin', origin)               |

