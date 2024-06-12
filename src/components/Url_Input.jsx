import { useState } from "react";
import Button from "./Button.jsx";
import SavedUrls from "./SavedUrls.jsx";

import "../styles/urlInput.css";

export default function Url_Input() {
	const [inputError, setInputError] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		setInputError(false);
		const input = document.querySelector("input");
		const inputValue = input.value;
		if (inputValue === "" || inputValue === null) {
			setInputError(true);
		}
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

			<SavedUrls />
		</section>
	);
}
