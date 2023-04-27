type Props = {
	text: string; // The text to display
	size: "mini" | "small" | "medium" | "large"; // The size of the text
	margin?: boolean; // Whether there will be a margin bottom or not
	uppercase?: boolean; // Whether the text will be uppercase or not
};

export default function Title({ text, size, margin, uppercase }: Props) {
	return (
		<div
			className={`font-semibold text-gray-900
      ${size === "mini" ? "text-md" : ""}
      ${size === "small" ? "text-2xl" : ""}
      ${size === "medium" ? "text-3xl" : ""}
      ${size === "large" ? "text-5xl" : ""}
    	${margin ? "mb-4" : ""}
			${uppercase ? "uppercase" : ""}
		`}
		>
			{text}
		</div>
	);
}
