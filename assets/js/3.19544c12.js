(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{51:function(t,r,a){"use strict";a.r(r);var e=a(0),s=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"content"},[a("p",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://i.imgur.com/NZpRScX.png",alt:"RSSHub",width:"100"}})]),a("h1",{staticClass:"logo",attrs:{align:"center"}},[t._v("RSSHub")]),a("p",[t._v("RSSHub 是一个轻量、易于扩展的 RSS 生成器，可以给任何奇奇怪怪的内容生成 RSS 订阅源")]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),a("p",[t._v("演示地址为 "),a("a",{attrs:{href:"https://rsshub.app",target:"_blank",rel:"noopener noreferrer"}},[t._v("rsshub.app")]),t._v("，缓存时间 10 分钟，可以随意使用")])]),a("h2",{attrs:{id:"内容过滤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容过滤","aria-hidden":"true"}},[t._v("#")]),t._v(" 内容过滤")]),a("p",[t._v("可以使用以下 URL query 过滤出想要的内容，支持正则")]),a("ul",[a("li",[a("p",[t._v("filter: 过滤标题和描述")])]),a("li",[a("p",[t._v("filter_title: 过滤标题")])]),a("li",[a("p",[t._v("filter_description: 过滤描述")])])]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/bilibili/user/coin/2267573?filter=%E5%BE%AE%E5%B0%8F%E5%BE%AE%7C%E8%B5%A4%E4%B9%9D%E7%8E%96%7C%E6%9A%B4%E8%B5%B0%E5%A4%A7%E4%BA%8B%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/bilibili/user/coin/2267573?filter=微小微|赤九玖|暴走大事件")])]),a("h2",{attrs:{id:"bilibili"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bilibili","aria-hidden":"true"}},[t._v("#")]),t._v(" bilibili")]),a("h3",{attrs:{id:"番剧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#番剧","aria-hidden":"true"}},[t._v("#")]),t._v(" 番剧")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/bilibili/bangumi/21680",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/bilibili/bangumi/21680")])]),a("p",[t._v("路由: "),a("code",[t._v("/bilibili/bangumi/:seasonid")])]),a("p",[t._v("参数: seasonid，番剧 id，可在番剧主页 URL 中找到")]),a("h3",{attrs:{id:"up-主投稿"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#up-主投稿","aria-hidden":"true"}},[t._v("#")]),t._v(" UP 主投稿")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/bilibili/user/video/2267573",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/bilibili/user/video/2267573")])]),a("p",[t._v("路由: "),a("code",[t._v("/bilibili/user/video/:uid")])]),a("p",[t._v("参数: uid，用户 id，可在 UP 主主页中找到")]),a("h3",{attrs:{id:"up-主动态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#up-主动态","aria-hidden":"true"}},[t._v("#")]),t._v(" UP 主动态")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/bilibili/user/dynamic/2267573",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/bilibili/user/dynamic/2267573")])]),a("p",[t._v("路由: "),a("code",[t._v("/bilibili/user/dynamic/:uid")])]),a("p",[t._v("参数: uid，用户 id，可在 UP 主主页中找到")]),a("h3",{attrs:{id:"up-主收藏夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#up-主收藏夹","aria-hidden":"true"}},[t._v("#")]),t._v(" UP 主收藏夹")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/bilibili/user/fav/2267573",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/bilibili/user/fav/2267573")])]),a("p",[t._v("路由: "),a("code",[t._v("/bilibili/user/fav/:uid")])]),a("p",[t._v("参数: uid，用户 id，可在 UP 主主页中找到")]),a("h3",{attrs:{id:"up-主投币视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#up-主投币视频","aria-hidden":"true"}},[t._v("#")]),t._v(" UP 主投币视频")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/bilibili/user/coin/2267573",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/bilibili/user/coin/2267573")])]),a("p",[t._v("路由: "),a("code",[t._v("/bilibili/user/coin/:uid")])]),a("p",[t._v("参数: uid，用户 id，可在 UP 主主页中找到")]),a("h3",{attrs:{id:"up-主粉丝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#up-主粉丝","aria-hidden":"true"}},[t._v("#")]),t._v(" UP 主粉丝")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/bilibili/user/followers/2267573",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/bilibili/user/followers/2267573")])]),a("p",[t._v("路由: "),a("code",[t._v("/bilibili/user/followers/:uid")])]),a("p",[t._v("参数: uid，用户 id，可在 UP 主主页中找到")]),a("h3",{attrs:{id:"up-主关注用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#up-主关注用户","aria-hidden":"true"}},[t._v("#")]),t._v(" UP 主关注用户")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/bilibili/user/followings/2267573",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/bilibili/user/followings/2267573")])]),a("p",[t._v("路由: "),a("code",[t._v("/bilibili/user/followings/:uid")])]),a("p",[t._v("参数: uid，用户 id，可在 UP 主主页中找到")]),a("h3",{attrs:{id:"分区视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分区视频","aria-hidden":"true"}},[t._v("#")]),t._v(" 分区视频")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/bilibili/partion/33",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/bilibili/partion/33")])]),a("p",[t._v("路由: "),a("code",[t._v("/bilibili/partion/:tid")])]),a("p",[t._v("参数: tid，分区 id")]),a("p",[t._v("动画")]),a("table",[a("thead",[a("tr",[a("th",[t._v("MAD·AMV")]),a("th",[t._v("MMD·3D")]),a("th",[t._v("短片·手书·配音")]),a("th",[t._v("综合")])])]),a("tbody",[a("tr",[a("td",[t._v("24")]),a("td",[t._v("25")]),a("td",[t._v("47")]),a("td",[t._v("27")])])])]),a("p",[t._v("番剧")]),a("table",[a("thead",[a("tr",[a("th",[t._v("连载动画")]),a("th",[t._v("完结动画")]),a("th",[t._v("资讯")]),a("th",[t._v("官方延伸")])])]),a("tbody",[a("tr",[a("td",[t._v("33")]),a("td",[t._v("32")]),a("td",[t._v("51")]),a("td",[t._v("152")])])])]),a("p",[t._v("国创")]),a("table",[a("thead",[a("tr",[a("th",[t._v("国产动画")]),a("th",[t._v("国产原创相关")]),a("th",[t._v("布袋戏")]),a("th",[t._v("资讯")])])]),a("tbody",[a("tr",[a("td",[t._v("153")]),a("td",[t._v("168")]),a("td",[t._v("169")]),a("td",[t._v("170")])])])]),a("p",[t._v("音乐")]),a("table",[a("thead",[a("tr",[a("th",[t._v("原创音乐")]),a("th",[t._v("翻唱")]),a("th",[t._v("VOCALOID·UTAU")]),a("th",[t._v("演奏")]),a("th",[t._v("三次元音乐")]),a("th",[t._v("OP/ED/OST")]),a("th",[t._v("音乐选集")])])]),a("tbody",[a("tr",[a("td",[t._v("28")]),a("td",[t._v("31")]),a("td",[t._v("30")]),a("td",[t._v("59")]),a("td",[t._v("29")]),a("td",[t._v("54")]),a("td",[t._v("130")])])])]),a("p",[t._v("舞蹈")]),a("table",[a("thead",[a("tr",[a("th",[t._v("宅舞")]),a("th",[t._v("三次元舞蹈")]),a("th",[t._v("舞蹈教程")])])]),a("tbody",[a("tr",[a("td",[t._v("20")]),a("td",[t._v("154")]),a("td",[t._v("156")])])])]),a("p",[t._v("游戏")]),a("table",[a("thead",[a("tr",[a("th",[t._v("单机游戏")]),a("th",[t._v("电子竞技")]),a("th",[t._v("手机游戏")]),a("th",[t._v("网络游戏")]),a("th",[t._v("桌游棋牌")]),a("th",[t._v("GMV")]),a("th",[t._v("音游")]),a("th",[t._v("Mugen")])])]),a("tbody",[a("tr",[a("td",[t._v("17")]),a("td",[t._v("171")]),a("td",[t._v("172")]),a("td",[t._v("65")]),a("td",[t._v("173")]),a("td",[t._v("121")]),a("td",[t._v("136")]),a("td",[t._v("19")])])])]),a("p",[t._v("科技")]),a("table",[a("thead",[a("tr",[a("th",[t._v("趣味科普人文")]),a("th",[t._v("野生技术协会")]),a("th",[t._v("演讲·公开课")]),a("th",[t._v("星海")]),a("th",[t._v("数码")]),a("th",[t._v("机械")]),a("th",[t._v("汽车")])])]),a("tbody",[a("tr",[a("td",[t._v("124")]),a("td",[t._v("122")]),a("td",[t._v("39")]),a("td",[t._v("96")]),a("td",[t._v("95")]),a("td",[t._v("98")]),a("td",[t._v("176")])])])]),a("p",[t._v("生活")]),a("table",[a("thead",[a("tr",[a("th",[t._v("搞笑")]),a("th",[t._v("日常")]),a("th",[t._v("美食圈")]),a("th",[t._v("动物圈")]),a("th",[t._v("手工")]),a("th",[t._v("绘画")]),a("th",[t._v("ASMR")]),a("th",[t._v("运动")]),a("th",[t._v("其他")])])]),a("tbody",[a("tr",[a("td",[t._v("138")]),a("td",[t._v("21")]),a("td",[t._v("76")]),a("td",[t._v("75")]),a("td",[t._v("161")]),a("td",[t._v("162")]),a("td",[t._v("175")]),a("td",[t._v("163")]),a("td",[t._v("174")])])])]),a("p",[t._v("鬼畜")]),a("table",[a("thead",[a("tr",[a("th",[t._v("鬼畜调教")]),a("th",[t._v("音MAD")]),a("th",[t._v("人力VOCALOID")]),a("th",[t._v("教程演示")])])]),a("tbody",[a("tr",[a("td",[t._v("22")]),a("td",[t._v("26")]),a("td",[t._v("126")]),a("td",[t._v("127")])])])]),a("p",[t._v("s")]),a("table",[a("thead",[a("tr",[a("th",[t._v("美妆")]),a("th",[t._v("服饰")]),a("th",[t._v("健身")]),a("th",[t._v("资讯")])])]),a("tbody",[a("tr",[a("td",[t._v("157")]),a("td",[t._v("158")]),a("td",[t._v("164")]),a("td",[t._v("159")])])])]),a("p",[t._v("广告")]),a("table",[a("thead",[a("tr",[a("th",[t._v("广告")])])]),a("tbody",[a("tr",[a("td",[t._v("166")])])])]),a("p",[t._v("娱乐")]),a("table",[a("thead",[a("tr",[a("th",[t._v("综艺")]),a("th",[t._v("明星")]),a("th",[t._v("Korea相关")])])]),a("tbody",[a("tr",[a("td",[t._v("71")]),a("td",[t._v("137")]),a("td",[t._v("131")])])])]),a("p",[t._v("影视")]),a("table",[a("thead",[a("tr",[a("th",[t._v("影视杂谈")]),a("th",[t._v("影视剪辑")]),a("th",[t._v("短片")]),a("th",[t._v("预告·资讯")]),a("th",[t._v("特摄")])])]),a("tbody",[a("tr",[a("td",[t._v("182")]),a("td",[t._v("183")]),a("td",[t._v("85")]),a("td",[t._v("184")]),a("td",[t._v("86")])])])]),a("h3",{attrs:{id:"视频评论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频评论","aria-hidden":"true"}},[t._v("#")]),t._v(" 视频评论")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/bilibili/video/reply/21669336",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/bilibili/video/reply/21669336")])]),a("p",[t._v("路由: "),a("code",[t._v("/bilibili/video/reply/:aid")])]),a("p",[t._v("参数: aid，可在视频页 URL 中找到")]),a("h3",{attrs:{id:"link-公告"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#link-公告","aria-hidden":"true"}},[t._v("#")]),t._v(" link 公告")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/bilibili/link/news/live",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/bilibili/link/news/live")])]),a("p",[t._v("路由: "),a("code",[t._v("/bilibili/link/news/:product")])]),a("p",[t._v("参数: product, 公告分类 包括 直播:live 小视频:vc 相簿:wh")]),a("h3",{attrs:{id:"直播开播"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直播开播","aria-hidden":"true"}},[t._v("#")]),t._v(" 直播开播")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/bilibili/live/room/3",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/bilibili/live/room/3")])]),a("p",[t._v("路由: "),a("code",[t._v("bilibili/live/room/:roomID")])]),a("p",[t._v("参数: roomID, 房间号 可在直播间 URL 中找到,长短号均可")]),a("h3",{attrs:{id:"直播搜索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直播搜索","aria-hidden":"true"}},[t._v("#")]),t._v(" 直播搜索")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/bilibili/live/search/%E7%BC%96%E7%A8%8B/online",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/bilibili/live/search/编程/online")])]),a("p",[t._v("路由: "),a("code",[t._v("bilibili/live/search/:key/:order")])]),a("p",[t._v("参数")]),a("p",[t._v("key: 搜索关键字")]),a("p",[t._v("order: 排序方式，live_time 开播时间，online 人气")]),a("h3",{attrs:{id:"直播分区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直播分区","aria-hidden":"true"}},[t._v("#")]),t._v(" 直播分区")]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),a("p",[t._v("由于接口未提供开播时间,如果直播间未更换标题与分区,将只会出现一次.如果直播间更换分区与标题,将再出现一次")])]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/bilibili/live/area/143/online",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/bilibili/live/area/143/online")])]),a("p",[t._v("路由: "),a("code",[t._v("bilibili/live/area/:areaID/:order")])]),a("p",[t._v("参数")]),a("p",[t._v("areaID: 分区ID 分区增删较多，可通过 "),a("a",{attrs:{href:"https://api.live.bilibili.com/room/v1/Area/getList",target:"_blank",rel:"noopener noreferrer"}},[t._v("分区列表")]),t._v(" 查询")]),a("p",[t._v("order: 排序方式，live_time 开播时间，online 人气")]),a("h2",{attrs:{id:"微博"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微博","aria-hidden":"true"}},[t._v("#")]),t._v(" 微博")]),a("h3",{attrs:{id:"博主"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#博主","aria-hidden":"true"}},[t._v("#")]),t._v(" 博主")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/weibo/user/3306934123",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/weibo/user/3306934123")])]),a("p",[t._v("路由: "),a("code",[t._v("/weibo/user/:uid")])]),a("p",[t._v("参数: uid，用户 id，博主主页打开控制台执行 "),a("code",[t._v("/uid=(\\d+)/. exec(document.querySelector('.opt_box .btn_bed').getAttribute('action-data'))[1]")]),t._v(" 获取")]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),a("p",[t._v("上述方案获取 V+ 付费博主会有数据缺失，所以这里提供另外一种方式，这种方式的缺点是描述不如上面的完善，建议优先选择第一种方案")])]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/weibo/user2/3306934123",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/weibo/user2/3306934123")])]),a("p",[t._v("路由: "),a("code",[t._v("/weibo/user2/:uid")])]),a("h3",{attrs:{id:"关键词"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关键词","aria-hidden":"true"}},[t._v("#")]),t._v(" 关键词")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/weibo/keyword/DIYgod",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/weibo/keyword/DIYgod")])]),a("p",[t._v("路由: "),a("code",[t._v("/weibo/keyword/:keyword")])]),a("p",[t._v("参数: keyword，你想订阅的微博关键词")]),a("h2",{attrs:{id:"即刻"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#即刻","aria-hidden":"true"}},[t._v("#")]),t._v(" 即刻")]),a("h3",{attrs:{id:"主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主题","aria-hidden":"true"}},[t._v("#")]),t._v(" 主题")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/jike/topic/54dffb40e4b0f57466e675f0",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/jike/topic/54dffb40e4b0f57466e675f0")])]),a("p",[t._v("路由: "),a("code",[t._v("/jike/topic/:id")])]),a("p",[t._v("参数: id，主题 id，可在即刻 web 端主题页或 APP 分享出来的主题页 URL 中找到")]),a("h3",{attrs:{id:"用户动态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户动态","aria-hidden":"true"}},[t._v("#")]),t._v(" 用户动态")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/jike/user/82D23B32-CF36-4C59-AD6F-D05E3552CBF3",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/jike/user/82D23B32-CF36-4C59-AD6F-D05E3552CBF3")])]),a("p",[t._v("路由: "),a("code",[t._v("/jike/user/:id")])]),a("p",[t._v("参数: id，用户 id，可在即刻 web 端用户页 URL 中找到")]),a("h2",{attrs:{id:"微信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微信","aria-hidden":"true"}},[t._v("#")]),t._v(" 微信")]),a("h3",{attrs:{id:"公众号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公众号","aria-hidden":"true"}},[t._v("#")]),t._v(" 公众号")]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),a("p",[t._v("公众号抓取困难，目前可提供的方案是通过即刻的公众号主题订阅")])]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/jike/topic/584b8ac671a288001154a115",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/jike/topic/584b8ac671a288001154a115")])]),a("h2",{attrs:{id:"网易云音乐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网易云音乐","aria-hidden":"true"}},[t._v("#")]),t._v(" 网易云音乐")]),a("h3",{attrs:{id:"歌单歌曲"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#歌单歌曲","aria-hidden":"true"}},[t._v("#")]),t._v(" 歌单歌曲")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/ncm/playlist/35798529",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/ncm/playlist/35798529")])]),a("p",[t._v("路由: "),a("code",[t._v("/ncm/playlist/:id")])]),a("p",[t._v("参数: id，歌单 id，可在歌单页 URL 中找到")]),a("h3",{attrs:{id:"用户歌单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户歌单","aria-hidden":"true"}},[t._v("#")]),t._v(" 用户歌单")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/ncm/user/playlist/45441555",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/ncm/user/playlist/45441555")])]),a("p",[t._v("路由: "),a("code",[t._v("/ncm/user/playlist/:uid")])]),a("p",[t._v("参数: uid，用户 uid，可在用户主页 URL 中找到")]),a("h3",{attrs:{id:"歌手专辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#歌手专辑","aria-hidden":"true"}},[t._v("#")]),t._v(" 歌手专辑")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/ncm/artist/2116",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/ncm/artist/2116")])]),a("p",[t._v("路由: "),a("code",[t._v("/ncm/artist/:id")])]),a("p",[t._v("参数: id，歌手 id，可在歌手详情页 URL 中找到")]),a("h2",{attrs:{id:"掘金"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#掘金","aria-hidden":"true"}},[t._v("#")]),t._v(" 掘金")]),a("h3",{attrs:{id:"分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分类","aria-hidden":"true"}},[t._v("#")]),t._v(" 分类")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/juejin/category/frontend",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/juejin/category/frontend")])]),a("p",[t._v("路由: "),a("code",[t._v("/juejin/category/:category")])]),a("p",[t._v("参数: category，分类名")]),a("table",[a("thead",[a("tr",[a("th",[t._v("前端")]),a("th",[t._v("Android")]),a("th",[t._v("iOS")]),a("th",[t._v("后端")]),a("th",[t._v("设计")]),a("th",[t._v("产品")]),a("th",[t._v("工具资源")]),a("th",[t._v("阅读")]),a("th",[t._v("人工智能")])])]),a("tbody",[a("tr",[a("td",[t._v("frontend")]),a("td",[t._v("android")]),a("td",[t._v("ios")]),a("td",[t._v("backend")]),a("td",[t._v("design")]),a("td",[t._v("product")]),a("td",[t._v("freebie")]),a("td",[t._v("article")]),a("td",[t._v("ai")])])])]),a("h2",{attrs:{id:"简书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简书","aria-hidden":"true"}},[t._v("#")]),t._v(" 简书")]),a("h3",{attrs:{id:"首页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首页","aria-hidden":"true"}},[t._v("#")]),t._v(" 首页")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/jianshu/home",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/jianshu/home")])]),a("p",[t._v("路由: "),a("code",[t._v("/jianshu/home")])]),a("p",[t._v("参数: 无")]),a("h3",{attrs:{id:"_7-日热门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-日热门","aria-hidden":"true"}},[t._v("#")]),t._v(" 7 日热门")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/jianshu/trending/weekly",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/jianshu/trending/weekly")])]),a("p",[t._v("路由: "),a("code",[t._v("/jianshu/trending/weekly")])]),a("p",[t._v("参数: 无")]),a("h3",{attrs:{id:"_30-日热门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_30-日热门","aria-hidden":"true"}},[t._v("#")]),t._v(" 30 日热门")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/jianshu/trending/monthly",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/jianshu/trending/monthly")])]),a("p",[t._v("路由: "),a("code",[t._v("/jianshu/trending/monthly")])]),a("p",[t._v("参数: 无")]),a("h3",{attrs:{id:"专题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#专题","aria-hidden":"true"}},[t._v("#")]),t._v(" 专题")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/jianshu/collection/xYuZYD",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/jianshu/collection/xYuZYD")])]),a("p",[t._v("路由: "),a("code",[t._v("/jianshu/collection/:id")])]),a("p",[t._v("参数: id，专题 id，可在专题页 URL 中找到")]),a("h3",{attrs:{id:"作者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作者","aria-hidden":"true"}},[t._v("#")]),t._v(" 作者")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/jianshu/user/yZq3ZV",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/jianshu/user/yZq3ZV")])]),a("p",[t._v("路由: "),a("code",[t._v("/jianshu/user/:id")])]),a("p",[t._v("参数: id，作者 id，可在作者主页 URL 中找到")]),a("h2",{attrs:{id:"知乎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知乎","aria-hidden":"true"}},[t._v("#")]),t._v(" 知乎")]),a("h3",{attrs:{id:"收藏夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#收藏夹","aria-hidden":"true"}},[t._v("#")]),t._v(" 收藏夹")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/zhihu/collection/26444956",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/zhihu/collection/26444956")])]),a("p",[t._v("路由: "),a("code",[t._v("/zhihu/collection/:id")])]),a("p",[t._v("参数: id，收藏夹 id，可在收藏夹页面 URL 中找到")]),a("h3",{attrs:{id:"用户动态-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户动态-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 用户动态")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/zhihu/people/activities/diygod",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/zhihu/people/activities/diygod")])]),a("p",[t._v("路由: "),a("code",[t._v("/zhihu/people/activities/:id")])]),a("p",[t._v("参数: id，用户 id，可在用户主页 URL 中找到")]),a("h3",{attrs:{id:"用户回答"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户回答","aria-hidden":"true"}},[t._v("#")]),t._v(" 用户回答")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/zhihu/people/answers/diygod",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/zhihu/people/answers/diygod")])]),a("p",[t._v("路由: "),a("code",[t._v("/zhihu/people/answers/:id")])]),a("p",[t._v("参数: id，用户 id，可在用户主页 URL 中找到")]),a("h3",{attrs:{id:"专栏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#专栏","aria-hidden":"true"}},[t._v("#")]),t._v(" 专栏")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/zhihu/zhuanlan/googledevelopers",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/zhihu/zhuanlan/googledevelopers")])]),a("p",[t._v("路由: "),a("code",[t._v("/zhihu/zhuanlan/:id")])]),a("p",[t._v("参数: id，专栏 id，可在专栏主页 URL 中找到")]),a("h3",{attrs:{id:"知乎日报"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知乎日报","aria-hidden":"true"}},[t._v("#")]),t._v(" 知乎日报")]),a("p",[t._v("举例："),a("a",{attrs:{href:"https://rsshub.app/zhihu/daily",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/zhihu/daily")])]),a("p",[t._v("路由："),a("code",[t._v("/zhihu/daily")])]),a("h2",{attrs:{id:"自如"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自如","aria-hidden":"true"}},[t._v("#")]),t._v(" 自如")]),a("h3",{attrs:{id:"房源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#房源","aria-hidden":"true"}},[t._v("#")]),t._v(" 房源")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/ziroom/room/sh/1/2/%E4%BA%94%E8%A7%92%E5%9C%BA",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/ziroom/room/sh/1/2/五角场")])]),a("p",[t._v("路由: "),a("code",[t._v("/ziroom/room/:city/:iswhole/:room/:keyword")])]),a("p",[t._v("参数")]),a("p",[t._v("city: 城市，北京 bj；上海 sh；深圳 sz；杭州 hz；南京 nj；广州 gz；成都 cd；武汉 wh；天津 tj")]),a("p",[t._v("iswhole: 是否整租")]),a("p",[t._v("room: 房间数")]),a("p",[t._v("keyword: 关键词")]),a("h2",{attrs:{id:"快递"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快递","aria-hidden":"true"}},[t._v("#")]),t._v(" 快递")]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),a("p",[t._v("快递送达后请及时取消订阅，以免不必要地浪费服务器资源")])]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/express/youzhengguoji/CV054432809US",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/express/youzhengguoji/CV054432809US")])]),a("p",[t._v("路由: "),a("code",[t._v("/express/:company/:number")])]),a("p",[t._v("参数")]),a("p",[t._v("company: 快递公司代码，参考 "),a("a",{attrs:{href:"https://www.kuaidi100.com/download/api_kuaidi100_com%2820140729%29.doc",target:"_blank",rel:"noopener noreferrer"}},[t._v("API URL 所支持的快递公司及参数说明")])]),a("p",[t._v("number: 快递单号")]),a("h2",{attrs:{id:"贴吧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#贴吧","aria-hidden":"true"}},[t._v("#")]),t._v(" 贴吧")]),a("h3",{attrs:{id:"帖子列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#帖子列表","aria-hidden":"true"}},[t._v("#")]),t._v(" 帖子列表")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/tieba/forum/%E5%A5%B3%E5%9B%BE",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/tieba/forum/女图")])]),a("p",[t._v("路由: "),a("code",[t._v("/tieba/forum/:kw")])]),a("p",[t._v("参数: kw，吧名")]),a("h2",{attrs:{id:"妹子图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#妹子图","aria-hidden":"true"}},[t._v("#")]),t._v(" 妹子图")]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),a("p",[t._v("该网站在国外无法访问，故以下演示无效")])]),a("h3",{attrs:{id:"首页（最新）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首页（最新）","aria-hidden":"true"}},[t._v("#")]),t._v(" 首页（最新）")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/mzitu",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/mzitu")])]),a("p",[t._v("路由: "),a("code",[t._v("/mzitu/")])]),a("h3",{attrs:{id:"分类-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分类-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 分类")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/mzitu/category/hot",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/mzitu/category/hot")])]),a("p",[t._v("路由: "),a("code",[t._v("/mzitu/category/:category")])]),a("p",[t._v("参数：category，分类名")]),a("table",[a("thead",[a("tr",[a("th",[t._v("热门")]),a("th",[t._v("推荐")]),a("th",[t._v("性感妹子")]),a("th",[t._v("日本妹子")]),a("th",[t._v("台湾妹子")]),a("th",[t._v("清纯妹子")])])]),a("tbody",[a("tr",[a("td",[t._v("hot")]),a("td",[t._v("best")]),a("td",[t._v("xinggan")]),a("td",[t._v("japan")]),a("td",[t._v("taiwan")]),a("td",[t._v("mm")])])])]),a("h3",{attrs:{id:"所有专题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#所有专题","aria-hidden":"true"}},[t._v("#")]),t._v(" 所有专题")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/mzitu/tags",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/mzitu/tags")])]),a("p",[t._v("路由: "),a("code",[t._v("/mzitu/tags")])]),a("h3",{attrs:{id:"专题详情"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#专题详情","aria-hidden":"true"}},[t._v("#")]),t._v(" 专题详情")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/mzitu/tag/shishen",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/mzitu/tag/shishen")])]),a("p",[t._v("路由: "),a("code",[t._v("/mzitu/tag/:tag")])]),a("p",[t._v("参数: tag，专题名，可在专题页 URL 中找到")]),a("h3",{attrs:{id:"详情"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#详情","aria-hidden":"true"}},[t._v("#")]),t._v(" 详情")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/mzitu/post/129452",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/mzitu/post/129452")])]),a("p",[t._v("路由: "),a("code",[t._v("/mzitu/post/:id")])]),a("p",[t._v("参数: id，详情 id，可在详情页 URL 中找到")]),a("h2",{attrs:{id:"pixiv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixiv","aria-hidden":"true"}},[t._v("#")]),t._v(" pixiv")]),a("h3",{attrs:{id:"用户收藏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户收藏","aria-hidden":"true"}},[t._v("#")]),t._v(" 用户收藏")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/pixiv/user/bookmarks/15288095",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/pixiv/user/bookmarks/15288095")])]),a("p",[t._v("路由: "),a("code",[t._v("/pixiv/user/bookmarks/:id")])]),a("p",[t._v("参数: id，用户 id，可在用户主页 URL 中找到")]),a("h3",{attrs:{id:"用户动态-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户动态-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 用户动态")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/pixiv/user/11",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/pixiv/user/11")])]),a("p",[t._v("路由: "),a("code",[t._v("/pixiv/user/:id")])]),a("p",[t._v("参数: id，用户 id，可在用户主页 URL 中找到")]),a("h3",{attrs:{id:"排行榜"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排行榜","aria-hidden":"true"}},[t._v("#")]),t._v(" 排行榜")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/pixiv/ranking/week",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/pixiv/ranking/week")])]),a("p",[t._v("路由: "),a("code",[t._v("/pixiv/ranking/:mode/:date?")])]),a("p",[t._v("参数")]),a("p",[t._v("mode: 排行榜类型")]),a("table",[a("thead",[a("tr",[a("th",[t._v("pixiv 日排行")]),a("th",[t._v("pixiv 周排行")]),a("th",[t._v("pixiv 月排行")]),a("th",[t._v("pixiv 受男性欢迎排行")]),a("th",[t._v("pixiv 受女性欢迎排行")]),a("th",[t._v("pixiv 原创作品排行")]),a("th",[t._v("pixiv 新人排行")])])]),a("tbody",[a("tr",[a("td",[t._v("day")]),a("td",[t._v("week")]),a("td",[t._v("month")]),a("td",[t._v("day_male")]),a("td",[t._v("day_female")]),a("td",[t._v("week_original")]),a("td",[t._v("week_rookie")])])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("pixiv R-18 日排行")]),a("th",[t._v("pixiv R-18 受男性欢迎排行")]),a("th",[t._v("pixiv R-18 受女性欢迎排行")]),a("th",[t._v("pixiv R-18 周排行")]),a("th",[t._v("pixiv R-18G 排行")])])]),a("tbody",[a("tr",[a("td",[t._v("day_r18")]),a("td",[t._v("day_male_r18")]),a("td",[t._v("day_female_r18")]),a("td",[t._v("week_r18")]),a("td",[t._v("week_r18g")])])])]),a("p",[t._v("date: 日期，取值形如 "),a("code",[t._v("2018-4-25")])]),a("h2",{attrs:{id:"豆瓣"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#豆瓣","aria-hidden":"true"}},[t._v("#")]),t._v(" 豆瓣")]),a("h3",{attrs:{id:"正在上映的电影"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正在上映的电影","aria-hidden":"true"}},[t._v("#")]),t._v(" 正在上映的电影")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/douban/movie/playing",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/douban/movie/playing")])]),a("p",[t._v("路由: "),a("code",[t._v("/douban/movie/playing")])]),a("p",[t._v("参数: 无")]),a("h3",{attrs:{id:"正在上映的高分电影"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正在上映的高分电影","aria-hidden":"true"}},[t._v("#")]),t._v(" 正在上映的高分电影")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/douban/movie/playing/7.5",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/douban/movie/playing/7.5")])]),a("p",[t._v("路由")]),a("p",[a("code",[t._v("/douban/movie/playing/:score")])]),a("p",[a("code",[t._v("/douban/movie/playing/:score/:city")])]),a("p",[t._v("参数")]),a("p",[t._v("score: 返回大于等于这个分数的电影")]),a("p",[t._v("city: 城市的中文名，可选，默认北京")]),a("h3",{attrs:{id:"即将上映的电影"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#即将上映的电影","aria-hidden":"true"}},[t._v("#")]),t._v(" 即将上映的电影")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/douban/movie/later",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/douban/movie/later")])]),a("p",[t._v("路由: "),a("code",[t._v("/douban/movie/later")])]),a("p",[t._v("参数: 无")]),a("h3",{attrs:{id:"北美票房榜"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#北美票房榜","aria-hidden":"true"}},[t._v("#")]),t._v(" 北美票房榜")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/douban/movie/ustop",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/douban/movie/ustop")])]),a("p",[t._v("路由: "),a("code",[t._v("/douban/movie/ustop")])]),a("p",[t._v("参数: 无")]),a("h2",{attrs:{id:"煎蛋"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#煎蛋","aria-hidden":"true"}},[t._v("#")]),t._v(" 煎蛋")]),a("h3",{attrs:{id:"无聊图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无聊图","aria-hidden":"true"}},[t._v("#")]),t._v(" 无聊图")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/jandan/pic",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/jandan/pic")])]),a("p",[t._v("路由: "),a("code",[t._v("/jandan/pic")])]),a("p",[t._v("参数: 无")]),a("h2",{attrs:{id:"喷嚏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#喷嚏","aria-hidden":"true"}},[t._v("#")]),t._v(" 喷嚏")]),a("h3",{attrs:{id:"图卦"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图卦","aria-hidden":"true"}},[t._v("#")]),t._v(" 图卦")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/dapenti/tugua",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/dapenti/tugua")])]),a("p",[t._v("路由: "),a("code",[t._v("/dapenti/tugua")])]),a("p",[t._v("参数: 无")]),a("h2",{attrs:{id:"dockone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockone","aria-hidden":"true"}},[t._v("#")]),t._v(" Dockone")]),a("h3",{attrs:{id:"周报"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#周报","aria-hidden":"true"}},[t._v("#")]),t._v(" 周报")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/dockone/weekly",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/dockone/weekly")])]),a("p",[t._v("路由: "),a("code",[t._v("/dockone/weekly")])]),a("p",[t._v("参数: 无")]),a("h2",{attrs:{id:"腾讯吐个槽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#腾讯吐个槽","aria-hidden":"true"}},[t._v("#")]),t._v(" 腾讯吐个槽")]),a("h3",{attrs:{id:"吐槽新帖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#吐槽新帖","aria-hidden":"true"}},[t._v("#")]),t._v(" 吐槽新帖")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/tucaoqq/post/28564/CdRI0728",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/tucaoqq/post/28564/CdRI0728")])]),a("p",[t._v("路由: "),a("code",[t._v("/tucaoqq/post/:project/:key")])]),a("p",[t._v("参数")]),a("p",[t._v("project: 产品ID")]),a("p",[t._v("key: 产品密钥")]),a("h2",{attrs:{id:"笔趣阁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#笔趣阁","aria-hidden":"true"}},[t._v("#")]),t._v(" 笔趣阁")]),a("h3",{attrs:{id:"小说章节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小说章节","aria-hidden":"true"}},[t._v("#")]),t._v(" 小说章节")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/biquge/novel/latestchapter/52_52542",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/biquge/novel/latestchapter/52_52542")])]),a("p",[t._v("路由: "),a("code",[t._v("/biquge/novel/latestchapter/:id")])]),a("p",[t._v("参数: id，小说 id，可在对应小说页 URL 中找到")]),a("h2",{attrs:{id:"开发者头条"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发者头条","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发者头条")]),a("h3",{attrs:{id:"今天头条"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#今天头条","aria-hidden":"true"}},[t._v("#")]),t._v(" 今天头条")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/toutiao/today",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/toutiao/today")])]),a("p",[t._v("路由: "),a("code",[t._v("/toutiao/today")])]),a("h3",{attrs:{id:"独家号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#独家号","aria-hidden":"true"}},[t._v("#")]),t._v(" 独家号")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/toutiao/user/140544",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/toutiao/user/140544")])]),a("p",[t._v("路由: "),a("code",[t._v("/toutiao/user/:id")])]),a("p",[t._v("参数: id，独家号 id，可在对应独家号页 URL 中找到")]),a("h2",{attrs:{id:"极客时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#极客时间","aria-hidden":"true"}},[t._v("#")]),t._v(" 极客时间")]),a("h3",{attrs:{id:"专栏文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#专栏文章","aria-hidden":"true"}},[t._v("#")]),t._v(" 专栏文章")]),a("blockquote",[a("p",[t._v("极客时间专栏需要付费订阅，RSS 仅做更新提醒，不含付费内容。")])]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/geektime/column/48",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/geektime/column/48")])]),a("p",[t._v("路由: "),a("code",[t._v("/geektime/column/:cid")])]),a("p",[t._v("参数: cid，专栏 id，可从"),a("a",{attrs:{href:"https://time.geekbang.org/paid-content",target:"_blank",rel:"noopener noreferrer"}},[t._v("全部专栏")]),t._v("进入专栏介绍页，在 URL 中找到")]),a("h2",{attrs:{id:"央视新闻"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#央视新闻","aria-hidden":"true"}},[t._v("#")]),t._v(" 央视新闻")]),a("h3",{attrs:{id:"专题-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#专题-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 专题")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/cctv/world",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/cctv/world")])]),a("p",[t._v("路由: "),a("code",[t._v("/cctv/:category")])]),a("p",[t._v("参数：category，分类名")]),a("table",[a("thead",[a("tr",[a("th",[t._v("国内")]),a("th",[t._v("国际")]),a("th",[t._v("视频")]),a("th",[t._v("科技")]),a("th",[t._v("社会")]),a("th",[t._v("法律")]),a("th",[t._v("娱乐")])])]),a("tbody",[a("tr",[a("td",[t._v("china")]),a("td",[t._v("world")]),a("td",[t._v("video")]),a("td",[t._v("tech")]),a("td",[t._v("society")]),a("td",[t._v("law")]),a("td",[t._v("ent")])])])]),a("h2",{attrs:{id:"disqus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disqus","aria-hidden":"true"}},[t._v("#")]),t._v(" Disqus")]),a("h3",{attrs:{id:"评论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#评论","aria-hidden":"true"}},[t._v("#")]),t._v(" 评论")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/disqus/posts/diygod-me",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/disqus/posts/diygod-me")])]),a("p",[t._v("路由: "),a("code",[t._v("/disqus/posts/:forum")])]),a("p",[t._v("参数: forum，网站的 disqus name")]),a("h2",{attrs:{id:"twitter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#twitter","aria-hidden":"true"}},[t._v("#")]),t._v(" Twitter")]),a("h3",{attrs:{id:"用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户","aria-hidden":"true"}},[t._v("#")]),t._v(" 用户")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/twitter/user/DIYgod",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/twitter/user/DIYgod")])]),a("p",[t._v("路由: "),a("code",[t._v("/twitter/user/:id")])]),a("p",[t._v("参数: id，用户 id")]),a("h2",{attrs:{id:"instagram"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instagram","aria-hidden":"true"}},[t._v("#")]),t._v(" Instagram")]),a("h3",{attrs:{id:"用户-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 用户")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/instagram/user/diygod",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/instagram/user/diygod")])]),a("p",[t._v("路由: "),a("code",[t._v("/instagram/user/:id")])]),a("p",[t._v("参数: id，用户 id")]),a("h2",{attrs:{id:"youtube"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#youtube","aria-hidden":"true"}},[t._v("#")]),t._v(" Youtube")]),a("h3",{attrs:{id:"用户-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 用户")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/youtube/user/JFlaMusic",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/youtube/user/JFlaMusic")])]),a("p",[t._v("路由: "),a("code",[t._v("/youtube/user/:username")])]),a("p",[t._v("参数: username，用户名")]),a("h3",{attrs:{id:"频道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#频道","aria-hidden":"true"}},[t._v("#")]),t._v(" 频道")]),a("p",[t._v("举例: "),a("a",{attrs:{href:"https://rsshub.app/youtube/channel/UCDwDMPOZfxVV0x_dz0eQ8KQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/youtube/channel/UCDwDMPOZfxVV0x_dz0eQ8KQ")])]),a("p",[t._v("路由: "),a("code",[t._v("/youtube/channel/:id")])]),a("p",[t._v("参数: id，频道 id")])])}],!1,null,null,null);r.default=s.exports}}]);