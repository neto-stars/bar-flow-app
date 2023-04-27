import Button from "../../components/Button/Button";
import StatCard from "../../components/StatCard/StatCard";

const stats = [
	{ name: "Vendas do dia", value: "R$405,00" },
	{ name: "Despesas do dia", value: "R$60,00" },
	{ name: "Saldo de Caixa", value: "R$345,00" },
];

export default function Cash() {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="mx-auto max-w-7xl">
				<div className="grid grid-cols-1 gap-2 sm:grid-cols-3 ">
					{stats.map((stat, index) => (
						<StatCard key={index} name={stat.name} value={stat.value} />
					))}
				</div>
			</div>
			<div className="mt-10">
				<Button
					type={"secondary"}
					text={"Fechar Caixa"}
					size={"small"}
					action={() => null}
				/>
			</div>
		</div>
	);
}
