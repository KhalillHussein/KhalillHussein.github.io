'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "399830f8477e6120c08523191f8aa5e4",
"version.json": "73fbb0607c23265a1b5aee7524642c62",
"favicon.ico": "021a1594b50bba4e2c91a6e10354a6db",
"index.html": "221965c8b9ce71c672d75aea93c29d11",
"/": "221965c8b9ce71c672d75aea93c29d11",
"main.dart.js": "51c8e7c3061e732db747db7d0dd886bc",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.mjs": "ad4b7a04a8e1f2e257fa18160ad714bc",
"icons/Icon-192.png": "147934531f77d6f12b8392d393ed64b2",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/icon-192-maskable.png": "2e64bb8fcded1815c86f1d48ba141bb8",
"icons/icon-512-maskable.png": "a886f2b638b58317d93b185841ecb05e",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "4e09e66a59d014b37f3375db87fa0aab",
"manifest.json": "c2f84e6e26e93a573d65e91ba2b97e7c",
"main.dart.wasm": "a8c55b7c584f617dc27fb1ecc1e5c4b9",
"assets/AssetManifest.json": "4f362909336b2681a4884917b9b58421",
"assets/NOTICES": "81de08650dbbe042c09c70374fb400e1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "c137895bf511727cd8dd40d04ebad39e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "95a9f251de8f1d97cc08285f40945056",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/svg/bg_pattern.svg": "6210755fb49d97451dd045b682c1daa5",
"assets/assets/svg/ic_qr_code.svg": "440a7f74e25993908a86cd0a21c9e878",
"assets/assets/svg/bg_star.svg": "d6932c8c6e0ddcbef1807414d3eba962",
"assets/assets/svg/ic_cross.svg": "c9ce117108eb1098cbc3540b729bffa7",
"assets/assets/svg/ic_locker.svg": "b3c57a186655cafd200cce046c8b831f",
"assets/assets/svg/ic_pause.svg": "066646dcedee94c0eae0cddff22baed6",
"assets/assets/svg/ic_rounded_arrow.svg": "350b82c64905004334f2b3fcac035d03",
"assets/assets/svg/arrow_left.svg": "88ac0451d15e1ef547dafdddcd30a269",
"assets/assets/svg/ic_dots.svg": "379d613499f9ab18cf259cf8663c0172",
"assets/assets/svg/arrow_up.svg": "974b728e5763fe6e4bafef7d719a3fa7",
"assets/assets/svg/ic_rounded_arrow_fill.svg": "fcc8f884dfd60d72a1ec97b339a83abe",
"assets/assets/svg/ic_failed.svg": "64f1f43410d8167f80add3e92e0b2f32",
"assets/assets/svg/ic_exp.svg": "995116b198906509d8f91de9a93f44c9",
"assets/assets/svg/grounded/ic_grounded_logo.svg": "614e03c205f5eb9abe3ae97cbb78f4dd",
"assets/assets/svg/grounded/ic_favorites.svg": "b6f94604e0209d971585019518334281",
"assets/assets/svg/grounded/ic_flag.svg": "b5300f6876383d41cca5cfa0b3d7112a",
"assets/assets/svg/grounded/grounded_popup_title.svg": "1f9eb34890b3b7d0cd71b61150c01949",
"assets/assets/svg/grounded/ic_location.svg": "0d3a8f13c446ba1ca8fbb61d5645c786",
"assets/assets/svg/grounded/ic_grounded_map.svg": "071a32a30bd3a9aee88bfe91eb383fd7",
"assets/assets/svg/grounded/ic_like.svg": "9424fbc6356f4dc8cc1b5c4d7eeab1e2",
"assets/assets/svg/grounded/ic_winner.svg": "1a7d9af08824851fe413d76b8f5eeadc",
"assets/assets/svg/grounded/ic_one.svg": "0466cc6be12654504c2ed16dfac88131",
"assets/assets/svg/grounded/ic_quests.svg": "7ddc69b41ddcfcb7c6c89e94e83ddcfa",
"assets/assets/svg/grounded/ic_locations.svg": "7515907c2f5273db074e60d44a1c27f1",
"assets/assets/svg/grounded/ic_sport.svg": "48b3935f7b1a349c6a993c2911231765",
"assets/assets/svg/grounded/ic_14.svg": "1c36a81df967c8164726938433bdc633",
"assets/assets/svg/grounded/ic_mic.svg": "d7f8dc62caa7d5f63b8766ac26e6f884",
"assets/assets/svg/grounded/ic_way.svg": "3a5a5ed4dbc3ce882b76c50d8e420a06",
"assets/assets/svg/grounded/ic_chevrone.svg": "a397915fe84eeba733350347fb6035c3",
"assets/assets/svg/ic_atom.svg": "4cb48c377d56611d0543084807ba7c0e",
"assets/assets/svg/ic_drop.svg": "e4617158e81151325aaba5eea189d041",
"assets/assets/svg/ic_promocode.svg": "012151f19093aacd4bf86e5122d116e5",
"assets/assets/svg/ic_checkmark.svg": "4c49c852ee2a1dad68353dbcadf63891",
"assets/assets/svg/ic_play.svg": "15796e73cd1611921f9ce7cfced0b5c7",
"assets/assets/svg/ic_gallery_add.svg": "f70dbaebfe47ce2a120f374480aea343",
"assets/assets/svg/ic_copy.svg": "725d3bbd44288cd4cd3d6b362d6e5ee3",
"assets/assets/svg/mission_corner_blue.svg": "bc933dc11948ac87a883627e0a594055",
"assets/assets/svg/mission_corner_green.svg": "82278e7539373bbf30a4990fb00d3787",
"assets/assets/svg/ic_protone_credits.svg": "7c9ddd0b3972445c7d06f5e10e0eeb54",
"assets/assets/images/ic_atom_coin.png": "a4b9a8309681f164c30317efa8bcfe0b",
"assets/assets/images/s_Share_background3.png": "e9eecdb5fbf2b27e60a7e1f94b3ba45d",
"assets/assets/images/SuccessPicture.png": "e54b050989b2d2f9e34d0d480bc72c64",
"assets/assets/images/3x/ic_bundle_progress.png": "ecc7267545b924b142f535a81bc98548",
"assets/assets/images/quests_list_tab_center.png": "88826d671815145016a73f8400deab66",
"assets/assets/images/ic_new_item.png": "7cc6d12fbdb9de85755b186a0ba21cdf",
"assets/assets/images/network_error.png": "6eb0baae00a34435d7ad07bdeafedec7",
"assets/assets/images/image_sent_logo.png": "b8b2dc103bdfb06723f4ad28f720b91c",
"assets/assets/images/poi_image.png": "e69c7708cdc61c8e3de5f48cd3978669",
"assets/assets/images/ic_bundle_progress.png": "756be952e60f36c5c58ef242edd5c60a",
"assets/assets/images/seeds_feed_loading.png": "97ae58b63dcd9cfd97e3f7ec51706f2a",
"assets/assets/images/quests_list_top.png": "fa202be6b84bf104d9990364090f85f1",
"assets/assets/images/Daily%2520Image.png": "cd0dd1c4f0251d43fc38bc2ca38748b7",
"assets/assets/images/Daily%2520Sprite.png": "9d096226f09429c5326e94e132f048ef",
"assets/assets/images/ic_sports_coin.png": "d606068c639e028ea8c1e0553e40dd8a",
"assets/assets/images/PictureCheck.png": "6699ce9074ff977b17d7e1d50b4bc394",
"assets/assets/images/RSVIcon.png": "14bf05f735cfe6d7aa20ac933194bddb",
"assets/assets/images/quests_list_tab_line.png": "8f9adf265c9b3355a280ff54c27fc02f",
"assets/assets/images/seeds_simple_logo.png": "a485b9749f644d74f78177566dbf0d81",
"assets/assets/images/logo.png": "ab70426e7c385d221ce626503ee3fa63",
"assets/assets/images/grounded/box_office.png": "9aaab50b7e5275f69cdd5c387329cbc4",
"assets/assets/images/grounded/molodost_active.png": "86185acdc7c6bfc08690fa48ed0a46d7",
"assets/assets/images/grounded/nikifilini_active.png": "0359c63036c6711751ab505419bf5883",
"assets/assets/images/grounded/dogload.png": "6172003722338e039e06df0f789af706",
"assets/assets/images/grounded/punkt_e_active.png": "869bc2bf55b1d0ec5814a9886f122306",
"assets/assets/images/grounded/rim_zone_active.png": "b307eaa89a3bbb66ff5e41041ffcdd47",
"assets/assets/images/grounded/kakogo_cherta_active.png": "2747128df5935474141b824d600e1741",
"assets/assets/images/grounded/street_art.png": "d11477427e0165a431fbae413d690d9a",
"assets/assets/images/grounded/foodcourt_active.png": "c2d655f436c5d7c582cb2a0600b6390d",
"assets/assets/images/grounded/lounge_zone_2_active.png": "31f76c582e1ba64fc6145f6da4ae3d89",
"assets/assets/images/grounded/dobry_active.png": "2cbcadedff5042d5cedc9487752cd660",
"assets/assets/images/grounded/street_art_active.png": "deaa92a548314f08b046dffb437af708",
"assets/assets/images/grounded/grounded_shop_active.png": "7f3bfc66ace73d4eebd374b72009b753",
"assets/assets/images/grounded/breakdance_active.png": "4f5f50e6c8efc8a5a7b471be96174a27",
"assets/assets/images/grounded/ace_of_ace.png": "3bbb542262c214dcbd63933d2feaac53",
"assets/assets/images/grounded/information_point_active.png": "fde56f7469e8aa5b84ef22e290da7e6c",
"assets/assets/images/grounded/rim_zone.png": "2abc347e1dcce813938af352607cfc1e",
"assets/assets/images/grounded/trash_active.png": "3e9bdc66af16009536aa5ad1a1240f64",
"assets/assets/images/grounded/ic_flag.svg": "b5300f6876383d41cca5cfa0b3d7112a",
"assets/assets/images/grounded/go_hard.png": "d0992609ae0c264eba4cac6864bb2f55",
"assets/assets/images/grounded/tears_of_active.png": "269f6d21c1e454ea4717eb6128cd6fa8",
"assets/assets/images/grounded/scene_ultra_active.png": "fe6992cac5a14f59597b7f89a515b506",
"assets/assets/images/grounded/exhaust_active.png": "7bceae6ff0331a9433d397659b9f4501",
"assets/assets/images/grounded/grounded_shop.png": "738db7e705dc6fe8fc1f0c41b2093075",
"assets/assets/images/grounded/scene_studio_21.png": "b5ac0a7f5cf95150f43b062cb101572f",
"assets/assets/images/grounded/lounge_zone_active.png": "c2d925de9e6a97b57ee6555e706bd544",
"assets/assets/images/grounded/ppk_reo.png": "fc831424f2aea787cf8b63d3449f1ddc",
"assets/assets/images/grounded/foodcourt.png": "6ccee6b501da3c7161e694e6549238fe",
"assets/assets/images/grounded/ciay.png": "04753ccdba7b955e3854e8c231eaeb64",
"assets/assets/images/grounded/whitelab.png": "244d46ca4f9de45a785a57ca36a6288f",
"assets/assets/images/grounded/ppk_reo_active.png": "cc617c68a71bba50429defe8c742ac72",
"assets/assets/images/grounded/dgt_active.png": "89c650addcadefc593fcba1736827f41",
"assets/assets/images/grounded/art_object_ultra_active.png": "494470d5d553b1c29fac01581256e380",
"assets/assets/images/grounded/kutej.png": "20aa971565048bd68d83c6f128b3f164",
"assets/assets/images/grounded/whitelab_active.png": "e56490a8bdfdfabe0b6936ad8fe1f536",
"assets/assets/images/grounded/molodost.png": "8bb33aa0867abeec7dfbe20ca591d3c9",
"assets/assets/images/grounded/extreme_park.png": "2c5758e6d22b59c24f45c64e69216030",
"assets/assets/images/grounded/information_point.png": "89033dc4ad5ab49b1d39ea253872071d",
"assets/assets/images/grounded/acr.png": "27ca9df4e11a3a1ddbb9000e9e911e8b",
"assets/assets/images/grounded/kakogo_cherta.png": "c36217f3b0df819b046c9232708c62f3",
"assets/assets/images/grounded/atom_active.png": "c1607fb1586aa7071f3bb500e2991ac3",
"assets/assets/images/grounded/hospitality_zone_active.png": "758a96efedac7e20625ab0d8a3886fab",
"assets/assets/images/grounded/evacuation_gates.png": "68db4515dd6aa0f9c3b9dfcb05d7340a",
"assets/assets/images/grounded/stadium_lugniki.png": "caed89d3783d4939f9cb55f01994da1e",
"assets/assets/images/grounded/market_active.png": "f53369c72f7a0bb0a3a8c4078b09c72a",
"assets/assets/images/grounded/box_office_2.png": "be02a05078714771d8f808d2deeeb9a7",
"assets/assets/images/grounded/expo_zone_1_active.png": "4babbf616b9f1380de76f221b94e809b",
"assets/assets/images/grounded/evacuation_gates_2.png": "abd9aa79311b480a07b2f9cac4930f9f",
"assets/assets/images/grounded/dogload_active.png": "96e936f6c6f015a785f7548b8243acb0",
"assets/assets/images/grounded/extreme_park_active.png": "c352a0d86d47f59d0a93ea3f72faf81f",
"assets/assets/images/grounded/nikifilini.png": "3aca0959f132b604848276bd7b0d13fa",
"assets/assets/images/grounded/foodcourt_2_active.png": "71b020df9187ea88c0f265697288100e",
"assets/assets/images/grounded/participants_parking_zone.png": "9c3741cac14edf9e1fd6402b5bfd08a5",
"assets/assets/images/grounded/dobry.png": "1beda65127863959fc88b7222fa5d3df",
"assets/assets/images/grounded/press_active.png": "d88da2591211e37ea5f2918e741ed7dd",
"assets/assets/images/grounded/guest_entry_active.png": "e2f9de3fe0b7ac3d0b92a74963767cb4",
"assets/assets/images/grounded/eco_lounge_naturalist.png": "81ca0c493032c6908b71bee5bf4f6d8a",
"assets/assets/images/grounded/nochwear_active.png": "96aa4f391b43d8b7ce2b33fc36614a09",
"assets/assets/images/grounded/atom.png": "066932aa1658469b39f4c56df788a6de",
"assets/assets/images/grounded/tech_tents.png": "6ccb6f0bd4952d4adf0de7909fe6281b",
"assets/assets/images/grounded/wc_active.png": "57ba68469b5e61061616d4c5acd26f11",
"assets/assets/images/grounded/art_object_ultra.png": "899dc91ae9836547618223baadf9ddb1",
"assets/assets/images/grounded/wc_2_active.png": "ea467e31b2f010a59b45ead800dbff02",
"assets/assets/images/grounded/expo_zone_2_active.png": "faa3931952186128fdc2d08dbb2d252b",
"assets/assets/images/grounded/guest_entry.png": "c90980f12474bb5ce9d31858f65367c9",
"assets/assets/images/grounded/ic_one.svg": "0466cc6be12654504c2ed16dfac88131",
"assets/assets/images/grounded/kutej_active.png": "8d176d09c9d1df546db483a3803f7bd3",
"assets/assets/images/grounded/box_office_active.png": "fe399f44eb4b9189400ada285e54ec7b",
"assets/assets/images/grounded/scene_studio_21_active.png": "f54842de2a17dff5508dfb515a5635e2",
"assets/assets/images/grounded/helios_active.png": "c9d0eeb0480cfdcde4fd39b8e4d0fd6f",
"assets/assets/images/grounded/participants_parking_zone_active.png": "b5a1b987babd8ca4a92009c3d0f52674",
"assets/assets/images/grounded/basketball_active.png": "805422594948502b77632b352c8c0825",
"assets/assets/images/grounded/rich_lounge.png": "656a182dbcde6f3b9163f1766aaa1b9a",
"assets/assets/images/grounded/telegram_logo.png": "ee45ea63c5b15c2dffc8a07c566b6dff",
"assets/assets/images/grounded/scene_ultra.png": "3aaf92a061fea0aaa03fe5dd84becdca",
"assets/assets/images/grounded/tech_tents_2.png": "6a829a79992e340ee911ca2fd528f134",
"assets/assets/images/grounded/dgt.png": "bf9784952db4f8b85e9b37957b228bae",
"assets/assets/images/grounded/master_class_graffiti_active.png": "af26f077bfa7628665a1ed2ca043e771",
"assets/assets/images/grounded/unost_active.png": "f506b2b0f9033e8df971810b05f257d0",
"assets/assets/images/grounded/unost.png": "95bd21131f10311eb5300ed172695b7a",
"assets/assets/images/grounded/nochwear.png": "a9bebfd7160990083b67d939abb3353e",
"assets/assets/images/grounded/eco_lounge_naturalist_active.png": "d57696c58b85b487ab01f95d5df82e0a",
"assets/assets/images/grounded/tears_of.png": "ad2504f3df913dac441171706c83cc99",
"assets/assets/images/grounded/basketball.png": "666486fd7b6f171691c43884c4fb28f1",
"assets/assets/images/grounded/breakdance.png": "51225b5817fef86b7646edaf5aaf0369",
"assets/assets/images/grounded/go_hard_active.png": "ccb6cc36ff8a5bcc2d64d00ad4f368b5",
"assets/assets/images/grounded/ic_sport.svg": "48b3935f7b1a349c6a993c2911231765",
"assets/assets/images/grounded/ic_14.svg": "1c36a81df967c8164726938433bdc633",
"assets/assets/images/grounded/ciay_active.png": "f62b2db920c5c08a235f029d114540e8",
"assets/assets/images/grounded/wc.png": "f29aba386c8ea07b083cd83ce834ad53",
"assets/assets/images/grounded/press.png": "b32885b9460668ac2f9bebdec64fccae",
"assets/assets/images/grounded/trash.png": "c89a8a5ee4ff499a11d4102520322368",
"assets/assets/images/grounded/ace_of_ace_active.png": "93b3be3011b30fb6f5868f285085b75c",
"assets/assets/images/grounded/wc_2.png": "1ec7644ec02e4c89352fd12daa684d0e",
"assets/assets/images/grounded/market.png": "00df79dca579f02dbdda61f0703953bc",
"assets/assets/images/grounded/foodcourt_2.png": "8cdeb6e961d2673c6fea82c9660526c8",
"assets/assets/images/grounded/master_class_graffiti.png": "d80df49f2ec7ef3dee966ca3377fcc0e",
"assets/assets/images/grounded/acr_active.png": "7f0601871e2028c0ba67e446a41d335c",
"assets/assets/images/grounded/evacuation_gates_2_active.png": "25ff2f16fb57b78f3db47e6c5bdf8e56",
"assets/assets/images/grounded/stadium_lugniki_colored.png": "8ab96eee77ed08f79bdc54d36a94b0a8",
"assets/assets/images/grounded/lounge_zone.png": "bde8282798f5fffbaf9b4cd247eecab9",
"assets/assets/images/grounded/tech_tents_active.png": "875c86b2b292d0fa26a1e84e639dc964",
"assets/assets/images/grounded/grounded_logo_outline.png": "c3f47950cfaa2117080b752434942c9b",
"assets/assets/images/grounded/lounge_zone_2.png": "9b97b974c489907b580dc560189c9291",
"assets/assets/images/grounded/helios.png": "2971929314a2ca6ef5435ef28bef39d8",
"assets/assets/images/grounded/hospitality_zone.png": "a2fe75002d5123fae1cf9eea7b4da238",
"assets/assets/images/grounded/expo_zone_2.png": "8cb2f3c6a822591c2748141c3d9e935a",
"assets/assets/images/grounded/exhaust.png": "24e36457d176d259776cbf55d7adc70c",
"assets/assets/images/grounded/punkt_e.png": "8365d8bc9491b1978b0ee34908804f32",
"assets/assets/images/grounded/evacuation_gates_active.png": "35641263e89b2bf662fca17a5a9968d8",
"assets/assets/images/grounded/grounded_map.png": "24c65d4ca2dd9e42de4d4029ac8e693b",
"assets/assets/images/grounded/box_office_2_active.png": "a536e4c06e1d504405dfa90512550f35",
"assets/assets/images/grounded/expo_zone_1.png": "0d7c68a5b57c3e3e78be9e8023294c98",
"assets/assets/images/grounded/rich_lounge_active.png": "9b2877a831ad2c8456ddf31e40e5b842",
"assets/assets/images/grounded/tech_tents_2_active.png": "b191557091f6b65ade0ebab169e1a082",
"assets/assets/images/logo_white.png": "247efbcecf2239e73072c9cb4656a680",
"assets/assets/images/poi_text.png": "5df61417d5860eb7593ea2e47e5b9b82",
"assets/assets/images/app_preview.png": "3cb8dfd1ae1c3f998de66e45828624a2",
"assets/assets/images/seeds_complex_logo.png": "9fa1394a9af8687d1be33c0111ad0bc8",
"assets/assets/images/quests_list_tab_left.png": "050f87adf39bddd02189832fe6cb89d3",
"assets/assets/images/ic_protone_coin.png": "11330402460ffc891e0a64096b96933d",
"assets/assets/images/buble_spinner.png": "1a038f75c7a364eab8865e087235ac91",
"assets/assets/images/FailPicture.png": "4d71a9b94bb80ed0152edbd4890471d7",
"assets/assets/images/google_play.png": "cc819e06070f2a4ee625b9ee6b34c9a5",
"assets/assets/images/app_store.png": "ff23dd0f33c4f65844979dfcd090e3c3",
"assets/assets/images/2x/ic_bundle_progress.png": "011e8d56f7550c9282a0d73bc18b457f",
"assets/assets/images/quests_list_tab_right.png": "002f593b4fdd0fe513159bff91d655e5",
"assets/assets/images/bg.jpg": "64d77a2ab37d8b345a27b1c0cb24036c",
"assets/assets/fonts/FS%2520Elliot%2520ProHeavy.otf": "28ea145899f4b2bc757263869ac9cfcd",
"assets/assets/fonts/FS%2520Elliot%2520ProLight.otf": "461edecb598c8fd9a6a73bc49ce874d5",
"assets/assets/fonts/FS%2520Elliot%2520ProRegular.otf": "224a4cbbe48b94f8fa2879f5c9e40a02",
"assets/assets/fonts/FS%2520Elliot%2520ProBold.otf": "daa0ed94fa7fb0e2769ad02310fc6517",
"assets/assets/fonts/FS%2520Elliot%2520ProThin.otf": "064b515e03ee812801ac034cf2e24667",
"assets/assets/fonts/goodtimesrusbycop.otf": "947da259b939e48f70286e79ab509741",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
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
