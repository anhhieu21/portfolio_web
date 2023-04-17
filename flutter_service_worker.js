'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7804eb643eb875d188221832d4ff86c5",
"index.html": "ec449935b6ddc1e4f74c9a2473a7ec1b",
"/": "ec449935b6ddc1e4f74c9a2473a7ec1b",
"main.dart.js": "b5657116279f9a8f10fa96f488b3f05c",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".github/workflows/jekyll-gh-pages.yml": "f65bf70af177060043feb5c82b98bcb0",
"manifest.json": "a46452c5139d40cdd344eefb62887fee",
".git/ORIG_HEAD": "b593dfd03d0100d9862bcf8e51c6e0da",
".git/config": "aa9e45e11f3201cd28460ba82fd7b9c4",
".git/objects/92/047ae9c016b9bd64f3529c1e15c395f229e8b9": "fafd21f89f50aa89967b27738fb40b8f",
".git/objects/92/6ffcef84db19ab6ee178c09d709222758d1e57": "9d2fbcc84764907a7d8874d0eef74e74",
".git/objects/66/6ff6b83cf3b51e73bfbf496afe39a3c3b3b28a": "58482343b41314a5c576148308f722ac",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/69/8b84779a245cbbe87feaa3183954d1f9bb10f1": "f6cbf62886edab8c125811deb0b0063b",
".git/objects/51/fc94b6b6d2a2fa0303011152d284a4e1ca3254": "e0a6803c490918e6efac7b283d292288",
".git/objects/94/79fb9eb9bc9dd15d154c3999ddf58aca357255": "c726ecbd9ac99b4a037fbb6d09ac0c0e",
".git/objects/b2/b6fd47905adb6b14624c9caafe6f68dee657f6": "d524f71bff531048b5733cc8f067e5f9",
".git/objects/be/121cc7c416729817b180a93cfe38470e3844ca": "434c8103bad75fd6299eb4239d7fb665",
".git/objects/be/21e81bcf511f246e42176e40491bbb39bc549e": "6b40f8d11ec09cc5dacbeabc846594ca",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/04b000845b684301a6ace9bb1b506b8db6c5d9": "9ee18ca221cd80fd2a9fe28aab43a4df",
".git/objects/d8/d4ee125552cd9c5f1941b09aad51bd551150bc": "d541dc0e0f14293d893e255115cfec49",
".git/objects/d8/d4d5b9b9ead3c1491f50b72345589574567274": "84a0ea52e77989179462ef249e659898",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/1852bdb54c85ad363e293e703cabb7ab82b0a9": "47293d4281101eb332ced4b26a4e5520",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/979ac8877e2c84ce5672e0c7b831211970ca52": "68e5bec6c899e274811486945170afb6",
".git/objects/f2/ca310ca8d33131624daf00570c7f4d37cd6edc": "cb14232b9b43e5c9f901fd9d52bb71ed",
".git/objects/f2/6484a9a791a6ff6a19e1ecf721ae6441064e93": "4a409896b9c3add0e49b22ccf2270f70",
".git/objects/e3/d47c37d03428e5fb2991c9b1f9a700fe5aaca0": "1a177c7b42963f3c4e2e44272e04bbed",
".git/objects/e3/c7e2baa5dbc9c78f600e8fff8bc85e89afd39d": "475387042fa2b2200081e4284ce80c58",
".git/objects/c8/1f22bcb0f898d9aea0a5744a282b4173659a40": "1d403df11324e7b0f2f7ef6089a00905",
".git/objects/c8/c759e57ebc0976f0e582b98432875a8045f19b": "e8a25343a805b0b239c2b8a2ee0a3a93",
".git/objects/ec/3c47ac86a5418ee7aae4263093e9a20c12dc28": "d0b9e4329acea6d584c8b474142c3a26",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/89/60b571bb344bb95598c940e9d11be4f44e4e0e": "64200079d9eac95a7afb97c864c0e8c7",
".git/objects/89/1d4e6cc54ba4272270f3ea92375668020e2710": "e2ae8aa91b677b5c91f4a54d1e8a0330",
".git/objects/1f/c0a9486f876339bcc0200c9e1e8cb2a2ffcbf1": "25af6ee4d04d59466cce194d23abfc99",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/87/6dfb329601e59c01c237a9986a85c95c579f7d": "4e69dfb1898fb50794320945346b8ebc",
".git/objects/87/9a005791bb2249a227c84d8d1ecbd4ae1a64c4": "c50331cb3804e454b506fba6cb2aecc1",
".git/objects/1a/0ea118a9fd629062695c050faaf49fa67300e8": "f5dd98bce5ee50e49e9fb47b90efca0c",
".git/objects/28/0523a5ecc4547096cb53cd170ab7166fdb6608": "49598355388749f6cbf69062c47eabb1",
".git/objects/17/e60b1283d81ef23a0ade3dd1462fc5ddc248a0": "bcea99aff6934ee0ea6398ba9d08ed2d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/d09cbbb744ee6213821e6e3757cd75c7a0d8ee": "c6c722048abb7a1929b31b3324a510b0",
".git/objects/21/5e33dbb3be51e9117e9ca85d35b3c9f6dd65b6": "bad18d4262bb4fcc2c75ae9fc274184e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/1a93203e57b0b28f49ac4faaacacddb62851ef": "80f59beab6bd16cf652f4108f6274aaf",
".git/objects/6e/ba6309df5e1cc1978cdc8f4a00dd11e4ae9517": "07b620207e0d1fea8c677d47bfc777a0",
".git/objects/36/46a195a221ba01ab9ced7721c2e4bb3dd9c7e6": "4f1b77518e1bc0852b1cd23584de8dfd",
".git/objects/5c/238724b7bc134e4abd778eada57d2f35542ddd": "07a078c044cbc56801dd3674bbffbd1b",
".git/objects/5c/a7324f372d752ea1548e662ff77accea685ffe": "3b1f6eec8627958583869f354fa531be",
".git/objects/91/f4606256a09eba06ac03c37f9f8d18fa687dbf": "c045e1677c180f4574da6816132d5933",
".git/objects/3f/aebadb25bb55fb9ad6e8f05168f81f46bd845d": "c47bb6070a7ae101eecdce5f2ee75bca",
".git/objects/37/c3e2e3f2e288de8c1bcd7f2c56efa45631147e": "c2c7cd591ceae749b1056b8101b959c0",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/99/faac3077730716ae48f402e36d8f74d121f88c": "0915bcec5dec42903e0fe2757612ad00",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/64/89fce7fa85a59700326ccccf46b843c80c2790": "b6f6a8b0ec135ec669c0315cc132f705",
".git/objects/bf/a6acd7d59e098590b91ca6980874953d851326": "c2b20b06bc025b5e4987a1c2ea36f07d",
".git/objects/a9/c25c7578513f881348c81218da4f099c19eead": "b76b62e1a8b92109555b00142db7bb83",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/2d4c42822e07f5198971acf4ee01fd8f0beb6e": "be62101b8cbe2389dcc546709a07b155",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e0/dc0810ed84d3f563c474187f43165fae03b9b9": "1e6fd6eb01de063d8ab5ecd218de8eef",
".git/objects/79/649a6ee5469eca96c882acc2ff492e401afe53": "7481c74dd3145b9917b4fbbce53c1ff6",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/cd41eba299f3da139986f98fa6942ded127a7f": "7eb3cfbdd38bce08303e4d49c112e06a",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/77/a0e22e3360dbbf7fb26410f7039296babc9f61": "88bf3ff855f2fc6a4845f4e9e4d0417a",
".git/objects/1e/8e9616a5b675ed002266049e1d1a8c5354440b": "97188cbac2d0e5f826c0421c19de5e31",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/76/64f943a508f8a141a7465d6c7b35bc3176c16a": "08c1f92274e6ff9a15440dfbbb602583",
".git/objects/1c/da6b8d49ee92d8c78acd4ebae4353120c3842b": "73b7ecc44a5b58c9f5e646a8c4728d4e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "72af1c371351bac66978f2422f37eaec",
".git/logs/refs/heads/master": "931c0d6ad6ba09f197b76adfa91bb5ac",
".git/logs/refs/remotes/origin/master": "0121f5c7b2020f175ff134574a11fab5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "b593dfd03d0100d9862bcf8e51c6e0da",
".git/refs/remotes/origin/master": "b593dfd03d0100d9862bcf8e51c6e0da",
".git/index": "47aa98d46cbb6aadd661c01c4b76c184",
".git/COMMIT_EDITMSG": "a92202ee28bb8f1a3d78af2fc73cba0f",
".git/FETCH_HEAD": "2fb093e4f70098f00091678fa268ad9f",
"assets/AssetManifest.json": "a60d010486fb546cce52e83bd19fde61",
"assets/NOTICES": "88c6c6ce802b78b984d4298a9f7a0d19",
"assets/FontManifest.json": "66b71d2bcd2b436ab06cceee43157084",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "a48ca9e5bcc89fccac32592416234257",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/image/me.jpg": "16ef0eaabd56443c929fd72db5511d65",
"assets/assets/image/hand-hr.svg": "373151e43c86b8ef66aee55008fa131a",
"assets/assets/image/app1.webp": "f3ef2e1ea8855e7b49f083a0fdc19443",
"assets/assets/image/map.jpg": "fa2c10cb46997f3d3438d9883a35769e",
"assets/assets/image/dragonbrigde.webp": "5fb547f0a7b2e3ddc56f4f347e8715cb",
"assets/assets/image/telegram.svg": "a2139d8cac1b451d756c54191ee497be",
"assets/assets/image/linkedin-icon.svg": "699ee0fef0919d5f6f96e9b0a792f02d",
"assets/assets/image/avatar.png": "05df1c8c51dbe91d46575d191dd2d250",
"assets/assets/image/dart.svg": "0f022ef90773b6bcc35fd0c3447a71fe",
"assets/assets/image/facebook.svg": "1b059407eebc3313ee267da79e9ad35d",
"assets/assets/image/app2.webp": "6616605f76e696250d6a8195e2ca6d1b",
"assets/assets/image/background.webp": "41c21df4cb3f5c044c0c7b507c45c813",
"assets/assets/image/hello.svg": "fbdd890617ed6c8b3a3bbdc6b15f6176",
"assets/assets/image/app3.webp": "484af763ee9ed109b1e8896799a99aa1",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
