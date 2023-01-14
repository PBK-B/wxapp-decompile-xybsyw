<!--
 * @Author: Bin
 * @Date: 2022-12-04
 * @FilePath: /_-904599053_270/README.md
-->
# 微信小程序逆向之校友邦小程序请求加密算法解析

> 文章地址: https://bin.zmide.com/?p=1078

他喵的，学校要求必须实习每天在 **校友邦 **小程序打卡。（我寻思着在公司上班都没有要求我们打卡，这他喵实习还整这套？我这小暴脾气能忍？于是乎，找了一下发现已经有大佬实现了 <https://github.com/BytePrince/XYB_Auto_Sign>

比如说在云函数中按照教程直接部署你会发现出现以下报错
```
{
	"errorCode": 1,
	"errorMessage": "Traceback (most recent call last):\n  File \"/var/runtime/python37/bootstrap.py\", line 133, in init_handler\n    func_handler = get_func_handler(file.rsplit(\".\", 1)[0], func)\n  File \"/var/runtime/python37/bootstrap.py\", line 159, in get_func_handler\n    mod = imp.load_module(mname, *imp.find_module(mname))\n  File \"/var/lang/python37/lib/python3.7/imp.py\", line 234, in load_module\n    return load_source(name, filename, file)\n  File \"/var/lang/python37/lib/python3.7/imp.py\", line 171, in load_source\n    module = _load(spec)\n  File \"Ϗrozen; importlib._bootstrap&gt;\", line 696, in _load\n  File \"Ϗrozen; importlib._bootstrap&gt;\", line 677, in _load_unlocked\n  File \"Ϗrozen; importlib._bootstrap_external&gt;\", line 728, in exec_module\n  File \"Ϗrozen; importlib._bootstrap&gt;\", line 219, in _call_with_frames_removed\n  File \"/var/user/index.py\", line 2, in &lt;module;&gt;\n    import requests\nModuleNotFoundError: No module named 'requests'",
	"requestId": "xxxxxxx",
	"statusCode": 443
}
```

出现这个问题的主要原因用一句话来说就是云函数没有下载 requests 依赖，参考文档 <https://cloud.tencent.com/document/product/583/39780>
修复办法就是先把项目代码拉到你电脑本地，然后执行下列命令，执行完后将整个项目打包成一个压缩包上传到云函数

```
pip3 install requests -t . 
```

其他的，按照文档部署到腾讯云函数就好了。（虽然踩了一些坑，但是总体来说还是可以部署成功的，我这边会把修复好的打包放到附件

那么这篇博客就到此结束🐶…

不不不，要是这样的话，我这篇博客就没必要写了。如果你细心点的话就会在你云函数的 log 中发现如下图的报错

