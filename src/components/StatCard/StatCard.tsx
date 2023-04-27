type Props = {
	name: string;
	value: string;
	key: any;
};

function StatCard({ name, value, key }: Props) {
	return (
		<div key={key} className="px-4 py-6 bg-gray-800 sm:px-6 lg:px-8">
			<p className="text-lg font-medium leading-6 text-gray-400">{name}</p>
			<p className="flex items-baseline mt-2 gap-x-2">
				<span className="text-4xl font-semibold tracking-tight text-white">
					{value}
				</span>
			</p>
		</div>
	);
}

export default StatCard;
