import { useEffect, useState } from "react";
import "../styles/savedUrls.css";

const API_KEY = import.meta.env.URL_SHORTENER_API_KEY;
const BASE_URL = import.meta.env.URL_SHORTENER_BASE_URL;
const LOCAL_STORAGE_PREFIX = "NP_URL_SHORTENER";

const fakedata = [
	{
		long_url: "https://google.com",
		short_url: "https://ge.com",
		hash: "CHdDL1",
		created_at: "2022-10-18T04:43:18.000000Z",
	},
	{
		long_url: "https://youtube.com",
		short_url: "https://ge.com",
		hash: "CHdDL2",
		created_at: "2024-10-18T04:43:18.000000Z",
	},
	{
		long_url: "https://bing.com",
		short_url: "https://ge.com",
		hash: "CHdDL3",
		created_at: "2023-10-18T04:43:18.000000Z",
	},
];

// NEXT STEPS:
// - add error state to input
// - make input call API and add item to state
// - possible add url_input to this component or just make it a react component that holds the state and passes to this component

export default function SavedUrls() {
	const [clickedBtn, setClickedBtn] = useState(null);
	const [urlData, setUrlData] = useState([]);

	useEffect(() => {
		const savedData = localStorage.getItem(LOCAL_STORAGE_PREFIX);
		if (savedData) {
			setUrlData(JSON.parse(localStorage.getItem(LOCAL_STORAGE_PREFIX)));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_PREFIX, JSON.stringify(urlData));
	}, [urlData]);

	// const res = await fetch(`${BASE_URL}/hash`, {
	// 	method: "POST",
	// 	headers: {
	// 		"Content-Type": "text/plain",
	// 		apiKey: API_KEY,
	// 	},
	// 	body: "https://google.com",
	// });

	// const data = await res.json();
	// console.log(data);

	function handleBtnClick(hash) {
		setClickedBtn(hash);
		setTimeout(() => removeBtnClick(), 3000);

		const selectedBtn = urlData.find((data) => data.hash === hash);
		navigator.clipboard.writeText(selectedBtn.short_url);
	}

	function removeBtnClick() {
		setClickedBtn(null);
	}

	return (
		<div
			id="saved-urls-wrap"
			style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
		>
			{urlData.map((data) => (
				<article key={data.hash}>
					<p style={{ margin: 0, padding: 0 }}>{data.long_url}</p>
					<div id="link_btn_wrap">
						<span>{data.short_url}</span>

						<button
							className={
								clickedBtn === data.hash ? "btn-clicked" : ""
							}
							onClick={() => handleBtnClick(data.hash)}
							type="button"
						>
							{clickedBtn === data.hash ? "Copied!" : "Copy"}
						</button>
					</div>
				</article>
			))}
		</div>
	);
}
