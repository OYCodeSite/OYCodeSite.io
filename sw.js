"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"OYBlogs"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"ba877be28bc5c3422c409b1881ebc257",url:"./404.html"},{revision:"91cbbb0198d856c0444e377a274c3a61",url:"./aboout/index.html"},{revision:"c05b418721b5df671693324e85265882",url:"./archives/2020/07/index.html"},{revision:"ccc22ed3675a0a33353c830218a9d307",url:"./archives/2020/07/page/2/index.html"},{revision:"6f23bcd2be148c6b589033379ac1a955",url:"./archives/2020/08/index.html"},{revision:"cb098b4616be2fc0bd9266a09c05d129",url:"./archives/2020/09/index.html"},{revision:"74c303b695aaf20c839a0aced902d050",url:"./archives/2020/10/index.html"},{revision:"a725ea6f4f985d163cece9e0c6b4f4cb",url:"./archives/2020/11/index.html"},{revision:"59f248a330d4d8791456afda35729347",url:"./archives/2020/12/index.html"},{revision:"9875faa976e46f3ce345102e47ab39e3",url:"./archives/2020/index.html"},{revision:"ed77649c364134d0a39cb156a18529dd",url:"./archives/2020/page/2/index.html"},{revision:"41a6c94ff1c0a53a79c4d5e95c693026",url:"./archives/2020/page/3/index.html"},{revision:"47e617b70a1cad5977210916bfe40fe2",url:"./archives/2021/01/index.html"},{revision:"00fb4cc10589e7948d00537bef084525",url:"./archives/2021/02/index.html"},{revision:"44d9444bae1c5ce5c9df6f43f48b427f",url:"./archives/2021/03/index.html"},{revision:"24566bbac50017bff63d42b9fd0a17e0",url:"./archives/2021/04/index.html"},{revision:"df7c01829a1303ab3e6668eef779a217",url:"./archives/2021/05/index.html"},{revision:"183957246d08b7d6d20061f51fdae2bb",url:"./archives/2021/06/index.html"},{revision:"da5faaa363d22ecda18f6115f79c4069",url:"./archives/2021/08/index.html"},{revision:"cd005cdea0f767f480fcd1769b5e7cd1",url:"./archives/2021/10/index.html"},{revision:"125de618872045415c2c9e651e6b0e73",url:"./archives/2021/11/index.html"},{revision:"4abd3d299a485db5b65d128ca2d9f8ea",url:"./archives/2021/12/index.html"},{revision:"376e369e8c238e8aca680c59f9ea32a5",url:"./archives/2021/index.html"},{revision:"e7fb89a9609ea3a05297c59b3bc29e4f",url:"./archives/2021/page/2/index.html"},{revision:"0ba999281e6f082975869b28b3b5ba92",url:"./archives/2022/03/index.html"},{revision:"f3625b0d318740063c6df411330f1107",url:"./archives/2022/04/index.html"},{revision:"03be4629a01264ba7dcd6764f81d4f51",url:"./archives/2022/index.html"},{revision:"8b399837143656e2a5c54a32ed097a20",url:"./archives/index.html"},{revision:"8b168e8c2d56cfedcdef4586a5dec67b",url:"./archives/page/2/index.html"},{revision:"ba58b165b76e1749ae8049cdf5e903a9",url:"./archives/page/3/index.html"},{revision:"a729c7d97c24b303c945494abe749808",url:"./archives/page/4/index.html"},{revision:"e37c81f07fc4fff03ac98fa2a09f042b",url:"./artitalk/index.html"},{revision:"01bf81e131e22115ae7f9b8d859a9bdb",url:"./baidu_verify_code-47ttT2zdt4.html"},{revision:"6cff1e0745247db874e5a603002d77eb",url:"./bb/index.html"},{revision:"fcc39c926fd6e96e43eca8c7ae2ccb85",url:"./categories/CentOS-7/index.html"},{revision:"b2f23e50c3d3624211eae4c1c22f0fce",url:"./categories/CentOS/index.html"},{revision:"352662f7cd5134487868ece4754c57dd",url:"./categories/GitHub/index.html"},{revision:"b682e2489012c9edde092d0d34c5da16",url:"./categories/Git工具/index.html"},{revision:"08eb056bc273bf5040a15e445daa827f",url:"./categories/index.html"},{revision:"3e22f15747b1cddb6511344621fc3056",url:"./categories/Java/index.html"},{revision:"dff7fa88323a45ce9c4c01936f07be8c",url:"./categories/JavaEE框架/index.html"},{revision:"7b50cac17b6add73039553d8db9a2a90",url:"./categories/JavaEE框架/page/2/index.html"},{revision:"6ecb9716c2aa3af9c0c0d7281f68f22f",url:"./categories/JavaScript/index.html"},{revision:"5dbe6bb883177853b939d07e2c2a35e5",url:"./categories/Java算法/index.html"},{revision:"97838bd0aa164b8ad0f512cac91f0ab0",url:"./categories/Java设计模式/index.html"},{revision:"53d8ef01c67e376b35b249d85f0b81cd",url:"./categories/JDBC/index.html"},{revision:"99f88e089cead1b625287a8e43b1e6be",url:"./categories/Linux/index.html"},{revision:"ab7555c3a1ef740904c5a16a8fe7f7c1",url:"./categories/Linux语言/index.html"},{revision:"d815c208a2dd4825a312bb03b550c308",url:"./categories/MySQL/index.html"},{revision:"05902cd74ce533944c20b136c1fdde17",url:"./categories/Redis/index.html"},{revision:"362621de299e639f902ece2449b7bcf1",url:"./categories/Web前端/index.html"},{revision:"0ee270d938215b9be732121fe1e58a60",url:"./categories/中间件/index.html"},{revision:"e16ad4025f4096008a8c22951d98554b",url:"./categories/工具/index.html"},{revision:"7b9f99a2f47a2602cd2da180268e024b",url:"./categories/数据库/index.html"},{revision:"72de9301b0ccb00b5ca2b78aa17f66b8",url:"./categories/项目Bug/index.html"},{revision:"970e4b6888064ddd04c5ff8d7765dd98",url:"./categories/项目实战/index.html"},{revision:"e1c62bb493225968c63dea25cc836c6d",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"c634fd2f8cb29d8e4ec29752547231b4",url:"./images/manifest.json"},{revision:"676031bd577daa40ab16ef421ab041a9",url:"./images/pwaicons/browserconfig.xml"},{revision:"5db13727399a4302e283c0f991eab3f4",url:"./index.html"},{revision:"f468f3bc967338f2dd7a6e06c2eef692",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"d9fbb685d1a5bab761ccfa74a9deef9e",url:"./link/index.html"},{revision:"57a4e986fd5632e2e848e5ede080f300",url:"./logs/index.html"},{revision:"2ea8945dddb8799e44a9834c19c5560a",url:"./messageboard/index.html"},{revision:"06d20c825c51d6e5d1ece66e31273ae0",url:"./music/index.html"},{revision:"5396f8f02d8f683f2ec9c11372f86f1a",url:"./page/10/index.html"},{revision:"ce7da5af640994682c887a781043be36",url:"./page/11/index.html"},{revision:"a05271cbf243dea7a48213feb7b4697d",url:"./page/12/index.html"},{revision:"2f419d6f977011de6eea28d6e40e1f66",url:"./page/2/index.html"},{revision:"8a93ffc3cd6e1e77e2ac7dab6b0a6b7c",url:"./page/3/index.html"},{revision:"0c585f46a99fa580404bdbbf127eb7a3",url:"./page/4/index.html"},{revision:"8125d126fe438cafb5bb8ecfc1707a3f",url:"./page/5/index.html"},{revision:"0130ab5b1c9d2ffcff392628aee73ee4",url:"./page/6/index.html"},{revision:"8ebb5c19f1ac0585bc42ef6b4b2543cf",url:"./page/7/index.html"},{revision:"430279030b7b89982a79e8212b5ae269",url:"./page/8/index.html"},{revision:"948ae1c5ca434a1615b041cdc48a92a6",url:"./page/9/index.html"},{revision:"3fb2a3ed2897b729e1f1d93c666755fd",url:"./posts/1005838445/index.html"},{revision:"a1ab987c39061270459880d46a4aa038",url:"./posts/1104683778/index.html"},{revision:"a9d3880f5d5d192283eb0a265b764849",url:"./posts/1175849155/index.html"},{revision:"90feac17d269a1b3f433bd448e72d74a",url:"./posts/13005592/index.html"},{revision:"52b2796a10f24bad7df8f0b8ba08b355",url:"./posts/1330258666/index.html"},{revision:"ab04e5f8c4dbeb2f19659d15613595ba",url:"./posts/1339733598/index.html"},{revision:"389a58c30a5ce319e2c15a7d81d4d0dc",url:"./posts/1393401608/index.html"},{revision:"13032fe890b3ea9aa55a97b24a8206ad",url:"./posts/1519064184/index.html"},{revision:"5a3b6e39bd3e4c51066cb4ebd4481f0e",url:"./posts/1520998390/index.html"},{revision:"4130e04188e307290468d555eae90953",url:"./posts/1550900565/index.html"},{revision:"760d0f6455d0ec714b9c7d64e033dae6",url:"./posts/1566646582/index.html"},{revision:"a5fe9cbec6e1677ed44bc600e59d01e9",url:"./posts/1574967654/index.html"},{revision:"ed5f1821b39a80a11b46b687340a0971",url:"./posts/15f4985b/index.html"},{revision:"e86c706e1dd1396afb988dcf0622c493",url:"./posts/1634411798/index.html"},{revision:"84cc160c751e096a898a42115c64696d",url:"./posts/1677637013/index.html"},{revision:"eeed4e896b07db099eb319c2f0fa85c0",url:"./posts/1738458658/index.html"},{revision:"c6f5f17e91ca85a4c106291d91b89470",url:"./posts/1762820479/index.html"},{revision:"21f92caba2f6062b5fcd34355a77134c",url:"./posts/1872245415/index.html"},{revision:"440b9eb2b7b997a5d4849f2fba0c9113",url:"./posts/1905208898/index.html"},{revision:"7c6aa50f78cb6c37930eb8cbb409c897",url:"./posts/1b6f740d/index.html"},{revision:"7cb5769dda7775dc1e4b5bed4eef0a76",url:"./posts/1c9cc24c/index.html"},{revision:"199082fcd82e6adf064daf3d091dcc48",url:"./posts/1dfa6edf/index.html"},{revision:"136de6db3e695af24802017587f2a631",url:"./posts/2068565369/index.html"},{revision:"5b2a5157186e69ac0882dee996bce649",url:"./posts/2068909584/index.html"},{revision:"807814841709e811b5a1353ea4dc2814",url:"./posts/2086819267/index.html"},{revision:"06d19c9ffc937c20619a0b6ddeb82c67",url:"./posts/2120368839/index.html"},{revision:"4d0d741e0691512c6763de73e827de5c",url:"./posts/2130149512/index.html"},{revision:"4a9e4abb324131ee0c4bb949a2d8bf02",url:"./posts/2164673978/index.html"},{revision:"663521b2055a15f5da0ae68a7a241bac",url:"./posts/2187905911/index.html"},{revision:"3d685b97cc61542f4490838b66ff706c",url:"./posts/2243339053/index.html"},{revision:"ccb0119b3ab5398bf09acb4eea6efe78",url:"./posts/272460835/index.html"},{revision:"f9cc131cb42abb9563cb0587897fa3c2",url:"./posts/2761314235/index.html"},{revision:"32da3289b60d170d93d4f7fa565d4a66",url:"./posts/2781775372/index.html"},{revision:"e555ddab43d6d08cbb6e8ce184537e92",url:"./posts/2817363972/index.html"},{revision:"93880b9cc3d9a2cfe00298c270ba0dff",url:"./posts/2909614374/index.html"},{revision:"763331d130185593feaf18a2830a1200",url:"./posts/2922948377/index.html"},{revision:"91cb29c941ba42fb485129fbc9f0973f",url:"./posts/2968822672/index.html"},{revision:"9e09cc6cb347273c84f0298a88977b80",url:"./posts/2dd14627/index.html"},{revision:"25768969c2fcc6a6b6d573aec762ea2b",url:"./posts/315616543/index.html"},{revision:"86dd2c8fddaa4bedf2d44b37bae712dc",url:"./posts/325844318/index.html"},{revision:"9f08f4441927c40712123644c3337d32",url:"./posts/328351179/index.html"},{revision:"c9858c650e32fb3b30ac5ec207795d2c",url:"./posts/3305917059/index.html"},{revision:"d1983a4eae6e06ae348ef832c28261c7",url:"./posts/3528046541/index.html"},{revision:"e961e4544c9245a614097137a94943ca",url:"./posts/3554798849/index.html"},{revision:"dd7c10b1b8c261e137e8b5b5ed6cc053",url:"./posts/3556927238/index.html"},{revision:"ed5f9ac28ab689622c32c54d6727279a",url:"./posts/3661501281/index.html"},{revision:"cbf2bb03b48aa733f16d085ac02d84c1",url:"./posts/368886813/index.html"},{revision:"1973590930ad32a90bc9f4f86ca3c756",url:"./posts/3830795892/index.html"},{revision:"d1626c696cd2767d5978e75a9992ef41",url:"./posts/3862476156/index.html"},{revision:"eb46f16c001d51a71325811a27a71b98",url:"./posts/3895825257/index.html"},{revision:"e26c9d4b574d6b4683dc656d483a2f39",url:"./posts/3956353174/index.html"},{revision:"3c176eb05550587f762256d25639e7d1",url:"./posts/3979597380/index.html"},{revision:"39f8ddf1191faa91b8ca11429e6a683d",url:"./posts/3991296734/index.html"},{revision:"614a583bd6b27dc967226875dba39e23",url:"./posts/3994269159/index.html"},{revision:"9d045b9d14013fbbc3bcf9fafef44c15",url:"./posts/3b74a348/index.html"},{revision:"b7b3413d1de9266acd61e09dd4075b08",url:"./posts/3d7d679f/index.html"},{revision:"edaa26f48e665e10061ebbf5cd164542",url:"./posts/4004677012/index.html"},{revision:"841ae97aa6c518014661145e1a907318",url:"./posts/4019007238/index.html"},{revision:"75503ae2abd75d514114f4003164023e",url:"./posts/4146242720/index.html"},{revision:"96b2dda83af311514115d7af406877d5",url:"./posts/41be370a/index.html"},{revision:"91e4a4e13f8724f2cd263e8102a7e2cd",url:"./posts/4226784210/index.html"},{revision:"7f959104a29416a3c3fc5f4914185046",url:"./posts/427140827/index.html"},{revision:"1e8fb3ea90df88a504a6b6be583ff2fe",url:"./posts/4754ce91/index.html"},{revision:"d54360dbae8679c2ed0bcd95c0c26ad3",url:"./posts/50bb6649/index.html"},{revision:"97b2622e6affa318c22813ab02fca13e",url:"./posts/518000799/index.html"},{revision:"ad8651d15c8e15d5749d52edb70a50e0",url:"./posts/5d2bcff8/index.html"},{revision:"9e18b27d99b6cf4f0a1de506a5d24b0f",url:"./posts/5f5e4ccc/index.html"},{revision:"e8ba93bf9186423cbe35bc76df997780",url:"./posts/6082eda2/index.html"},{revision:"994903e6d8165d3185c1c4e91f2641f5",url:"./posts/622eb062/index.html"},{revision:"471bd1d5e423f84cf8d9c10e4c92ba82",url:"./posts/658751968/index.html"},{revision:"b46f96b82bb5b1e01ba59b50e97c6da6",url:"./posts/6b30c31b/index.html"},{revision:"e402b41d88d6f3d402f26b27057dfac9",url:"./posts/71d58e27/index.html"},{revision:"6cbf81b50d2d6451084d6c47ca928161",url:"./posts/726828229/index.html"},{revision:"746af5349a94e239e600bdced821eca5",url:"./posts/72f33496/index.html"},{revision:"7ac37d3d82a1f493ba547f425ada400a",url:"./posts/764a0b3/index.html"},{revision:"76e7e15d030e54aa3fadecc69b483d94",url:"./posts/771027640/index.html"},{revision:"7d352977d19c23fec0bb4512ec055346",url:"./posts/7a197d31/index.html"},{revision:"956f85bacab9f40718adf367239854ac",url:"./posts/7d1c5899/index.html"},{revision:"e4bf484f4523dca7d4f93d9ff025dc72",url:"./posts/80f09d1c/index.html"},{revision:"170f4f86223ad283f2de9ff3961e2b4f",url:"./posts/816104377/index.html"},{revision:"c18ea3f35fe5462c947c1b4a4861d2cd",url:"./posts/838d68a0/index.html"},{revision:"d641d884f78ef659c36021626693f4f2",url:"./posts/84460557/index.html"},{revision:"570090a5063998e5c3d6e64710586c17",url:"./posts/850137752/index.html"},{revision:"238f18261470464a73cce4d05123f806",url:"./posts/864013447/index.html"},{revision:"831e119c2517d27ad4db12f7feaee2e1",url:"./posts/865268903/index.html"},{revision:"9586845ba2d2edd79427b91c4f4dc4aa",url:"./posts/872766944/index.html"},{revision:"c0a26acf9e630af594d1bdea9a3ff667",url:"./posts/8bf03f92/index.html"},{revision:"06296bf7d44241b73e788dcecf060fa0",url:"./posts/9103988a/index.html"},{revision:"c6750674579a742cadd19006d6518363",url:"./posts/91ec6c75/index.html"},{revision:"2a48db05651bfaa2a0231cc5ac6b8550",url:"./posts/949df4a0/index.html"},{revision:"f6dae2048921de8fbeca07bf718fb3cb",url:"./posts/96e5960a/index.html"},{revision:"123b2db8e2ff772b4a6f6c7bd7282967",url:"./posts/a2af08b2/index.html"},{revision:"e0384e2deda4825521457202f6d86a1d",url:"./posts/a66c836/index.html"},{revision:"030dc79e14fe94c32a8c14802e03726e",url:"./posts/a868dd1/index.html"},{revision:"eb0e2a61b5ec2c4ca7e5ebbb0f4d91a8",url:"./posts/a8da4fb0/index.html"},{revision:"9132a300bbaf0cae7e0edb1f1a489c15",url:"./posts/abb0658c/index.html"},{revision:"37da7121d0cea81ade552c32f94dcdbc",url:"./posts/b41f8f0d/index.html"},{revision:"2ed0b56e721871c06e6961d09651e950",url:"./posts/b543ced0/index.html"},{revision:"7673c4fd7a473722fc123b6dad10d018",url:"./posts/b700ce00/index.html"},{revision:"c651aa7edb306374661ab954bf4180f7",url:"./posts/b95a7f8d/index.html"},{revision:"a83a36c1cc2c8577bb3dab00f24efe8d",url:"./posts/bff0911c/index.html"},{revision:"5876e54b4ba4ee9ecb99f0d72523b742",url:"./posts/c069b45e/index.html"},{revision:"9ad219eeb7a2a01e7378f043075edff3",url:"./posts/c8221b76/index.html"},{revision:"eb9b098bc6d18f2736eefe51bd73d926",url:"./posts/c84e54f/index.html"},{revision:"d5ece6e36f77f58f568fba51b968e9c1",url:"./posts/caa6f64f/index.html"},{revision:"09257a56b3dc1cd8957cb887196eb61e",url:"./posts/d461a50b/index.html"},{revision:"4f69ef978bef638313fa9d2084d3db5d",url:"./posts/de6b4930/index.html"},{revision:"9ed9d6488c68c6738277dbb540a2998a",url:"./posts/df2899b1/index.html"},{revision:"d106a4bc0138b40e3193893238b67682",url:"./posts/dfb9e877/index.html"},{revision:"5519f5222c3588ad2dc35c30be3804a9",url:"./posts/e403c9e7/index.html"},{revision:"fb67a9df667a5df43f3ec6691bcdd87b",url:"./posts/e63bc92f/index.html"},{revision:"0d6f180f9e2d7c8f6d5b35e2eb94e18e",url:"./posts/ed909786/index.html"},{revision:"ddd17df4299dc297e74b65e75651164a",url:"./posts/f1d1d958/index.html"},{revision:"4aec1d5b5e3663043d1f8ac5be55ef9e",url:"./posts/f1fcc865/index.html"},{revision:"8e9178089a64985e1ceecba11c52a1a7",url:"./posts/f347fc6a/index.html"},{revision:"65acccf95b0f4a2639b8d86afa2f3d1a",url:"./posts/f5810d24/index.html"},{revision:"cdcf758523a256e6d3986f40aedf5d1d",url:"./posts/fcc1ff03/index.html"},{revision:"8864f83fdc8613f16015b13b7f241977",url:"./posts/fe52487d/index.html"},{revision:"b5869a183612d15d239d36de2d6f7cb5",url:"./tags/Bug/index.html"},{revision:"25b395954d626e4bf54daf44983e3454",url:"./tags/Canal/index.html"},{revision:"e5f852606a017e898358e87c670fe242",url:"./tags/CentOS-7/index.html"},{revision:"cd5c7142d559fcfb032aeedde3a663b5",url:"./tags/Docker/index.html"},{revision:"c177f82360b8162101ec53f1bbfc9666",url:"./tags/GitHub/index.html"},{revision:"3f904af26a4b599afc4e6e9fa9fc760c",url:"./tags/index.html"},{revision:"6cc85c83a11f4182894f278b2279d339",url:"./tags/Java/index.html"},{revision:"bd1bfdb3eccf5dc3ee1b07f99016e35a",url:"./tags/Java/page/2/index.html"},{revision:"0bff191b81a6f35bb0072b7f5e40748d",url:"./tags/javascript基础/index.html"},{revision:"1a5f740b8e07e1a7c20f8476c6cd7194",url:"./tags/javaScript基础/index.html"},{revision:"1cce819ebe91c429b2e50bf30daa38f0",url:"./tags/JavaScript高级/index.html"},{revision:"f61c90fdd6d555d7e1d2900f8580eca7",url:"./tags/Java算法/index.html"},{revision:"314b469dd417903ad1cf2500b793294f",url:"./tags/Java设计模式/index.html"},{revision:"d61e47aa6dee9909205e0a508a21c36f",url:"./tags/java项目/index.html"},{revision:"693e99450b2c01d07ae953ff803a75b1",url:"./tags/Java项目/index.html"},{revision:"1bdb1fed5cba6adeed0624ed9a026a91",url:"./tags/JDBC数据连接池/index.html"},{revision:"1789a4692cd901c9bc89e7450e728117",url:"./tags/Jenkins/index.html"},{revision:"17fc0aac15bd96e186dcdca5584c4aa6",url:"./tags/jQuery/index.html"},{revision:"6dac67994dc7a5499833456d9bcc1e83",url:"./tags/layui/index.html"},{revision:"7833656ba26996e7f00a47c0d60aa9e4",url:"./tags/Maven/index.html"},{revision:"5b5a8260ede87613b78e0df1a564dc5d",url:"./tags/Mybatis/index.html"},{revision:"6e15727e15894eb67f08d401e1721fbb",url:"./tags/MySQL/index.html"},{revision:"e6e37b8bd7a14055f8b768818a5949e1",url:"./tags/Node/index.html"},{revision:"0201eef168c5c04fca22c46ddcd2f3b2",url:"./tags/OSS/index.html"},{revision:"963a53cb91199bff6a175a20947f26ec",url:"./tags/Other/index.html"},{revision:"09f57f1bf6c4db21e62e978ee15ce9ab",url:"./tags/Redis/index.html"},{revision:"ffc50bf40b14804ee3eac7454bc91b8c",url:"./tags/Spring/index.html"},{revision:"5296682db61709f88a4a41ff1c6108ef",url:"./tags/SpringBoot/index.html"},{revision:"23b6b44b7118e940e4ad36b1442762ea",url:"./tags/SpringCloud/index.html"},{revision:"98a173257f3857497a88456802ca5919",url:"./tags/SpringMVC/index.html"},{revision:"57b49a6370141cc62297b08a69de30c0",url:"./tags/VerCel/index.html"},{revision:"cd4b7674df8953a74e48dfa49d005214",url:"./tags/VPS/index.html"},{revision:"4709203facaa45232fee4c1a65efb346",url:"./tags/VsCode/index.html"},{revision:"e1c14dc18fa0e72dd04dfbad368c9102",url:"./tags/Vue/index.html"},{revision:"01770fc5367dcfc5dbc42a055252cda6",url:"./tags/阿里云/index.html"},{revision:"f9550a0a38e07975fb9b54c0df370ce8",url:"./tools/css/bb.css"},{revision:"69e24ad38457a2ced31cbde19a566bd2",url:"./tools/css/commentsbar.css"},{revision:"c0035e83d22e8ab118b1bdd21c182e1e",url:"./tools/css/friend.min.css"},{revision:"f7f5815747f181f33d671fabb84a191d",url:"./tools/css/icofont.css"},{revision:"4b8c0ea28cb2ecd76d9183a7389bbcb6",url:"./tools/css/notetag.css"},{revision:"9bba4037d37319dc47488db38b2ecc80",url:"./tools/css/oy.css"},{revision:"c2beb79e7f957c7002a926e620fcde38",url:"./tools/css/oyindex.css"},{revision:"725ffb89cdfee2ac582076db960e2dcc",url:"./tools/js/index.js"},{revision:"dc5e7f18c8d36ac1d3d4753a87c98d0a",url:"./tools/js/jquery.min.js"},{revision:"6b9b183c12660a3914a87c940ae752aa",url:"./tools/js/jsdelivr-auto-fallback.js"},{revision:"dd038ad08596036a528554ad75689061",url:"./tools/js/oy.js"},{revision:"2f6ed1d4f664e913afb75553dee28fe2",url:"./tools/js/wow_init.js"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();