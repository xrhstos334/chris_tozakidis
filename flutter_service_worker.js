'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ff61cc37d963e65653cd597702628bbb",
".git/config": "c69989617064f6e5bb12a7ef6e82a5bc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "239b609bd0e71da49a54806b03c960bf",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e3ae9d43e7921ef08e645b4700506490",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "84556db7a1cf51efe7e719c6b6edfba1",
".git/logs/refs/heads/master": "c964d339adaafa20c4215d7c29a087af",
".git/logs/refs/remotes/origin/master": "b5142e8854031dea97fe0f2b957fab8d",
".git/objects/03/ccf8198c": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/0b33d7208e5bffee961bac3e552a128fa7254d": "96b877ac9c0207022deda6e7268509a5",
".git/objects/04/3048da0706d3246cf5697fc23f81a6ec5a6d24": "4e54759b38c569268d547b228fac3c48",
".git/objects/05/59c0f6dbd391208d6720d6b39cac9123925422": "2080d2ea1564ff2203a0d155ca2cc351",
".git/objects/08/1fdba9356557712dfa5be6b659710c32e932ba": "997a182533dd9bd7f852670ac9a6dda0",
".git/objects/0d/ec38dec4a3f8d0b4f839999385f26c5722b491": "7cd50f26fe4eb3ba0329b4dff0e07cdf",
".git/objects/0e/0dcd235c4973becf25f38eb4e5bb26e154c86a": "13e3d699f54c273cb85da397b0df9a2d",
".git/objects/12/0b6f48d5ad2228a59354d3e24e3de192baa553": "d97a2c9ef4e0a729322cf9daaf9ad22b",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/d903d61ce40dd6fc96e869d6ec9e9010051c43": "a86ef3456cedf86fda42ede7d96fabe1",
".git/objects/16/b61cf30788f9a85422466195bcb215503c16c6": "697432f98abe0168f6626599da53d5ee",
".git/objects/21/937cc2e6be4caa7e7b12212ddfa2a79c2a57e4": "adae7429080f8a89006920fd292a8ae2",
".git/objects/27/f530521c2b58d8fb6543a700d48effcc8d3313": "7c63ad6a36a4446b72eb0ed66ea6ef44",
".git/objects/2c/46bf1c7a569b7f172039a18896b9d20cccf084": "33a072d4ae197ad715e797fab14be04b",
".git/objects/2c/aff2224a53afb805132e2f4a565b0f5af4d9b1": "f64b771a6e584d2851d75031ff019130",
".git/objects/31/7d15da1522feb91812d5f0f6d7a1492ac61e39": "de4d524e766b85ef15c8e4995ff18cb2",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3b/0ae292abbee75e7da928be1e8fa40bab2534ab": "71b6ce9cdc29ec466f60206d3817055e",
".git/objects/3f/d7813978ad7a44d6d676645c7e36be0d2a41b2": "c7f865667c82b1fdf6429cb8f2e4add1",
".git/objects/41/42cb2aad7507e7b81b89e06a35f30e43b3b732": "8fd60b3a62a76f10d852d2e7cecaac4b",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4d/c39271cf1062331f242d4f89971586e8069267": "2fb02b91e29e4cebd1e2cac80269abd1",
".git/objects/4f/8baac8e7f631e535fa1b7d1cff173840adceb6": "bf8dc3b0c9284b5f0db8baad90557fd4",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/57/8ffc38e206aa5bb2f4265d1c7477e749098f24": "b1ed51ebf23ea48d67a19ce3d88ab994",
".git/objects/5c/b79aad2139dc8e247b4453f1184551d74ae8e7": "fa5484f95fb81e7243258faae944005f",
".git/objects/62/a8f40ddee64056ab196e2782a26b9cdb24d49d": "27473334e0f01bba68b7855c6e8bb40c",
".git/objects/65/5d32c8ba622067057ac8add8b7010c4e1682cb": "dc574beb2830f3613b8b4891f3c67188",
".git/objects/66/21df32815c62ab96ca0b96931fc2202c2e6912": "e5167549c7c2b09ea066e88176f11b30",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6c/e9ffb2619f6b05c67770e2eea40624557bfc79": "f5e195cbccc06212443286763322eafd",
".git/objects/71/7efbd6cd8e58a67e7dc214f1f100ab3b57e1d8": "6f807fcfb41e620b0ac34c4a1230891c",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/d2833bf44c4ad1656c67d4c307231e561b35eb": "5006f366d7eed6e3d50d0b702394d8c9",
".git/objects/84/692f677a9a1abde54862c8e97724389a3fc1c4": "f6f6fc60a4bf63ef3f3dbaa6ac28bc06",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/86ff4c8717d3c7ad3b4d56d70ddc757600b877": "3adc5f4fb229c5ee0ec10a0f01ae2502",
".git/objects/8a/46807747671484008a69ff852945f467193660": "2154a695b81b555081e378ad93bb29a5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/fde123b728c5a0820cc4db1e7886719572c24a": "eb37f5c2727d56df304e52f98f6ee40e",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/d07f26c08763ee4aa0bb594b4a8c561abef403": "bf90829405400fa49aee2c7540a5f4b6",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ae/746e50d202fdf8fa4b2f284f6a368f5d68898d": "9c5cb4174d914651540e79b7089b3b8b",
".git/objects/b0/f890ecdbe4b8ffeec82135de9dab5c330e13e7": "be37970ba557cc5fcb541e7d739d382e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/9165f0f96d706eb8bde196c72a14917bb60206": "0e965d35907e8c34a34d98c46f22dd00",
".git/objects/bf/cfced3eb9d3cbd8e59e398e44e826d06b0ff7e": "84501d1de646907881b83e9609c17052",
".git/objects/cc/db5834898aac610a36c8356e92657f73603960": "d65fe209336583bd38c7db9c3a21a3d3",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cf/f6e194b258c4938aa03433cdcc2e7e9c4d95b3": "6a5f6bc11395923a4ee52f90eee15a10",
".git/objects/d1/76872b64726073252ddbd0649801b1500937db": "a955167c8a33b0a764c370226ad9f0d4",
".git/objects/d5/0c46437f87a0ed5f50655b76d2698f55737b15": "083c006dc9203ee01afef6b7d5a2c904",
".git/objects/d5/2b28d684935e73326a381044f8929266cb5469": "24078887a705abc57aae405dfd51fe1a",
".git/objects/d6/2f13cd6e404919a0ec4abd86c27f64e7b01fbe": "c888336c03f2d90b9ed960955afde6c5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/12530f6a5f9e3cc92f47e9d8794b42d50d2030": "51a308948b0a852872687eeab415800b",
".git/objects/e1/2e6ebbe1fc1ebf278b8dc9adf1014078856f89": "9387fbf5a11a45b5571a9ec2b17efe50",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/5ca45f4a52e9d044dffc9f617d26d1157e513c": "cd33813ec247e436316e4ecd38c87076",
".git/objects/e9/772d6e832d1bc482aa38ac19d066da36902898": "fd09224955cc85e7b47b60c9083ab5ad",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/fb712f1b58aa36269166cc9153c48f7fa2d277": "1b5784df5359e0f94a051eaf4b717306",
".git/objects/ef/dd1ef698f9cda46104ff61e48d445038c7c0fd": "2fef784bde54cdc765aaa7385ad7449b",
".git/objects/f6/daa44755c0d9d4b6023d8cb032648c529d52da": "c45d33c4e4006363a3121bcb803727b7",
".git/objects/f8/ec15bfe0d160625757c418d9f07a47478eec06": "c75737d8f106c046d6a10dd0c810f2db",
".git/refs/heads/master": "5d237d5a89065b595781a59a3b279895",
".git/refs/remotes/origin/master": "5d237d5a89065b595781a59a3b279895",
"assets/AssetManifest.json": "ed103c4ba4fda65b67be8908d66c08ac",
"assets/assets/images/home_page.png": "1fc39ab35f55aceff26472e21ca67f79",
"assets/assets/translations/el-GR.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/assets/translations/en-US.json": "16450068a58d20d2057e0ecfcefc55dd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "d7eb4f33c111a5d58e1a0279640d0cfc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/mixpanel_flutter/assets/mixpanel.js": "5c717055b6683529243c292ab78aa797",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fb73a8267219fda8fe054d3dad0b2cab",
"/": "fb73a8267219fda8fe054d3dad0b2cab",
"main.dart.js": "9ec0ed92d8740783735b21e11bbb20ed",
"manifest.json": "379e01004447bd7d44f112ec6e73d6dd",
"version.json": "efacc520a9a4a9393985fe4e1688f17f"
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
