import type { APIRoute } from "astro";
import type { hashed_url } from "../../../types";

const API_KEY = import.meta.env.URL_SHORTENER_API_KEY;
const BASE_URL = import.meta.env.URL_SHORTENER_BASE_URL;

export const POST: APIRoute = async ({ request }) => {
	const body = await request.json();

	const res = await fetch(`${BASE_URL}/hash`, {
		method: "POST",
		headers: {
			"Content-Type": "text/plain",
			apiKey: API_KEY,
		},
		body: encodeURI(body.url),
	});

	const data: hashed_url = await res.json();
	console.log("in api", data);

	return new Response(JSON.stringify(data));
};
