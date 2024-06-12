const API_KEY = "QLdgvaLD3zOHDF3w6iIEN2X7p18WUeKY";
const BASE_URL = "https://api.apilayer.com/short_url";
const POST = async ({ request }) => {
  const body = await request.json();
  const res = await fetch(`${BASE_URL}/hash`, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
      apiKey: API_KEY
    },
    body: encodeURI(body.url)
  });
  const data = await res.json();
  console.log("in api", data);
  return new Response(JSON.stringify(data));
};

export { POST };
