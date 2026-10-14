export async function onRequest(context) {
  const url = new URL(context.request.url);
  const assetUrl = new URL('/kaipanla.html', url.origin);
  const res = await context.env.ASSETS.fetch(assetUrl);
  
  return new Response(res.body, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate'
    }
  });
}
