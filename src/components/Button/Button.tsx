type Props = {
	text?: string; // The text that will be displayed on the button
	type: "primary" | "secondary"; // The type of button
	size: "mini" | "small" | "medium" | "large" | "full"; // The size of the button
	icon?: JSX.Element | null; // The icon that will be displayed on the button
	reverse?: boolean; // The order of elements, like icon and text, are reversed
	action: Function; // The action the button will trigger when clicked
	textColor?: string; // change the text to a specific color
	disabled?: boolean; // disable the button
};

export default function Button({
	text,
	type,
	size,
	icon,
	action,
	reverse,
	textColor,
	disabled,
}: Props) {
	return (
		<button
			className={`
      whitespace-nowrap
        ${
					type === "primary" &&
					size === "small" &&
					"inline-flex items-center justify-center rounded-md border border-transparent bg-[#111827] px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				}
        ${
					type === "primary" &&
					size === "medium" &&
					"inline-flex items-center justify-center rounded-md border border-transparent bg-[#111827] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 "
				}
        ${
					type === "primary" &&
					size === "large" &&
					"inline-flex items-center justify-center w-full rounded-md border border-transparent bg-[#111827] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				}
        ${
					type === "secondary" &&
					size === "mini" &&
					`relative inline-flex items-center rounded-md bg-white px-2 py-2 text-xs font-semibold leading-1 ${
						textColor ? textColor : "text-gray-900"
					} ring-1 ring-inset ring-gray-300 hover:ring-gray-400`
				}
        ${
					type === "secondary" &&
					size === "small" &&
					`relative inline-flex items-center rounded-md bg-white px-3 py-3 text-sm font-semibold leading-4 ${
						textColor ? textColor : "text-gray-900"
					} ring-1 ring-inset ring-gray-300 hover:ring-gray-400`
				}
        ${
					type === "secondary" &&
					size === "medium" &&
					"relative inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
				}
        ${
					type === "secondary" &&
					size === "large" &&
					"relative inline-flex w-full items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
				}
        ${reverse ? "flex-row-reverse" : null}
        ${disabled ? "bg-gray-300 hover:bg-gray-300" : null}
			`}
			onClick={() => {
				if (!disabled) action();
			}}
		>
			{icon && (
				<i className={`${text ? `${reverse ? "ml-2" : "mr-2"}` : ""}`}>
					{icon}
				</i>
			)}
			{text && <span>{text}</span>}
		</button>
	);
}
