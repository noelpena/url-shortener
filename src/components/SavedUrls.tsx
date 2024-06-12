import { useEffect, useState } from "react";
import type { hashed_url } from "../types";
import "../styles/savedUrls.css";

type SavedUrlsProps = {
	urlData: hashed_url[];
	handleUrlDataChange: Function;
};

export default function SavedUrls({
	urlData,
	handleUrlDataChange,
}: SavedUrlsProps) {
	const [clickedBtn, setClickedBtn] = useState<string | null>(null);

	function handleBtnClick(hash: string) {
		setClickedBtn(hash);
		setTimeout(() => removeBtnClick(), 3000);

		const selectedBtn = urlData.find((data) => data.hash === hash);
		if (selectedBtn) {
			navigator.clipboard.writeText(selectedBtn.short_url);
		}
	}

	function removeBtnClick() {
		setClickedBtn(null);
	}

	return (
		<div id="saved-urls-wrap">
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
