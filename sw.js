"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"OYBlogs"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"08420587a2cb58db4f6c28b911223c19",url:"./404.html"},{revision:"deec39807af80894d8bcd4f397c788de",url:"./aboout/index.html"},{revision:"2f46b2dec1471b2a746a108b3bd65305",url:"./archives/2020/07/index.html"},{revision:"2683a5dbd1c684eb8ed2da7ec5a2d947",url:"./archives/2020/07/page/2/index.html"},{revision:"c011e445cd91b32257b85b14624b0e3f",url:"./archives/2020/08/index.html"},{revision:"b4970af1ca8249428afb749d5aa14911",url:"./archives/2020/09/index.html"},{revision:"1c42c2182e52f09dd6623b6a3a87a460",url:"./archives/2020/10/index.html"},{revision:"29cdde5b61f4c313d094498c8687287f",url:"./archives/2020/11/index.html"},{revision:"ad36604f90b28be9a66af3fd106a40ed",url:"./archives/2020/12/index.html"},{revision:"e8cd408ae65a38f9726a150daa4ec210",url:"./archives/2020/index.html"},{revision:"59b8fb2f49800373bbd8617a4151e35c",url:"./archives/2020/page/2/index.html"},{revision:"94af868ef17d3e95b8dbe2d03afca31b",url:"./archives/2020/page/3/index.html"},{revision:"92e4db1e913d0892a57718d07fa7f3a9",url:"./archives/2021/01/index.html"},{revision:"b0763c7baa399037b80668db5355b2fb",url:"./archives/2021/02/index.html"},{revision:"94cf0284d7164f527930884dbb82307f",url:"./archives/2021/03/index.html"},{revision:"7949f13d70211793c3f0421c5de700db",url:"./archives/2021/04/index.html"},{revision:"feac46cd9063ae488eeda0122ec46c95",url:"./archives/2021/05/index.html"},{revision:"270c34b9dd2ba7c11699cfc417734c8a",url:"./archives/2021/06/index.html"},{revision:"db49521281e62075a024496db601d53f",url:"./archives/2021/08/index.html"},{revision:"46cb83aeb9c9353687c0d0dd2cda2bd6",url:"./archives/2021/index.html"},{revision:"8a63c9ad7091c3ebe0b432a9cbf619b5",url:"./archives/index.html"},{revision:"89fe283c87f897631718d68ba95cf5c4",url:"./archives/page/2/index.html"},{revision:"5d8d578c5c5546b3b3cb6aa30cc219bc",url:"./archives/page/3/index.html"},{revision:"4b6202cb3789127e4a4adc6d7a9787f2",url:"./archives/page/4/index.html"},{revision:"26ddffff5c0f1f578ae8c009f54bbfe7",url:"./artitalk/index.html"},{revision:"01bf81e131e22115ae7f9b8d859a9bdb",url:"./baidu_verify_code-47ttT2zdt4.html"},{revision:"98520c45e398e46d531db59a8ca7b60f",url:"./bb/index.html"},{revision:"268eb8f921d1fd8f87dd860c24e52d0f",url:"./categories/CentOS-7/index.html"},{revision:"479ed6825c64d5dc0c92ffd82bee0397",url:"./categories/CentOS/index.html"},{revision:"8dc6a4888549a16dc802fbc3ff275284",url:"./categories/GitHub/index.html"},{revision:"95c49a6d718d9114c4452f3078705dca",url:"./categories/Git工具/index.html"},{revision:"385c22ce8e7a7f58dcdc717776ef3ffa",url:"./categories/index.html"},{revision:"47df4346530a983519aaf58deff3e440",url:"./categories/Java/index.html"},{revision:"43a9f476b313d699b767c266e71d3515",url:"./categories/Java/Linux/index.html"},{revision:"e823fba2c2ac40be20f4ae067e20d7a6",url:"./categories/JavaEE框架/index.html"},{revision:"e73de87394289da335e16068e9100573",url:"./categories/JavaEE框架/page/2/index.html"},{revision:"4238e489db9135efe1bfe64a7c3d1eda",url:"./categories/JavaScript/index.html"},{revision:"2c19f3a329bddc275dfd69f6ef95af6d",url:"./categories/Java算法/index.html"},{revision:"0c4888e3e16e4e52d4d0ee7b4ae3570e",url:"./categories/Java设计模式/index.html"},{revision:"5a61a49a84dc912ccfcb7ee7b5fed1fc",url:"./categories/JDBC/index.html"},{revision:"6f73baab9a5bd5db3328b2c8489edf86",url:"./categories/Linux/index.html"},{revision:"7b87f526d53979a628a1d2b2ceb191c0",url:"./categories/Linux语言/index.html"},{revision:"a41dc8086b916a8392a363c2663ac16d",url:"./categories/MySQL/index.html"},{revision:"65bd81ada3375e038638d0251cd7462f",url:"./categories/Redis/index.html"},{revision:"3e919a315594a89cb69aaeded5782eac",url:"./categories/Web前端/index.html"},{revision:"7f021d2fb5d427145e7cecb4a6d439a3",url:"./categories/中间件/index.html"},{revision:"ce14d9d5c57532dc1cd8694247311e2a",url:"./categories/工具/index.html"},{revision:"9f6c64495b35f11c5cc050cec0ad58e8",url:"./categories/数据库/index.html"},{revision:"28f4ae571c51621198d580b0365c9b46",url:"./categories/项目Bug/index.html"},{revision:"23e3fefbca463dbe8777d727bb0d1b37",url:"./categories/项目实战/index.html"},{revision:"44882c2034729f54697e36de7d486ebc",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"c634fd2f8cb29d8e4ec29752547231b4",url:"./images/manifest.json"},{revision:"676031bd577daa40ab16ef421ab041a9",url:"./images/pwaicons/browserconfig.xml"},{revision:"f4bdff9e2385b2d3953704ce0fa6daa7",url:"./index.html"},{revision:"f468f3bc967338f2dd7a6e06c2eef692",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"7ef275189612557acb5b1b3d9c7e216c",url:"./link/index.html"},{revision:"f9b0046317322dbc60b7c4c599a0e4cf",url:"./logs/index.html"},{revision:"273eb7cc3a381542b00dcbf191b4bcc3",url:"./messageboard/index.html"},{revision:"4529e5a0272b84feeebc4fa0ff38cc41",url:"./music/index.html"},{revision:"5357948f726367a1d96a62795af9d4bf",url:"./page/10/index.html"},{revision:"993de8ad628c4b6c1e3203a121bdb187",url:"./page/2/index.html"},{revision:"b8f9ed525ad80d5e0ad3fe32b1fab354",url:"./page/3/index.html"},{revision:"b3be1fb6056892abd36d69ecbe3bd816",url:"./page/4/index.html"},{revision:"ca887c7d4a73b9c5daf295c069a38e6f",url:"./page/5/index.html"},{revision:"5cda8238d7dfbb9099904ef603b87159",url:"./page/6/index.html"},{revision:"c5489854dea81ca07bafa974783e7a0e",url:"./page/7/index.html"},{revision:"899f421e955c2e11697b6f6f97b4e374",url:"./page/8/index.html"},{revision:"35a0c8a24906dfeb1b3465d3ec5be69e",url:"./page/9/index.html"},{revision:"8a92a71bcc4fd5c3d204ab1ce3f58f8c",url:"./posts/1005838445/index.html"},{revision:"d6cfbcb3a755041bb1333579265779ac",url:"./posts/1104683778/index.html"},{revision:"efe9c3df55ff785e8cdd4b38ad104cad",url:"./posts/1175849155/index.html"},{revision:"a1abb607cedaef8381cc4e3b1b4750c2",url:"./posts/13005592/index.html"},{revision:"339706826ea9405f481cb10afed07340",url:"./posts/1330258666/index.html"},{revision:"c6aded000d3bc2166fb7a65a2eeb2bdc",url:"./posts/1339733598/index.html"},{revision:"68fbebbd793fa65727085bc434b33755",url:"./posts/1393401608/index.html"},{revision:"42d41cbe1ee4d79b9d104f03130150a5",url:"./posts/1519064184/index.html"},{revision:"a0740f3b279cd79168e8035212f511e8",url:"./posts/1520998390/index.html"},{revision:"5dfb3a4180c63bc6cbe94a653b3071fc",url:"./posts/1550900565/index.html"},{revision:"4accce1247a0dae39896cba11e3751ac",url:"./posts/1566646582/index.html"},{revision:"b946db8e14e268de07714b1abc7a21b7",url:"./posts/1574967654/index.html"},{revision:"69a614e9769965ce86c2a3b80984b28a",url:"./posts/15f4985b/index.html"},{revision:"2cbc06ca8193411b8f0619e9739740dd",url:"./posts/1634411798/index.html"},{revision:"4f949fce37df908128dde0dd63397740",url:"./posts/1677637013/index.html"},{revision:"0ed54215a01e031834e2cf722892b866",url:"./posts/1738458658/index.html"},{revision:"e8042450b4637b19e5f27bd89e55b315",url:"./posts/1762820479/index.html"},{revision:"827bd02ec110618f07e58ffe4da3404e",url:"./posts/1872245415/index.html"},{revision:"f7f65c2c7ecff8be16db1090293b5e2d",url:"./posts/1905208898/index.html"},{revision:"fa18b238057b274e4c13128cec87c4a2",url:"./posts/1b6f740d/index.html"},{revision:"92f6d2024e17c8e1ac562924a694ada8",url:"./posts/1c9cc24c/index.html"},{revision:"910f304f2510eefd3f535818d74c5fc1",url:"./posts/1dfa6edf/index.html"},{revision:"2234b267fafd1ee0eafebb25745408e8",url:"./posts/2068565369/index.html"},{revision:"505d4227d0cebf0bab990b17bcaaaca9",url:"./posts/2068909584/index.html"},{revision:"2bc7cd4c9fe2a4a40aed5a5bb7bcc2e8",url:"./posts/2086819267/index.html"},{revision:"b5079536ed7b859911f211017571b397",url:"./posts/2120368839/index.html"},{revision:"b872733acc1cc661a948e013d69db0db",url:"./posts/2130149512/index.html"},{revision:"8495a9b2a9bafad99ea8278c442d292f",url:"./posts/2164673978/index.html"},{revision:"10a8d2bf0b721938d76e9fb5355c0126",url:"./posts/2187905911/index.html"},{revision:"4e939ba9424fd866576791cdaf625e15",url:"./posts/2243339053/index.html"},{revision:"83bc1071cf092404e08a060cd04b7cef",url:"./posts/272460835/index.html"},{revision:"2a2b262f8e3ee89aa9851c51b4d23dda",url:"./posts/2761314235/index.html"},{revision:"30c6a3285ca90c5a65c19acd82d03804",url:"./posts/2781775372/index.html"},{revision:"82cdd422f0b7d4c031add90fe408416c",url:"./posts/2817363972/index.html"},{revision:"67f88fe05b9ea25b72e5b7aa2351541a",url:"./posts/2909614374/index.html"},{revision:"fe52e1d3e6bef08bcab9ed939c9676ea",url:"./posts/2922948377/index.html"},{revision:"91d2e59954004962a9525a3ce4cb85d7",url:"./posts/2968822672/index.html"},{revision:"b07b6683091197e846e52a66b966491f",url:"./posts/315616543/index.html"},{revision:"8861cf6f49a1c1c186a5922af6d98718",url:"./posts/325844318/index.html"},{revision:"d38bcb07dbd2237ce2fc745a7e120de9",url:"./posts/328351179/index.html"},{revision:"26490bda5634a41ce3c0b9e8f0b021d0",url:"./posts/3305917059/index.html"},{revision:"82f4c2ae55f267a1eb1f6a9253e5b849",url:"./posts/3528046541/index.html"},{revision:"513d2a7a182cbba2924f5cf4c2861e47",url:"./posts/3554798849/index.html"},{revision:"f992e8ba951560034dd240258455a5be",url:"./posts/3556927238/index.html"},{revision:"53e2c6d6c6998fe81d909f1ff869822c",url:"./posts/3661501281/index.html"},{revision:"36a0b3edad50be80f86ee22a848058cc",url:"./posts/368886813/index.html"},{revision:"3d00d3bc7d010cc0e1a25d1860347ab2",url:"./posts/3830795892/index.html"},{revision:"6a58f6fbf46b83e4d46b64661d0b6d40",url:"./posts/3862476156/index.html"},{revision:"105244f254a8f3618bf101835b609e35",url:"./posts/3895825257/index.html"},{revision:"142a1d8f472f002253f978062f4e9589",url:"./posts/3956353174/index.html"},{revision:"46a0a91c396cea885dba7e36674d9ab3",url:"./posts/3979597380/index.html"},{revision:"e7b3c79ef218ecd673c77b913bba2ced",url:"./posts/3991296734/index.html"},{revision:"da9584f1cf5ced57da46f976bb0dc03c",url:"./posts/3994269159/index.html"},{revision:"ccaa06229b8f7392027e6afd3c68dd4d",url:"./posts/3b74a348/index.html"},{revision:"0a2f0544206fe0e79c4a8940c768441a",url:"./posts/3d7d679f/index.html"},{revision:"73f00c71b4793c3dc3e422ffde0b17ff",url:"./posts/4004677012/index.html"},{revision:"086dfde54e29c3342b81bb833843c3c4",url:"./posts/4019007238/index.html"},{revision:"5c0eae6f874e1e31b360f971ce6b99a7",url:"./posts/4146242720/index.html"},{revision:"6cc0466bf653611b4eb7236580039ee4",url:"./posts/41be370a/index.html"},{revision:"6c8e6981b4ec47ae5293e0eccb3c5fae",url:"./posts/4226784210/index.html"},{revision:"3a71cc5a1cfdb59bf599d7b67b7ac5e6",url:"./posts/427140827/index.html"},{revision:"cae0a56809b62a1bd2f1a47759fc07c3",url:"./posts/50bb6649/index.html"},{revision:"5e4f4b317078296373e61fb20035fc3c",url:"./posts/518000799/index.html"},{revision:"bd19c8bc9e69239f50b560fe7b353a5c",url:"./posts/5d2bcff8/index.html"},{revision:"fb7a905bbea718d66c3bf36e24aa68ca",url:"./posts/658751968/index.html"},{revision:"6100da4052099171e269824e7acda877",url:"./posts/6b30c31b/index.html"},{revision:"f9479e02a9c92444be05dbbc1369f108",url:"./posts/71d58e27/index.html"},{revision:"b7c2864d34bfcc917f7b1fb28446668b",url:"./posts/726828229/index.html"},{revision:"feaba6cca64eaf80f71474c4678f7a93",url:"./posts/72f33496/index.html"},{revision:"01e51edb5e9a945a14cb65a4522ceee3",url:"./posts/771027640/index.html"},{revision:"3cd1c77af2a76c69fed6576810d85925",url:"./posts/7d1c5899/index.html"},{revision:"ba03ae89b0423e9dfe2f4a1be84b1fc0",url:"./posts/80f09d1c/index.html"},{revision:"1cfcc11a30ae5564bfbdb4be6ee5deb1",url:"./posts/816104377/index.html"},{revision:"88219cfe0eb7b330975798e9128c0f5b",url:"./posts/838d68a0/index.html"},{revision:"3ed47c0c683bdb06cc10e7a50b12ed36",url:"./posts/850137752/index.html"},{revision:"fa7685c537476b0ceeab25b0e42f399f",url:"./posts/864013447/index.html"},{revision:"000df288c1ba4f3975c512f9daaa98d4",url:"./posts/865268903/index.html"},{revision:"50aa9601102b8603ef7768ef0e98b07e",url:"./posts/872766944/index.html"},{revision:"01ca23d2f2708d9c36ac9c201dc2ca16",url:"./posts/9103988a/index.html"},{revision:"db1f797297656abb0964842bf4161351",url:"./posts/91ec6c75/index.html"},{revision:"a7e151ac7d2a49d8bea3ec9af48e68a2",url:"./posts/949df4a0/index.html"},{revision:"58ae50d98555e18d7edcdcd34f79871a",url:"./posts/96e5960a/index.html"},{revision:"07b1e20216a1ba8cd8aa1b52654d78ef",url:"./posts/a2af08b2/index.html"},{revision:"73582e4bcfb5943a0b0bd64990919d34",url:"./posts/a868dd1/index.html"},{revision:"9b7d12985ee0271eb8ffecc8560df99e",url:"./posts/a8da4fb0/index.html"},{revision:"8a6a0c9fd6cc9a55ee0aca3b7fae7711",url:"./posts/abb0658c/index.html"},{revision:"3a8dc563b91c45579674907d0296e303",url:"./posts/b41f8f0d/index.html"},{revision:"bc19970850e6d76b1d1d59827326f6d7",url:"./posts/b543ced0/index.html"},{revision:"a2abc633bf604b2252b3a9113a924bf2",url:"./posts/b95a7f8d/index.html"},{revision:"b891482458a9cd6a100adee976c7a475",url:"./posts/c8221b76/index.html"},{revision:"770c9f9847bed136fbca5c7c553022b6",url:"./posts/c84e54f/index.html"},{revision:"9283a7144e1476dddd387511bd225333",url:"./posts/caa6f64f/index.html"},{revision:"6c71e5c7a91c726cf4fe963495ccbfcc",url:"./posts/de6b4930/index.html"},{revision:"f3303425d40e3863e6ddd7646b23c813",url:"./posts/df2899b1/index.html"},{revision:"551d8752388e25e1379188fc7e9ae06a",url:"./posts/dfb9e877/index.html"},{revision:"60c9e286591ebc593e8acf73803eb391",url:"./posts/e403c9e7/index.html"},{revision:"cc9a2e0fc9464bfeb2d53a98547f2953",url:"./posts/e63bc92f/index.html"},{revision:"d33838eb23fb82cb6de81c6928ba0e4e",url:"./posts/ed909786/index.html"},{revision:"1f0e218b8cd0b520f71a7eff79577b23",url:"./posts/f1d1d958/index.html"},{revision:"0ce6e3807583161ce62db821c4ae072a",url:"./posts/fcc1ff03/index.html"},{revision:"7290453d570767e93d18e78c73a4bce6",url:"./tags/Bug/index.html"},{revision:"789f8e0a22f60749d2150fd69727e88b",url:"./tags/Canal/index.html"},{revision:"9dadb328a0816c96bc8b06ca1314c1d3",url:"./tags/CentOS-7/index.html"},{revision:"0a1c5c7aa60ef302e9da68299ee0d9c6",url:"./tags/Docker/index.html"},{revision:"4e9d63e2ded0aa7b710c3d0bc397104e",url:"./tags/GitHub/index.html"},{revision:"fc5741ec7a90189bf4d59e10360387e8",url:"./tags/index.html"},{revision:"459649128ed04bc3e312aaf326bb5d84",url:"./tags/Java/index.html"},{revision:"1ed6321d88d649b8e82797bbbf7f20dc",url:"./tags/Java/page/2/index.html"},{revision:"60a955e324c629eba9a3bfb858923d55",url:"./tags/javascript基础/index.html"},{revision:"40b37ddd05604ecb22466747431a9573",url:"./tags/javaScript基础/index.html"},{revision:"2ff63f0a992d01edc4532f4cd6e625f4",url:"./tags/JavaScript高级/index.html"},{revision:"e94f74bd5d0e0998a0a6d8be5472f605",url:"./tags/Java算法/index.html"},{revision:"a563a9fde47b6b3fca178f49a7e13f23",url:"./tags/Java设计模式/index.html"},{revision:"6d5cdd2d1df9543119dcf546abfeb95d",url:"./tags/java项目/index.html"},{revision:"93456a14e195e2420b4d87f8aea9abee",url:"./tags/Java项目/index.html"},{revision:"7490ef3233f9f6f7a3c5b52e0303fbc2",url:"./tags/JDBC数据连接池/index.html"},{revision:"313b378aaa992358705b1598c186bf48",url:"./tags/Jenkins/index.html"},{revision:"1acdc77eab9453eca3c5f2aa1d1e41cf",url:"./tags/jQuery/index.html"},{revision:"4598f8781a2896147051c1990dc7cef3",url:"./tags/layui/index.html"},{revision:"7c7ea9d6c4e4d181e47313e6c095e748",url:"./tags/Maven/index.html"},{revision:"9fb44930cc85c995fd99c3aba6bdae20",url:"./tags/Mybatis/index.html"},{revision:"3d5f3e85e404f9e69d83b605dc37193b",url:"./tags/MySQL/index.html"},{revision:"3b6422c574049e85fe8e6d0e11a466c7",url:"./tags/Node/index.html"},{revision:"e184ae7299d2cb500b4d806afdb0cc8c",url:"./tags/Other/index.html"},{revision:"27b579f0bf8f7640879e81d977bc81ac",url:"./tags/Redis/index.html"},{revision:"ff921f1b51a720751f34283eb31ba63e",url:"./tags/Spring/index.html"},{revision:"bfc11ce1c9ee8d7aee7e520f17f1025c",url:"./tags/SpringBoot/index.html"},{revision:"afa5db2aaa219a0f348881f89017c22b",url:"./tags/SpringCloud/index.html"},{revision:"7d94a37bd1ca704f503c7f213602d9d0",url:"./tags/SpringMVC/index.html"},{revision:"ccbf8c2a774d681da0ea145df95ad85a",url:"./tags/VPS/index.html"},{revision:"df64d0ef7a92bdbb8a773906d37d471a",url:"./tags/Vue/index.html"},{revision:"f9550a0a38e07975fb9b54c0df370ce8",url:"./tools/css/bb.css"},{revision:"69e24ad38457a2ced31cbde19a566bd2",url:"./tools/css/commentsbar.css"},{revision:"c0035e83d22e8ab118b1bdd21c182e1e",url:"./tools/css/friend.min.css"},{revision:"f7f5815747f181f33d671fabb84a191d",url:"./tools/css/icofont.css"},{revision:"4b8c0ea28cb2ecd76d9183a7389bbcb6",url:"./tools/css/notetag.css"},{revision:"9cec6cb56d45f39c5ef84db9247b83fe",url:"./tools/css/oy.css"},{revision:"c2beb79e7f957c7002a926e620fcde38",url:"./tools/css/oyindex.css"},{revision:"725ffb89cdfee2ac582076db960e2dcc",url:"./tools/js/index.js"},{revision:"a6ee1396517d660fe8ae1fa7992bbfa8",url:"./tools/js/oy.js"},{revision:"2f6ed1d4f664e913afb75553dee28fe2",url:"./tools/js/wow_init.js"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();