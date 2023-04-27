import { MdOutlineTableBar } from "react-icons/md";
import Button from "../Button/Button";

type Props = {
	name: string;
};

const placeholder = () => {
	return null;
};

function TableCard({ name }: Props) {
	return (
		<div className="flex flex-col items-center justify-between bg-slate-300 h-full min-w-[60px] rounded-lg p-5">
			<div className="rounded-full bg-slate-400 p-2">
				<MdOutlineTableBar size={30} />
			</div>
			<p className=" mt-3 text-center text-sm sm:text-base">{name}</p>
			<p className="text-xs sm:text-sm mt-1">Total: R$4500,00</p>
			<span className="mt-3">
				<Button
					type={"secondary"}
					text="Lançar Venda"
					size={"mini"}
					action={placeholder}
				/>
			</span>
		</div>
	);
}

export default TableCard;
