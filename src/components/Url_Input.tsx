import { useState, useEffect } from "react";
import Button from "./Button.jsx";
import SavedUrls from "./SavedUrls.tsx";

import type { hashed_url } from "../types";
import "../styles/urlInput.css";

const LOCAL_STORAGE_PREFIX = "NP_URL_SHORTENER";

export default function Url_Input() {
	const [inputError, setInputError] = useState(false);
	const [urlData, setUrlData] = useState<hashed_url[]>([]);

	useEffect(() => {
		const savedData = localStorage.getItem(LOCAL_STORAGE_PREFIX);
		if (savedData) {
			handleUrlDataChange(JSON.parse(savedData));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_PREFIX, JSON.stringify(urlData));
	}, [urlData]);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setInputError(false);
		const input = document.querySelector("input");
		if (input) {
			const inputValue = input.value;
			if (inputValue === "" || inputValue === null) {
				setInputError(true);
				return;
			}

			shortenUrl(inputValue);
		}
	}

	async function shortenUrl(inputValue: string) {
		const res = await fetch(`api/hash`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				url: inputValue,
			}),
		});

		const data = await res.json();
		console.log(data);
		setUrlData([data]);
	}

	function handleUrlDataChange(newData: hashed_url[]) {
		setUrlData([...newData]);
	}

	return (
		<section id="url-input">
			<form className="url-input-form" onSubmit={handleSubmit}>
				<div id="url-input-wrap">
					<input
						className={inputError ? "input-error" : ""}
						type="text"
						placeholder="Shorten a link here..."
					/>

					<Button
						type="submit"
						text="Shorten it!"
						has_square_edges={true}
					/>
				</div>
				{inputError && (
					<span id="input-error-text">
						<em>Please add a link</em>
					</span>
				)}
			</form>

			<SavedUrls
				urlData={urlData}
				handleUrlDataChange={handleUrlDataChange}
			/>
		</section>
	);
}
