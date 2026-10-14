/* RPS 欧途 PWA build 5e7ebbe76df7 */
const BUILD_ID = "5e7ebbe76df7";
const APP_CACHE = `rps-outu-app-${BUILD_ID}`;
const RUNTIME_CACHE = `rps-outu-runtime-${BUILD_ID}`;
const CACHE_PREFIX = 'rps-outu-';
const PRECACHE_URLS = [
  "/",
  "/offline.html",
  "/manifest.webmanifest",
  "/brand/apple-touch-icon.png",
  "/brand/pwa-icon-192.png",
  "/brand/pwa-icon-512.png",
  "/brand/pwa-icon-maskable-512.png",
  "/theme-init.js",
  "/assets/CartesianGrid-C5vo1WH3.js",
  "/assets/DailyReview-Byw89lEi.js",
  "/assets/DateCalendarPicker-BnU_ZdDj.js",
  "/assets/GroupedTable-BtkkTzww.js",
  "/assets/InlineHelp-CSOTIqIq.js",
  "/assets/LineChart-Dj7-leYo.js",
  "/assets/MobileHeaderModules-qiFG3kNS.js",
  "/assets/NewsPanel-C1rgmiaM.js",
  "/assets/Settings-DEQiYN26.js",
  "/assets/ShareButton-Dl62-EM6.js",
  "/assets/SortableHeader-DsmgEYPN.js",
  "/assets/StockIdentityTable-CIuJ3rWr.js",
  "/assets/StockTableCells-mfceqReB.js",
  "/assets/UniverseSelectors-BrN00CWu.js",
  "/assets/WatchlistModal-ZYFdDdV7.js",
  "/assets/arrow-right-C_4Fuxra.js",
  "/assets/book-open-CENTymVt.js",
  "/assets/calendar-days-jl6TOM3U.js",
  "/assets/chevron-right-_kTsbzG8.js",
  "/assets/download-Cu53UHxB.js",
  "/assets/external-link-DModLFdE.js",
  "/assets/generateCategoricalChart-lvkhWbYm.js",
  "/assets/index-47ATc6WS.css",
  "/assets/index-DzPXCYgc.js",
  "/assets/industryDataContext-Bp21omUu.js",
  "/assets/industryNav-DXJJ8s6U.js",
  "/assets/live-row-quotes-DbzrTzhE.js",
  "/assets/publicDisclosure-c273Y0KF.js",
  "/assets/sparkles-C_Do60Ad.js",
  "/assets/stockNav-CQ6MHHLs.js",
  "/assets/table-BS_nWqYb.js",
  "/assets/trash-2-IlL5XxNQ.js",
  "/assets/useRouteViewState-D8LQW5YC.js"
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(APP_CACHE).then((cache) => cache.addAll(PRECACHE_URLS)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names
      .filter((name) => name.startsWith(CACHE_PREFIX) && name !== APP_CACHE && name !== RUNTIME_CACHE)
      .map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

async function networkFirstNavigation(request) {
  try {
    const response = await fetch(request);
    const requestUrl = new URL(request.url);
    const isHomeHtml = requestUrl.pathname === '/'
      && (response.headers.get('content-type') || '').toLowerCase().includes('text/html');
    if (response.ok && isHomeHtml) {
      const cache = await caches.open(RUNTIME_CACHE);
      await cache.put('/', response.clone());
    }
    return response;
  } catch {
    return (await caches.match('/')) || (await caches.match('/offline.html'));
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) {
    const cache = await caches.open(RUNTIME_CACHE);
    await cache.put(request, response.clone());
  }
  return response;
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || url.pathname.startsWith('/api/')) return;

  if (request.mode === 'navigate') {
    event.respondWith(networkFirstNavigation(request));
    return;
  }

  if (['script', 'style', 'image', 'font', 'manifest'].includes(request.destination)) {
    event.respondWith(cacheFirst(request));
  }
});