![image.png](https://bin.zmide.com/wp-content/uploads/2022/12/2022120400345887-1024x110.png)

这是重新签到出现请求失败了，于是我重新抓包了这个接口（怎么抓包接口的话可以自己去学一下这里不展开讲）

得到一个如下（关键数据已脱敏，想要跟着分析的小伙伴可以自己去抓一个请求跟着玩）的请求
```
POST /student/clock/Post!updateClock.action HTTP/1.1
Host: xcx.xybsyw.com
Connection: keep-alive
Content-Length: 250
charset: utf-8
s: 44_34_52_3_6_61_57_26_35_0_18_23_58_8_1_50_00_00_00_00
t: 1600076401
cookie: JSESSIONID=xxxxxxx
v: 1.6.36
User-Agent: xxxxxx
content-type: application/x-www-form-urlencoded
Accept-Encoding: gzip,compress,br,deflate
m: d849865b6c0143c0a189cebcdac000000
n: content,deviceName,keyWord,blogBody,blogTitle,getType,responsibilities,street,text,reason,searchvalue,key,answers,leaveReason,personRemark,selfAppraisal,imgUrl,wxname,deviceId,avatarTempPath,file,file,model,brand,system,deviceId,platform,code,openId,unionid
Referer: https://servicewechat.com/wx9f1c2e0bbc10673c/270/page-frame.html

traineeId=9580021&adcode=000000&lat=00.400663&lng=000.40098&address=这是详细地址鸭&deviceName=MiPro&punchInStatus=1&clockStatus=2
```

刚开始我还以为只是换了 URL，但是当我改成新的 URL 后发现还是请求失败，于是我尝试重发抓到的请求，发现是能够请求成功的，那么问题肯定是出在了请求参数上

于是我就一条条删请求头参数，得到有以下几个参数必传
```
s: 44_34_52_3_6_61_57_26_35_0_18_23_58_8_1_50_00_00_00_00
t: 1600076401
cookie: JSESSIONID=xxxxxxx
v: 1.6.36
m: d849865b6c0143c0a189cebcdac000000
n: content,deviceName,keyWord,blogBody,blogTitle,getType,responsibilities,street,text,reason,searchvalue,key,answers,leaveReason,personRemark,selfAppraisal,imgUrl,wxname,deviceId,avatarTempPath,file,file,model,brand,system,deviceId,platform,code,openId,unionid
```

到这里，我基本可以断定这厮绝壁做了数据加密效验。

那我还能怎么办？宠着呗。
小程序逆向，拿到加密算法。（这边小程序逆向不是重点，所以这里也不多扯了，感兴趣可以看看 <https://github.com/xuedingmiaojun/wxappUnpacker>，如果你要问我这个仓库都删库跑路了怎么参考的话，我想说这都是开源的动动你聪明的小脑袋瓜子能有办法的

拿到小程序源码后，能看到它这边封装了一个请求函数 `xyb_request`
于是我们能看到它一个网站的请求大概是
```
xyb_request("uploadfile/commonPostPolicy.action","POST",{customerType:e,uploadType:a,publicRead:t},!1,!1)
```
顺藤摸瓜，找到这个函数的实现是在 common.js 文件里

![xxxxx.png](https://bin.zmide.com/wp-content/uploads/2022/12/2022120400370368-1024x717.png)

然后简单分析一下，根据上面的请求调用
a 参数就是 "uploadfile/commonPostPolicy.action"
t 参数就是 "POST"
n 参数就是 {customerType:e,uploadType:a,publicRead:t}
o 参数和 l 参数 就是 !1 （至于 !1 是啥那就不重要了），v 参数就没有传

能看到实际上代码就是在 header 参数里加上了 y 这个对象，然后能看出来 y 对象实际上是先调用了 p.getTokenData(n, a) 函数然后拿到里面的 md5，tstr，iArrStr 参数给到请求里。

那么主要的算法实现逻辑就是在 getTokenData 这个函数里了，继续摸下去。我们看到这个函数的具体实现如下

![xxxxx.png](https://bin.zmide.com/wp-content/uploads/2022/12/2022120400364815-1024x662.png)

能看到，这里接受两个参数，根据上面的调用我们又分析一下
e 参数就是 {customerType:e,uploadType:a,publicRead:t}
a 参数就是 "uploadfile/commonPostPolicy.action"

在 getTokenData 函数的实现中，a 参数实际上没有参加算法加密的过程。
然后现在我们知道了，实际上就是请求 body 传进来然后能够生成出密钥和盐还有时间戳。
现在可以开始尝试还原算法了，首先先将代码复制出来到浏览器调试里运行一下，我甚至都不想一行一行去理解它到底做了些啥，直接整个函数实现拷贝出来，扔到浏览器运行一下。

![xxxx.png](https://bin.zmide.com/wp-content/uploads/2022/12/2022120400360916-1024x357.png)

能看到，这里报错了，它说 c 这个东西不存在。我们看看哪里有 c 这个东东。

![xxxx.png](https://bin.zmide.com/wp-content/uploads/2022/12/2022120400383589-1024x254.png)

发现它了，就是 c.a.hexMD5(d) 这个东西，其实通过名称我们就能猜出来其实就是去调用一个 md5 编码函数。于是我们直接给他弄个 md5 编码函数然后替换它。

由于代码太长了我这里就不贴了主要就是参考 <http://www.jsphp.net/uploadfile/js/md5.rar>

下面能看到函数能够执行成功了，于是我们把参数带上去执行。

![xxxx.png](https://bin.zmide.com/wp-content/uploads/2022/12/2022120400393032-1024x359.png)

哦豁，又报错了。带参数之后看到有调用一个 l.test(p[g]) 逻辑

![xxxx.png](https://bin.zmide.com/wp-content/uploads/2022/12/2022120400394552-1024x253.png)

于是在  common.js 代码文件里我找到了 l 的定义，我们把它给复制过来就好了。

![xxxxx.png](https://bin.zmide.com/wp-content/uploads/2022/12/2022120400395517-1024x360.png)

![xxxxx.png](https://bin.zmide.com/wp-content/uploads/2022/12/2022120400402834-1024x315.png)

现在这个加密算法函数基本上就找到并且复现好了。到这里就结束了吗？不不不，如果是说这个小程序被完整逆向出来的话我找到 /student/clock/Post!updateClock.action 这个请求的调用就能知道 body 传递的是什么参数了，但是好像我这边逆向出来的小程序并不完整。

所以我还需要确定 body 里的哪几个参数参与了加密算法的运算，于是我就先通过 Postman 不断的修改请求 body 中的参数，如果我修改的某个参数请求失败了，那么我就可以确定这个参数是参与加密的。
于是乎经过我漫长的 debug、终于找到 /student/clock/Post!updateClock.action 请求加密参数实际上是由 traineeId、adcode、address、punchInStatus、clockStatus 参数组成的。
```
{
	traineeId: 900001,
	adcode: 400005,
	address: "北京天安门广场红旗下",
	punchInStatus: 1,
	clockStatus: 2
}
```

最后注意一下，调用 getTokenData 函数传的并不是 json 字符串而是 object 对象。 
小程序逆向出来的代码文件和处理好的加密算法 js 文件我会传到附件的。
