import type { APIRoute } from "astro";
import type { hashed_url } from "../../../types";

const API_KEY = import.meta.env.URL_SHORTENER_API_KEY;
const BASE_URL = import.meta.env.URL_SHORTENER_BASE_URL;
const API_HOST = import.meta.env.URL_SHORTENER_HOST;

export const POST: APIRoute = async ({ request }) => {
	const body = await request.json();

	let long_url = "";

	if (body) {
		long_url = body.url;
	}

	const api_request_data = JSON.stringify({
		url: long_url,
	});

	const fetch_url = BASE_URL.startsWith("http")
		? new URL(`${BASE_URL}/shorten`)
		: new URL(`https://${BASE_URL}/shorten`);

	try {
		const res = await fetch(fetch_url.href, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-rapidapi-host": API_HOST,
				"x-rapidapi-key": API_KEY,
			},
			body: api_request_data,
		});

		const data = await res.json();
		let return_data: hashed_url;

		if (data) {
			return_data = {
				hash: data.result_url.split("/")[3],
				long_url,
				short_url: data.result_url,
			};

			return new Response(
				JSON.stringify({
					data: return_data,
					error: null,
					success: 1,
				})
			);
		}
	} catch (err) {
		return new Response(
			JSON.stringify({
				data: null,
				error: err,
				success: 0,
			}),
			{ status: 500 }
		);
	}

	return new Response(
		JSON.stringify({
			data: null,
			error: "Could not make it to API request.",
			success: 0,
		}),
		{ status: 500 }
	);
};
