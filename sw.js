"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"OYBlogs"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"60267faba2fa3c804b5770354afd9ef1",url:"./404.html"},{revision:"f685401f475d56694070f81bfe8ba766",url:"./aboout/index.html"},{revision:"2ae576f348c90615d5ce5cea79ac1a1f",url:"./archives/2020/07/index.html"},{revision:"96d2183ec2835400c3d430d204f9e2ce",url:"./archives/2020/07/page/2/index.html"},{revision:"39d9dbcf2eabf8c263ffc76c135eaf2e",url:"./archives/2020/08/index.html"},{revision:"553206643e18f847553a04184778e82a",url:"./archives/2020/09/index.html"},{revision:"e9b3b658431e2660699d44cfbee1c5f1",url:"./archives/2020/10/index.html"},{revision:"3a8a0838bc2811d56258c890b0af7d2a",url:"./archives/2020/11/index.html"},{revision:"f9c2408cc58e803181331b5cef5e4829",url:"./archives/2020/12/index.html"},{revision:"f70f93b9fa5b634477a3236083cfba38",url:"./archives/2020/index.html"},{revision:"2d0b49da2f5508611d8de2fb0b650dfe",url:"./archives/2020/page/2/index.html"},{revision:"2108bb711e9d1d47dc3a4b65fe1e43be",url:"./archives/2020/page/3/index.html"},{revision:"7206b5dda2515c4d1a77077713ba7372",url:"./archives/2021/01/index.html"},{revision:"a01a4063125df7081f64f10bfdf40fa5",url:"./archives/2021/02/index.html"},{revision:"3488e0a3e68a6c3d4bba731bee14be32",url:"./archives/2021/03/index.html"},{revision:"9e4a50e385483d6fce9fede7cd5083e6",url:"./archives/2021/04/index.html"},{revision:"db012c826cf607ff5605bf9ed4bf43c5",url:"./archives/2021/05/index.html"},{revision:"5df9d3a0bbb22d8975d9415e223f3149",url:"./archives/2021/06/index.html"},{revision:"3e1e44a47f75db00149bedb02f50d150",url:"./archives/2021/08/index.html"},{revision:"8af230da1bfb51a99c7e59908aee5554",url:"./archives/2021/10/index.html"},{revision:"7da577a70d02944495a15b09d3b47415",url:"./archives/2021/11/index.html"},{revision:"d7fe54b76447fe3ef058484898bd5cd0",url:"./archives/2021/12/index.html"},{revision:"9168a084193cda57696df5b6bfc23bf2",url:"./archives/2021/index.html"},{revision:"4be64a3f01ede2b127a30069c43c4cee",url:"./archives/2021/page/2/index.html"},{revision:"b32b66ccab687612a2450175c6f63eeb",url:"./archives/2022/03/index.html"},{revision:"57ac556075d4e0686abd1b7ca99fe103",url:"./archives/2022/04/index.html"},{revision:"85b9c0a001d9c221991f1b7d51601180",url:"./archives/2022/index.html"},{revision:"436599d31feca82763bd68d714311291",url:"./archives/index.html"},{revision:"cd33913bf0e1ea2d5a8979f98c88aa63",url:"./archives/page/2/index.html"},{revision:"ecf332bfcb1ba0994adb70718e2e78b9",url:"./archives/page/3/index.html"},{revision:"07970717279c770d46d7ff3f2668089d",url:"./archives/page/4/index.html"},{revision:"4a31d7e4cbf82ae5a4e3718ec225a758",url:"./artitalk/index.html"},{revision:"01bf81e131e22115ae7f9b8d859a9bdb",url:"./baidu_verify_code-47ttT2zdt4.html"},{revision:"0411da5e62e670d881803e4165ea7d5f",url:"./bb/index.html"},{revision:"f68cf3415d722906a964357a2e495938",url:"./categories/CentOS-7/index.html"},{revision:"5d3ad03e0142de0ec2649c2615767594",url:"./categories/CentOS/index.html"},{revision:"29e9eae57546216114b92f0fdff4538a",url:"./categories/GitHub/index.html"},{revision:"9db380c4ec9205bd174065d12bb810cf",url:"./categories/Git工具/index.html"},{revision:"7bcd0aad418ef8fcc572180eae3f25b2",url:"./categories/index.html"},{revision:"a3cddb2dd8ff97e207cef241e61a144a",url:"./categories/Java/index.html"},{revision:"3a6919cac9f33347eca74db7615d5358",url:"./categories/JavaEE框架/index.html"},{revision:"f36f40388fdd58767f193b56caf2274d",url:"./categories/JavaEE框架/page/2/index.html"},{revision:"e094a2d96627be094606ad6f722f3e81",url:"./categories/JavaScript/index.html"},{revision:"63c0167038777b8a047c5be3d0cc58e3",url:"./categories/Java算法/index.html"},{revision:"f8528a72a9b31604361bed2fbd3d5044",url:"./categories/Java设计模式/index.html"},{revision:"f2c00be1e5c46725ae1cf9996b6d7438",url:"./categories/JDBC/index.html"},{revision:"16d939205d1058b9cee114b17185e6cd",url:"./categories/Linux/index.html"},{revision:"8cef78cc1f0f83cc5f61b4e61774271a",url:"./categories/Linux语言/index.html"},{revision:"e974add098ceea231499126c3482d3d5",url:"./categories/MySQL/index.html"},{revision:"2e413bcf14929b37a86ed6f024d84db9",url:"./categories/Redis/index.html"},{revision:"6b65fc47d58c87d19090988f39075676",url:"./categories/Web前端/index.html"},{revision:"2be0d8fe159115b458604c902f72b402",url:"./categories/中间件/index.html"},{revision:"83a8e8c8a7b0e64a1082a6c00d7b1792",url:"./categories/工具/index.html"},{revision:"b31e00ff0f80a2e3f13265fc59780fe6",url:"./categories/数据库/index.html"},{revision:"4ceafefe4a007096a1be867674e6cea0",url:"./categories/项目Bug/index.html"},{revision:"4485cea0503d42c04e50fb919af23e40",url:"./categories/项目实战/index.html"},{revision:"e1c62bb493225968c63dea25cc836c6d",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"c634fd2f8cb29d8e4ec29752547231b4",url:"./images/manifest.json"},{revision:"676031bd577daa40ab16ef421ab041a9",url:"./images/pwaicons/browserconfig.xml"},{revision:"a0cbac0fec07bd555e63b47d5108ae02",url:"./index.html"},{revision:"f468f3bc967338f2dd7a6e06c2eef692",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"ac2e3a75ce0796ed87b836693ad9949b",url:"./link/index.html"},{revision:"8163249dec5a0286351fa1a80278f4b2",url:"./logs/index.html"},{revision:"869fe71274c7bac1d4f012d65d776cb7",url:"./messageboard/index.html"},{revision:"48e746bb96341a6b2f834f670810af30",url:"./music/index.html"},{revision:"a09dcf9714a207375bb8fd7c5855984a",url:"./page/10/index.html"},{revision:"8e3b1e88da47143ac5a2229ffa24c1ce",url:"./page/11/index.html"},{revision:"a6062e16d58037ac3589b39606c6a707",url:"./page/12/index.html"},{revision:"ad6b3196ae5450629cb63e9617feaecd",url:"./page/2/index.html"},{revision:"7d5c80a6883183fa3e7aae4809c01587",url:"./page/3/index.html"},{revision:"f9b66e3332d7269a8f8d9c3736dd2c41",url:"./page/4/index.html"},{revision:"d54633ab84952945bb81855dc02f459c",url:"./page/5/index.html"},{revision:"d9ed68aab380c3031992996de4c7e3ec",url:"./page/6/index.html"},{revision:"85ded0f315f7750f9ba348736aba9ec9",url:"./page/7/index.html"},{revision:"8c84aac0ad36d28b7e61ed623985da10",url:"./page/8/index.html"},{revision:"31ca1b71b21d51be30cd910a46671a50",url:"./page/9/index.html"},{revision:"b8468bf024b23982c4062001d0be8552",url:"./posts/1005838445/index.html"},{revision:"d479d212bcd6ec8d13c4b0d481c56d02",url:"./posts/1104683778/index.html"},{revision:"7e53d98aa90d1520f405f930d777647c",url:"./posts/1175849155/index.html"},{revision:"9b67d927deb148ec7d0ac9093889999f",url:"./posts/13005592/index.html"},{revision:"88b12b539a9f869fd50872c48cb5dda7",url:"./posts/1330258666/index.html"},{revision:"02665b0d8290443d0efeb1586fe82d44",url:"./posts/1339733598/index.html"},{revision:"09abb84bae8e3eb1a58bdcacb0f75817",url:"./posts/1393401608/index.html"},{revision:"afcb30393c0a7c0c60787034df8ef366",url:"./posts/1519064184/index.html"},{revision:"57be2ced101edbcfebfe0a3ca52cb878",url:"./posts/1520998390/index.html"},{revision:"2eb0ab1873709ad788c8e017f168d913",url:"./posts/1550900565/index.html"},{revision:"843e71cdb49e9a6bcb3b97461481f025",url:"./posts/1566646582/index.html"},{revision:"72cbd242021fd019bb35e9660021f561",url:"./posts/1574967654/index.html"},{revision:"a579d24f616c9019de24aedfc53763fd",url:"./posts/15f4985b/index.html"},{revision:"d5be6c3cadbd46996ef920ec3222c188",url:"./posts/1634411798/index.html"},{revision:"84c074826755948a1617e5918aa2a218",url:"./posts/1677637013/index.html"},{revision:"8c688e4d2f15d589f6e1f6b0fbd5ac47",url:"./posts/1738458658/index.html"},{revision:"cfe6af861b3c4ce8b47cda4d3be14977",url:"./posts/1762820479/index.html"},{revision:"93890be8766960da2dd2d1130ae6b2f9",url:"./posts/1872245415/index.html"},{revision:"cd066a59bb4b299d72b711d4ba6aeee5",url:"./posts/1905208898/index.html"},{revision:"f720c97520bbd9b4bc18993dc1686528",url:"./posts/1b6f740d/index.html"},{revision:"43c6d90218b8305e9ab95b3a9914da1e",url:"./posts/1c9cc24c/index.html"},{revision:"c47ac69a2294415d9dbe9808c36054da",url:"./posts/1dfa6edf/index.html"},{revision:"da66c53d9aac24ae2a2f32f4db7c7290",url:"./posts/2068565369/index.html"},{revision:"4aabbf9d5f5bf0183abad5fc2de1ca5c",url:"./posts/2068909584/index.html"},{revision:"ab6b7f5b8369efe39b18addfb380eb70",url:"./posts/2086819267/index.html"},{revision:"8c5d0b24ae82e3f4b907bb3bf70c2299",url:"./posts/2120368839/index.html"},{revision:"e156e03da643d215ee3ed9fbc57b8e7b",url:"./posts/2130149512/index.html"},{revision:"c870467a51d0d443dd68e135caae3267",url:"./posts/2164673978/index.html"},{revision:"09be2bdbbe4851970562461329442dd0",url:"./posts/2187905911/index.html"},{revision:"685d6c4e8145878140e0737fb2fc7a6b",url:"./posts/2243339053/index.html"},{revision:"f4f640a847a4b4e47460a94705120dd8",url:"./posts/272460835/index.html"},{revision:"c1b15ee194f3300107901c3db14afb45",url:"./posts/2761314235/index.html"},{revision:"b08bf973582c7c7736aaf81191103f61",url:"./posts/2781775372/index.html"},{revision:"828979f1dd783db3a68954bd2222a2c2",url:"./posts/2817363972/index.html"},{revision:"a0b9046339e31c1099bb5c6489cd39fe",url:"./posts/2909614374/index.html"},{revision:"05c869769a229b48b02e3b29e8ab4505",url:"./posts/2922948377/index.html"},{revision:"2c6c31a587ba2f7ceb97b4f4ea753980",url:"./posts/2968822672/index.html"},{revision:"ad1ae2dbe212bfdc27b349b6e0eed0ba",url:"./posts/2dd14627/index.html"},{revision:"52fa42a64688846eaf58d15056b76aa0",url:"./posts/315616543/index.html"},{revision:"7050a6f19ea9ce76230f27baccf099b6",url:"./posts/325844318/index.html"},{revision:"c70e2457135a2e220fa81d5f69503f58",url:"./posts/328351179/index.html"},{revision:"6de4b0f96d351a9026787d0378377b13",url:"./posts/3305917059/index.html"},{revision:"14ba2954f402edfa61d90438946a5c5e",url:"./posts/3528046541/index.html"},{revision:"6739b88922aa3976e3e1f78ec63123c1",url:"./posts/3554798849/index.html"},{revision:"7fd9a55e87c43a1cd92f22fa29e42eda",url:"./posts/3556927238/index.html"},{revision:"ff8ad6cd59d71df056ea1827c455f758",url:"./posts/3661501281/index.html"},{revision:"a2a0258abbd483d24b50964cefb4e259",url:"./posts/368886813/index.html"},{revision:"12494ee1e9ac7412825c9998cc49c06d",url:"./posts/3830795892/index.html"},{revision:"51f62411d5561723afa746a596612e79",url:"./posts/3862476156/index.html"},{revision:"c0652302d8949f9e06c67b180973fd9c",url:"./posts/3895825257/index.html"},{revision:"d0a0b745613f1e9992bf07c807691814",url:"./posts/3956353174/index.html"},{revision:"719e130c442ad80f0eec6305e0fb5b38",url:"./posts/3979597380/index.html"},{revision:"49d8758d07db8ae37b1845da234677a7",url:"./posts/3991296734/index.html"},{revision:"ca797a5dc5c907ccdac57f0f33586d3c",url:"./posts/3994269159/index.html"},{revision:"06d76ebefbffe24244404b3fe8d4669e",url:"./posts/3b74a348/index.html"},{revision:"d03700f759f8eb54705792dfb69fd7aa",url:"./posts/3d7d679f/index.html"},{revision:"4091a89b2a5c566bfbbb02ff91460543",url:"./posts/4004677012/index.html"},{revision:"62911657afe9f1ef6acb5a585a536486",url:"./posts/4019007238/index.html"},{revision:"36d8f4514b9dbb1c4c0812375aa0c03b",url:"./posts/4146242720/index.html"},{revision:"0db508c13ea420e4a2f057ee2078e298",url:"./posts/41be370a/index.html"},{revision:"96bb64b621e547e7f9c90652d677968f",url:"./posts/4226784210/index.html"},{revision:"41d8d1cabb3ae4be00a9c3998a488796",url:"./posts/427140827/index.html"},{revision:"70403d65bced29e2c519fd2306a3ed6f",url:"./posts/4754ce91/index.html"},{revision:"ebf8e801fd8307b42b887772268149df",url:"./posts/50bb6649/index.html"},{revision:"97ac662c7bf62680da09eb90fb6204b5",url:"./posts/518000799/index.html"},{revision:"c49b17b41fcd251f452f5044f129e87d",url:"./posts/5d2bcff8/index.html"},{revision:"73022ed385d4752d0fd345ca4180ee76",url:"./posts/5f5e4ccc/index.html"},{revision:"63987ebc24c46764dee8a917b54e84ce",url:"./posts/6082eda2/index.html"},{revision:"235e6ea00e9d8b7cff8a5600a8b7ae2a",url:"./posts/622eb062/index.html"},{revision:"d01f0d4fdc036211fa82a327305eb74b",url:"./posts/658751968/index.html"},{revision:"ffc1e7752bf9f06e3e1dc540670b2c43",url:"./posts/6b30c31b/index.html"},{revision:"42367b22b3d9b8dfcc49fcc9ea3df86d",url:"./posts/71d58e27/index.html"},{revision:"fabcafb4c335cbeecea6b457f2ae6cb3",url:"./posts/726828229/index.html"},{revision:"8c56b8c9f463e1d7ed84da5bb63c0e06",url:"./posts/72f33496/index.html"},{revision:"e8415683e921b0bbe543bd65fed94439",url:"./posts/764a0b3/index.html"},{revision:"7beab6be5508c9b63e7e74d7651845bf",url:"./posts/771027640/index.html"},{revision:"36827eef8e04e94da4650d94842c3867",url:"./posts/7a197d31/index.html"},{revision:"99751812ef66112e1413e4ed7401f235",url:"./posts/7d1c5899/index.html"},{revision:"739a4a9cc12bb77bad4353f99933bda8",url:"./posts/80f09d1c/index.html"},{revision:"4f8bf721bd02574074186c2a8be50d96",url:"./posts/816104377/index.html"},{revision:"44f9c5e55ad2eb02a82ca98dfbaa3cbe",url:"./posts/838d68a0/index.html"},{revision:"791e0159dbd7e8b86107fa361dfc75cf",url:"./posts/84460557/index.html"},{revision:"4d2156fb4f10f637a56348186d67ad5e",url:"./posts/850137752/index.html"},{revision:"36bc2029ac0dd22f942f462d824c931b",url:"./posts/864013447/index.html"},{revision:"d40c63164c3cb8668f7bfab347834712",url:"./posts/865268903/index.html"},{revision:"efc3471f8db890fd3ef235d8ee78257f",url:"./posts/872766944/index.html"},{revision:"83608a983ed707b9dcf56408e65bfafb",url:"./posts/8bf03f92/index.html"},{revision:"96880fbd578ab7ee75357d726cf3f010",url:"./posts/9103988a/index.html"},{revision:"f2ae888ac85f5a88d214318b59ecadf1",url:"./posts/91ec6c75/index.html"},{revision:"bb06cb134650db426de363a4ec148bed",url:"./posts/949df4a0/index.html"},{revision:"4a7b754438dace02fe969050ed2bd1b9",url:"./posts/96e5960a/index.html"},{revision:"2ec49bfb21c293db52c6f549b8a84db9",url:"./posts/a2af08b2/index.html"},{revision:"b18416db9d13cea81b04d95f8ade8e48",url:"./posts/a66c836/index.html"},{revision:"389e459eeaa98036be552989eae11f69",url:"./posts/a868dd1/index.html"},{revision:"3e02b34f445d30394c6d51cce2c8eda0",url:"./posts/a8da4fb0/index.html"},{revision:"c97f0ad28e57f1aae9ccea2bacee5d0c",url:"./posts/abb0658c/index.html"},{revision:"8b4c81d9ac78b662501aeaa808d21dc4",url:"./posts/b41f8f0d/index.html"},{revision:"2052f2fe7f07f848f219164799d1a823",url:"./posts/b543ced0/index.html"},{revision:"c4e2d0fdf332db145ec553fa9250cefb",url:"./posts/b700ce00/index.html"},{revision:"debdbd74f59901b57375563d11cbafac",url:"./posts/b95a7f8d/index.html"},{revision:"a2e8b3073a46c0100e8bb6e068bfb3cd",url:"./posts/bff0911c/index.html"},{revision:"1b9c58af291b28b1b6925fa8a61f68cc",url:"./posts/c069b45e/index.html"},{revision:"d5a7df1a2c6b2acead1189ba5e6ad474",url:"./posts/c8221b76/index.html"},{revision:"24d7b83f840c9cafbe5ffcc8a200683b",url:"./posts/c84e54f/index.html"},{revision:"109540d45c13636e24ed2df0e1fd58b5",url:"./posts/caa6f64f/index.html"},{revision:"9d56ff69f9ebf048d0e5ba00fea74abc",url:"./posts/d461a50b/index.html"},{revision:"7a02bd4111d60b58c0e44dccd3cc83b5",url:"./posts/de6b4930/index.html"},{revision:"4d0d5dc311d2c9b1933ea5f55dfae361",url:"./posts/df2899b1/index.html"},{revision:"ed8ad755e6caeae562ecec867ae3c340",url:"./posts/dfb9e877/index.html"},{revision:"fdb4ce0d9b9bba809b6416f765e82ed5",url:"./posts/e403c9e7/index.html"},{revision:"535d65f04b377eb54e08554349a310f7",url:"./posts/e63bc92f/index.html"},{revision:"2fefdb7b4861a1ab9c33c206978a5692",url:"./posts/ed909786/index.html"},{revision:"d98b83348cd983c4dcd2f55aed5e39fb",url:"./posts/f1d1d958/index.html"},{revision:"66925ee17621a3dc2e7ebac779e2a46f",url:"./posts/f1fcc865/index.html"},{revision:"e9b6ea40c54371a09d37ec4bd8246f2b",url:"./posts/f347fc6a/index.html"},{revision:"1b525e521b7c5f3db471ad085eeed6cf",url:"./posts/f5810d24/index.html"},{revision:"df33d2348f4163f53077bbfb64689269",url:"./posts/fcc1ff03/index.html"},{revision:"cf92735ee91c63a782837594fafc7624",url:"./posts/fe52487d/index.html"},{revision:"d25d252a9534f0e40568f17234e40f75",url:"./tags/Bug/index.html"},{revision:"dcc3137583912520c6249a83336c8395",url:"./tags/Canal/index.html"},{revision:"6f83978ab6c74782a425409461e620b0",url:"./tags/CentOS-7/index.html"},{revision:"7f78a87ddd8f2a6bb07f772fc30faed7",url:"./tags/Docker/index.html"},{revision:"d35e84185b922198deb192a28b9f8934",url:"./tags/GitHub/index.html"},{revision:"148d7045ccf78f7b12cb81de85f39e83",url:"./tags/index.html"},{revision:"6df00b44195471908bf51061663c68ce",url:"./tags/Java/index.html"},{revision:"074f965f4facac86eeaeba109977c1dd",url:"./tags/Java/page/2/index.html"},{revision:"651dc73827197d01f9607c2035b0e32c",url:"./tags/javascript基础/index.html"},{revision:"ff0cfdb19cf184970fae8c2e2e2ff924",url:"./tags/javaScript基础/index.html"},{revision:"126f657d012cdd1aed59fa6e41988d91",url:"./tags/JavaScript高级/index.html"},{revision:"22248fdda521b81b61833e60566c3d58",url:"./tags/Java算法/index.html"},{revision:"a057a33285394e86644fcbcecaa2e5fe",url:"./tags/Java设计模式/index.html"},{revision:"9ceecb3537cf4b4727f330a7a77248ec",url:"./tags/java项目/index.html"},{revision:"7feb941a4a071e899a80b6d7f7282881",url:"./tags/Java项目/index.html"},{revision:"30312d6ca05b91fe613b2e7115020ddf",url:"./tags/JDBC数据连接池/index.html"},{revision:"a63f312cd7b81020fcd9c7a8d8fa957a",url:"./tags/Jenkins/index.html"},{revision:"7d109c636e194284f032c71378a83565",url:"./tags/jQuery/index.html"},{revision:"2dd9ab7a6336c13081cdb9f94753b8c0",url:"./tags/layui/index.html"},{revision:"6b48d25414c1b050188e1973600122fd",url:"./tags/Maven/index.html"},{revision:"cdda119e1ab94de83b452d4f89dd45d8",url:"./tags/Mybatis/index.html"},{revision:"ec062838c7da95903c38dc0b7cabb3f7",url:"./tags/MySQL/index.html"},{revision:"5c4574f97c3994cb9ff380404997f8f2",url:"./tags/Node/index.html"},{revision:"c8a67ffe8c6bd185a86bd9617a98624e",url:"./tags/OSS/index.html"},{revision:"7f554a76a3e584af373ee3accd7d850b",url:"./tags/Other/index.html"},{revision:"ee38c6e0a6bee2180c7ceeb6da8ad36e",url:"./tags/Redis/index.html"},{revision:"4f48f1f891c3722e34b26656baa2bb14",url:"./tags/Spring/index.html"},{revision:"bcb66cab26f37771985f684638b123a5",url:"./tags/SpringBoot/index.html"},{revision:"d053259ec578b1c04a0f154e34c1307d",url:"./tags/SpringCloud/index.html"},{revision:"5f6ceb95749087bff18ee27c6d02b07e",url:"./tags/SpringMVC/index.html"},{revision:"83c848dc5d0c492f5a06be9d09ea6d75",url:"./tags/VerCel/index.html"},{revision:"d5b1ecb4efae39ae9a93b5789268f961",url:"./tags/VPS/index.html"},{revision:"42575521f2878769cf76d2da8bcb07d9",url:"./tags/VsCode/index.html"},{revision:"bd70f9be5d2722a061901bae0b8640f7",url:"./tags/Vue/index.html"},{revision:"094077b4e2b346f79d33493fb2bfcdf6",url:"./tags/阿里云/index.html"},{revision:"f9550a0a38e07975fb9b54c0df370ce8",url:"./tools/css/bb.css"},{revision:"69e24ad38457a2ced31cbde19a566bd2",url:"./tools/css/commentsbar.css"},{revision:"c0035e83d22e8ab118b1bdd21c182e1e",url:"./tools/css/friend.min.css"},{revision:"f7f5815747f181f33d671fabb84a191d",url:"./tools/css/icofont.css"},{revision:"4b8c0ea28cb2ecd76d9183a7389bbcb6",url:"./tools/css/notetag.css"},{revision:"9bba4037d37319dc47488db38b2ecc80",url:"./tools/css/oy.css"},{revision:"c2beb79e7f957c7002a926e620fcde38",url:"./tools/css/oyindex.css"},{revision:"725ffb89cdfee2ac582076db960e2dcc",url:"./tools/js/index.js"},{revision:"dc5e7f18c8d36ac1d3d4753a87c98d0a",url:"./tools/js/jquery.min.js"},{revision:"dd038ad08596036a528554ad75689061",url:"./tools/js/oy.js"},{revision:"2f6ed1d4f664e913afb75553dee28fe2",url:"./tools/js/wow_init.js"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();