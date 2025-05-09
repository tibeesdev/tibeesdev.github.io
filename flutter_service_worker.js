'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "b09740b6909d8dc190ec09e521eb7b89",
"main.dart.js": "3a05e43c351b53bb7a21c0f402b034b8",
"manifest.json": "a623a9621ab5e2163eb8b8899b737e32",
"icons/Icon-192.png": "02cad1065181810614f7995787d1c3b4",
"icons/Icon-maskable-512.png": "96e4cd4a4a22e165cd689afd8d3540f8",
"icons/Icon-512.png": "96e4cd4a4a22e165cd689afd8d3540f8",
"icons/Icon-maskable-192.png": "02cad1065181810614f7995787d1c3b4",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"index.html": "b5d54b14d62cd6a8376d24d102138bd7",
"/": "b5d54b14d62cd6a8376d24d102138bd7",
"flutter_bootstrap.js": "3739366c30c69779c4ebcea08607442a",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "1f67bba9fb594d750aa612e6693e0c86",
"assets/assets/images/Citeora(banner).png": "ede477b42b89f78557fc18b658641c4a",
"assets/AssetManifest.json": "71f7ed667969feb7ee227d3b207a2fef",
"assets/AssetManifest.bin.json": "9ea85c1a66e4ed8ec5d7ce20fd2d3921",
"assets/AssetManifest.bin": "520f415fd25627cec93701a24161d57c",
"assets/fonts/MaterialIcons-Regular.otf": "02142ec6f2e292fabceb5dd46b3de12e",
"version.json": "4eb0c0ec4b076463260016255c478f38",
".git/config": "183264ac63513db09a6537e78d6054bb",
".git/logs/refs/remotes/origin/main": "90d61eef8e0d45eb1debb5a75540b319",
".git/logs/refs/heads/main": "da33b786e5f92815dbaa618c98db410a",
".git/logs/HEAD": "3a4024e063a7ecab9cdfb79c33b7cabb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/index": "206dde87b7e2a6ef299b4a5f31814911",
".git/refs/remotes/origin/main": "918d776c4da2b1416dc468f74d48bcca",
".git/refs/heads/main": "918d776c4da2b1416dc468f74d48bcca",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/objects/f6/f0ea76f0b5ac82940b1021b68dd9bdb77f0b90": "323e5ef95b449249903250a2360eade8",
".git/objects/bd/20e4ac5c7e4a8076839e1259d3ddcb4acd9f92": "2dab7b446c0690813c6b5e191823ccdf",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ee/0d5709e291ce5ca25e0cb8a79f6db88dd2bdea": "ee2089171f977753695dcf4b84b331fc",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/2f931e039623b37042efec3101d8fdb3b65328": "d4ac5f90c66baa9efd6d7074b9435491",
".git/objects/e0/28e9b8b95ecce6e17079ebb4d519c665362bd9": "8fec7d7003ad7a0ec1344ffe9f0007d7",
".git/objects/37/46406bd78a08995620dfbb10ca61fe63b1cbac": "8a457b6850c29a2c99f3f9d88b532c51",
".git/objects/03/e0b54e8e4ba8e60e8171f3379f2ddbeb44ee00": "29262b69a9bf66a4b43335a5043b1fd2",
".git/objects/8e/d1659be2f800d6d137ac2f01a53f1a87a6d17e": "c4a44898d5ad8ea03636e79645ddfdb3",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/70/3e45d5918d901ac37b8ac9ccc8812fcb92931d": "92fed8e0a1fd0a98ee6b9ae4c3d3e676",
".git/objects/82/bf7c16bc27db9f2c18dc6dfdf40f117b2e0163": "1113c31b1541c0ece05af24883d11d36",
".git/objects/82/4901b062bcb85da864fedf8b8370468587178b": "769024ae6eb6af239951b2da8eea382b",
".git/objects/a1/5f75fd54fa402fe02eb670124d061cad8b84ea": "2d3e280e4c028a81489aaa3ef560d885",
".git/objects/0c/d210bd25219108be4f5a6f85a980b60f30a4dc": "c33254157c3aa41143062e063006ff57",
".git/objects/04/acb7e5bd174ab0ab99dc762767d85a9e025025": "de07a8059f2eae0c30e7fbdd191ffbc7",
".git/objects/04/7fd23ffd0d297a65d157e905fc634e05fb994a": "9f5595a493196e8c2d7c60a4c6405698",
".git/objects/83/a28dc231c094a02d4dedbce05ce2dc6b7c7b72": "af96371bc3daae0dac7b47c9136ff9c3",
".git/objects/7b/1dabfd3153ce11a4906ae4266298f47072206d": "43a80e1159e43e6e5042a13ce3b6ef6c",
".git/objects/51/9e4a2bc9df715d381bd961193728097bbd6d80": "1443fc186120a576d78873ea571efe46",
".git/objects/12/96c70e82e00695c4c6944479db0e95b8c0a70d": "d963475f1656300903279887124a53fe",
".git/objects/22/6d36d7207d5aa3800b791c4c3eb8619ed743f6": "5ecb78946589a53e4b5ce2c304dc0988",
".git/objects/de/331bf640fa193d5114ab6b276933eb24a45954": "a3ec1331efbe22823a550302f35ae351",
".git/objects/40/3f5f0da47a833effff929b9ff07b84176c41da": "45c208ec49623cb7ce5c8a982ee7956f",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/d923a6c397535a37f6bd7d9478e61588c71a77": "587474d33cb498f96ef00c5cd2977e9b",
".git/objects/57/9bc7cf33776921b158e9a0c392f29c4e3e2691": "fe40bcab78e97982e4ba31980e3c9db7",
".git/objects/a8/936d1006f8340b478bc8dc89c87342e7556d58": "c89c84e9de86b36fd58d25301b3bc48a",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/3a/371569e449a9669e90de763959aa9fc195e27d": "295d4bcfa46d12f71341276c485ffe2b",
".git/objects/f1/0eea599093586f640203a388823b02daa311d0": "072943aca9e8e00fc3113e12299d7689",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/92/ab6493f0b44ea037d2ebde6bd96d4e79ab98b6": "63b6d92a29dcc55f36fe676a1eb3e16b",
".git/objects/26/2a235c5022660db9f19f5793833b037429b0dd": "902b4d19efa08df3f3dd23e11628f803",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/5f/bdb07810440ed71f5af8de4aa85adc99ed4aee": "802b48998df4616b5ddb7fcffd969e1a",
".git/objects/34/c830e08ac9a41e1ec0d6651c0d99664635ee30": "55f49ff3526db5a23db1360b6cac3c86",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/a7/caecaf127014069b152b529c693c25e7925940": "4857579050f18c7376992652e1e31011",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/2c/b60e3a36cd8e7c6bb5d964054d764e0e9d5e96": "813dddca6fce04813561221ebd4394d3",
".git/objects/6d/92bd66bffec3c283d7538222f4dbea3b0ce49d": "aa8946210a954f29f91995ac49cd382a",
".git/objects/dd/8ae49871e9e0014c0c68822f08fba3838b120f": "1e232ce18f5018d83c3daf95bbdadc31",
".git/objects/fc/aa8ff3a601a2f00c851e9bf793d2172ea86d68": "71194a581b2dcd3c23a4b9c29fa3884b",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/c7/58fabb9afb5a80202ba3b2b2993518b7e9cbd8": "70c7747e4b602510745ac6d46b0eb5c9",
".git/objects/c7/68d5d73f44e75da8ab2ba96a95bf0226e49878": "1bc03498aa437d640a9f69ab8fb3e324",
".git/objects/6f/1383688e9957bebcddb0879a6b721d6b360184": "40966c5fdddf6be3a485fb69d9aae095",
".git/objects/52/4bbc3eb9fd69d10f19900b3e785d79ec304eba": "dc29b6fe420de286698b7ea2fca0594e",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/60/7db3c781ca19d634dd0ad4322b3a00835b325f": "6967c59bd68d3b31b7f7911b7f8a8856",
".git/objects/14/996e524b248e18a82e3e59bb6243fcc07ac9f9": "cae318b374699042e1588cced507849a",
".git/objects/bf/115f55058fef8ffb161a54db062b6facedc1ff": "130a5fb12cad8bec018d8dcab2f2ce61",
".git/objects/a5/74b2e10cf69783be6f2f1f211eb55844a91422": "b0ed98bf824e050ef6a2cc7de410d03a",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/79/be90fc65891e5b6a7f7614a3777e0588474bb9": "e3bd0b6a9f521160c83c094a74fe5874",
".git/objects/79/b91fe92ab1d7f037a5d7f3504bea242f26012e": "2e340d822385fb5a1b79cc4f5925b734",
".git/objects/24/5cb496cf0021d7d6520b078ee7a55606a47782": "d312b71f0a66cf37747f4ccc24b14ff6",
".git/objects/49/83d60165ef932f717ebde9b6306515af4e5e46": "842ffd4c68e1f8bab3442297c32f5554",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/359106405a84e7f4f615c2e95a01a7d403933c": "e42b50419a7696b64cf1cfec3326a895",
".git/objects/08/4c663276a4070e2ccccf865caf8ec4ad8719cf": "94d4ce52efdd9446a8bbb0c8e8073d3d",
".git/objects/08/185cb3df1eba5eba1146b9bcdb6e165ecdccad": "206946185e49d6632c560a2a2021aec1",
".git/objects/ba/30994a5910f721c6d3e5281b874cd906050338": "db6e7961f772159ee88532f662ecba4b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/a0/d46826b93588752242ab16e1b3d94e6b5123bd": "c3889b555e1af2509d71065a663a4998",
".git/objects/a0/bbb88332f180abc8133fa5a56a8be3634a627c": "1969dd547eba1b6e6d131848c238c445",
".git/objects/a6/daa4459dac21053617c49da4cd175e178d5dd8": "6de69de1a0693be0b32dca33ce9a936c",
".git/objects/af/5c43f6efc0c42a3e851db80ccc99f83abf7e25": "aca73e7dbda87e7c98143a4fc911281e",
".git/objects/61/a3e39b7da0bb34912f4ff2bfc30bd4febd264f": "39a4089a17379cab0a5c8abf34c71d21",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/1d6a90a30fd17913e2d069731d8f161a833b0c": "5422d68f63d76af1b6122c7cfc747ce7",
".git/objects/91/e2a74c9794eafbe373b1bbce8abe29a235eefd": "a05b43e3f2b1d628fbf2f2f73a228344",
".git/objects/89/f9f63ef8afb8912d47d268645b8312f45249b9": "e4ddd1019f9211a28ded9b48292af207",
".git/objects/f0/0524884618f59a8029af302586aa22a4fa62bd": "a25f0062d929cd23855e68de0541f4c1",
".git/objects/77/5e9057a774e12e7c02ca346ba57d4af002f809": "638e918ae1bb3d80150853936b33f8fa",
".git/objects/ed/4eb3c65b55a7bbe40590a9659a1160443f6e42": "28a1ceb952ac894ff7eb62638bb5b43b",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/3b/8229b26a6a32ced00c309137f87548030b7de2": "2d7a05ff14db687cc281fb80850eef13",
".git/objects/ef/b65d66ecca96967d8af73b5f1f12260b02a9eb": "290c841a1cb2e4c868e0e8093b1ab87a",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/b4/2b4c3a046631853e8b433d088d2006d4e0e567": "3c11d0d5d20dbab3bd4a736fed693466",
".git/objects/9a/674773ec9191efc218d249a59ca9f51027cb5b": "6459b9c81fe63beee3a68c81f6df7d82",
".git/objects/80/dca5284d3c8d293192f10470271ec268fbfce4": "6ef8790cf21e24a1256d996c3e481c09",
".git/objects/a9/e3ca37a79051c871131ab2d761338f3ea5ec8d": "edcf6f1b564cabe70ca3fa9488c91dbc",
".git/objects/a9/5afd901e89b7a8005708d7678dbceb67b04a6f": "6c7a7f70b6c7fd35217f52853b1751e9",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/2e/0549f43b4fe2b28597b414bf03a63a00913e8c": "67212c46a72248769fde8179b7cc1ac1",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/90/08c732d9320a40e6f0780c4fdec6e1d6bf5639": "660da450ef8c34db63e8c5b0cd8f21a3",
".git/objects/d1/cb547af24825a9c6fb442558c6f3f344430d2b": "b53f6bc643014fcc7f4f3ab80916ed74",
".git/objects/d1/2bbc1a4ba6b61dbb92d7a591a67d535cc73c12": "d8f23b9d9a44eabdc060bb5f168470a7",
".git/objects/5b/3b7af7fc023b44d9a1549f7537ad4021aaef5e": "8322bbbffd08efd4e0968d61661e76a1",
".git/objects/b8/35a44d6b60d1ba6bf14464eca73f068224542a": "1d0a5fecd8fc70c67a62b84271d7a163",
".git/objects/36/3a470e40477d5bde18a9e7607ac9f9e874aa81": "a3d3281fd969638149edd407254fa247",
".git/objects/e1/f1560af5f7a2c70dd72bdb218a3e33c39d8778": "d98c9d613a44197c14f14ccdf9f51200",
".git/objects/fb/72524329c093a4ca2ce3f54daaa569de063317": "d97304cdd9b4f897c6e31739642a410a",
".git/objects/7f/85a27fe737c39263de4c2549383fc5e5c64d52": "c89de260301500ba565dcece64533870",
".git/objects/1e/87c734f17b9eb008c1e732b792aa3639f014e6": "c0da7a0794d9c9c1e6d3f64964442137",
".git/objects/1e/4b3db661e6d6756a7b8823dbebe84295abd382": "56799187a60d28800e15ec7a3133fd20",
".git/objects/9f/54ec65e93790948c0acd71de02ca1100792c96": "ef9a18418b91236d588596a142a2baec",
".git/objects/9f/ed93438c66ab8b8368a4bf9a2c77733827c7ba": "9c61033700bca2578c379a6a527cccee",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/db/4910f7e167e097d0dfb8a5d3457b45a3e031e4": "51208bbe8537d119b2e0024c33213258",
".git/objects/0f/15d565c89a72255aa267e167ad14f96575cd18": "df6120d6ed2fb2450c99b7b930c59fa7",
".git/objects/39/33914c3b5186da1a87620108789b3e823ef14f": "4e7f865e5bd9674dbcea3a7e680188f7",
".git/objects/39/34838f04c4cd9e023552eb7cdf93509adc6a90": "6fd93b5f73000867a1a4f7880a5c9af7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/e4/9edd9ee743e9aa0bb6aa7e634347c13e5cc5f5": "a699973c836c80c8850ad82a16d22865",
".git/objects/96/1dc8379d3ff1d627dfa129593f2b90491d2a24": "7f6ca9ae6b723d257e9e8f04cadce856",
".git/objects/b7/da216c89009ceb5fa7f1b4ccb9e5ea584fa5b6": "87b0c4cbc0d8b799df3a50cce3dd305e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/4e/75a01b3bf4cd1b61e58b576507feb9c5202aca": "362df4225b709fe271b2efcbb36d2462",
".git/objects/d4/5531ef528adb3bbb5461ca4c285612d07e584f": "6c1c0b48c6baeee0d86ef9188ba083c2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/COMMIT_EDITMSG": "700423f050adb15a9a43fa7f52738ddb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
