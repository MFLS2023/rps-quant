export async function onRequest(context) {
  const url = new URL(context.request.url);
  const path = url.pathname;
  const searchParams = url.searchParams;
  let date = searchParams.get('date') || searchParams.get('trade_date') || '2026-10-14';

  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': '*'
  };

  if (context.request.method === 'OPTIONS') {
    return new Response(null, { headers });
  }

  async function getStaticJson(filePath, defaultValue = {}) {
    try {
      const assetUrl = new URL(filePath, url.origin);
      const res = await context.env.ASSETS.fetch(assetUrl);
      if (res.ok) {
        return await res.json();
      }
    } catch (e) {}
    return defaultValue;
  }

  const bundle = await getStaticJson(`/data/raw_json/${date}.json`, {});

  let respData = null;

  if (path === '/api/auth/me') {
    respData = await getStaticJson('/data/extra_intelligence/auth_me.json', { user: { id: "1", name: "Guest" } });
  } else if (path === '/api/review/status') {
    respData = { running: false, last_run: null, last_result: null, retry_count: 0, step: null };
  } else if (path === '/api/tasks/data-status') {
    respData = await getStaticJson('/data/extra_intelligence/data_status.json', {});
  } else if (path === '/api/tasks/status/today') {
    respData = { status: "completed", running: false };
  } else if (path === '/api/stocks/badges') {
    respData = await getStaticJson('/data/extra_intelligence/stocks_badges.json', {});
  } else if (path === '/api/market/statistics-live') {
    respData = await getStaticJson('/data/extra_intelligence/statistics_live.json', {});
  } else if (path === '/api/market/index-quotes') {
    respData = await getStaticJson('/data/extra_intelligence/index_quotes.json', {});
  } else if (path === '/api/market/intraday-pulse') {
    respData = await getStaticJson('/data/extra_intelligence/intraday_pulse.json', {});
  } else if (path === '/api/market/session-status') {
    respData = { date, intraday: false, limit_up_live_available: true, server_time: "15:00:00" };
  } else if (path === '/api/review/dates') {
    const idx = await getStaticJson('/data/index_dates.json', { dates: [] });
    let dates = idx.dates || [];
    if (!dates.includes('2026-10-14')) dates = ['2026-10-14', ...dates];
    respData = { dates, market_only_dates: [] };
  } else if (path === '/api/review/daily') {
    respData = bundle.daily_review || {};
    const midday = await getStaticJson('/data/extra_intelligence/review_midday.json', null);
    if (midday) respData.midday = midday;
  } else if (path === '/api/review/midday') {
    respData = await getStaticJson('/data/extra_intelligence/review_midday.json', {});
  } else if (path === '/api/market/limit-up-ladder') {
    respData = bundle.limit_up_ladder || {};
  } else if (path === '/api/market/overview') {
    respData = bundle.market_overview || {};
  } else if (path === '/api/market/promotion-rates') {
    respData = bundle.promotion_rates || {};
  } else if (path === '/api/stats/industry-rps') {
    respData = bundle.industry_rps || {};
  } else if (path === '/api/stats/concept-rps') {
    respData = bundle.concept_rps || {};
  } else if (path === '/api/stocks/fund_flow/batch') {
    respData = { items: {} };
  } else if (path === '/api/stocks/live-quotes') {
    const codes = (searchParams.get('codes') || '').split(',');
    const quotes = {};
    for (const c of codes) {
      if (c) quotes[c] = { code: c, price: 0.0, pct_change: 0.0, volume: 0, amount: 0 };
    }
    respData = { quotes, items: Object.values(quotes) };
  } else if (path === '/api/market/limit-up-replay' || path === '/api/market/limit-up-live') {
    respData = await getStaticJson('/data/extra_intelligence/market_limit_up_replay_latest.json', { groups: [], total: 0 });
  } else if (path === '/api/market/lhb') {
    respData = await getStaticJson('/data/extra_intelligence/market_lhb_latest.json', { items: [] });
  } else if (path === '/api/market/turnover-top') {
    respData = await getStaticJson('/data/extra_intelligence/market_turnover_top.json', { items: [] });
  } else if (path === '/api/market/high_stocks') {
    respData = await getStaticJson('/data/extra_intelligence/market_high_stocks.json', { items: [] });
  } else if (path === '/api/vcp/strategy-dates') {
    respData = { dates: [date] };
  } else {
    const cleanPath = path.replace('/api/', '').replace(/\//g, '_');
    respData = await getStaticJson(`/data/extra_intelligence/${cleanPath}.json`, {});
  }

  return new Response(JSON.stringify(respData), { headers });
}
