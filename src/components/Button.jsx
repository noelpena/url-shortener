import "../styles/button.css";

export default function Button({
	text,
	type = "button",
	is_small = false,
	has_square_edges = false,
}) {
	is_small = is_small || false;
	has_square_edges = has_square_edges || false;

	let button_class =
		(has_square_edges ? " btn-square" : "") +
		(is_small ? " btn-small" : "");

	return (
		<button type={type} className={button_class}>
			{text}
		</button>
	);
}
