import Button from "../Button/Button";
import TableCard from "../TableCard/TableCard";
import Title from "../Title/Title";

const placeholder = () => {
	return null;
};

const activeTables = [
	{
		name: "Kristen Chenowith",
	},
	{
		name: "Idina Mendzel",
	},
	{
		name: "Ben Platt",
	},
	{
		name: "Lin-Manuel Miranda",
	},
	{
		name: "Jennifer Hudson",
	},
	{
		name: "Lea Salonga",
	},
];

function TableList() {
	return (
		<div>
			<div className="flex items-center justify-between">
				<Title text={"Mesas Ativas"} size={"small"} />
				<Button
					type={"primary"}
					size={"small"}
					action={placeholder}
					text="Nova Mesa"
				/>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3 h-full overflow-y-scroll">
				{activeTables.map((table) => (
					<TableCard name={table.name} />
				))}
			</div>
		</div>
	);
}

export default TableList;
