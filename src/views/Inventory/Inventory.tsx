import { MdAddBox, MdBlock } from "react-icons/md";
import Title from "../../components/Title/Title";

const products = [
	{
		image:
			"https://d2r9epyceweg5n.cloudfront.net/stores/001/043/122/products/cerveja-skol-600-ml1-c0692bb54601c9f20215676919052972-640-0.jpg",
		name: "Skol",
		volume: "200ml",
		status: "Em Estoque",
		price: "2,00",
	},
	{
		image:
			"https://d2r9epyceweg5n.cloudfront.net/stores/001/043/122/products/cerveja-skol-600-ml1-c0692bb54601c9f20215676919052972-640-0.jpg",
		name: "Skol",
		volume: "200ml",
		status: "Estoque Baixo",
		price: "2,00",
	},
	{
		image:
			"https://d2r9epyceweg5n.cloudfront.net/stores/001/043/122/products/cerveja-skol-600-ml1-c0692bb54601c9f20215676919052972-640-0.jpg",
		name: "Skol",
		volume: "200ml",
		status: "Sem Estoque",
		price: "2,00",
	},
];

export default function Inventory() {
	return (
		<div className="px-4 sm:px-6 lg:px-8">
			<div className="sm:flex sm:items-center">
				<div className="sm:flex-auto">
					<Title text={"Estoque"} size={"small"} />
				</div>
				<div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
					<button
						type="button"
						className="block px-3 py-2 text-sm font-semibold text-center text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Novo Produto
					</button>
				</div>
			</div>
			<div className="flow-root mt-8">
				<div className="px-4 -mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle bg-white border rounded-lg sm:px-6 lg:px-8">
						<table className="min-w-full divide-y divide-gray-300">
							<thead>
								<tr>
									<th
										scope="col"
										className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0"
									>
										Produto
									</th>
									<th
										scope="col"
										className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
									>
										Tamanho
									</th>
									<th
										scope="col"
										className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
									>
										Status
									</th>
									<th
										scope="col"
										className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
									>
										Preço Unitário
									</th>
									<th
										scope="col"
										className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
									>
										Ações
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200 ">
								{products.map((product, index) => (
									<tr key={index}>
										<td className="py-5 pl-4 pr-3 text-sm whitespace-nowrap sm:pl-0">
											<div className="flex items-center justify-center">
												<div className="flex-shrink-0 h-11 w-11">
													<img
														className="rounded-full h-11 w-11"
														src={product.image}
														alt=""
													/>
												</div>
												<div className="ml-4">
													<div className="font-medium text-gray-900">
														{product.name}
													</div>
												</div>
											</div>
										</td>
										<td className="px-3 py-5 text-sm text-center text-gray-500 whitespace-nowrap">
											<div className="text-gray-900">{product.volume}</div>
										</td>
										<td className="px-3 py-5 text-sm text-center text-gray-500 whitespace-nowrap">
											<span
												className={`inline-flex items-center px-2 py-1 text-xs font-medium
											${
												product.status === "Em Estoque"
													? "text-green-700 rounded-md bg-green-50 ring-1 ring-inset ring-green-600/20"
													: ""
											}
											${
												product.status === "Estoque Baixo"
													? "text-yellow-700 rounded-md bg-yellow-50 ring-1 ring-inset ring-yellow-600/20"
													: ""
											}
											${
												product.status === "Sem Estoque"
													? "text-red-700 rounded-md bg-red-50 ring-1 ring-inset ring-red-600/20"
													: ""
											}
											`}
											>
												{product.status}
											</span>
										</td>
										<td className="px-3 py-5 text-sm text-center text-gray-500 whitespace-nowrap">
											{product.price}
										</td>
										<td className="relative flex items-center justify-around py-5 pl-3 pr-4 text-sm font-medium text-right text-indigo-500 whitespace-nowrap sm:pr-0">
											<MdAddBox
												size={25}
												onClick={() => null}
												className="hover:cursor-pointer"
											/>
											<MdBlock
												size={25}
												onClick={() => null}
												className="hover:cursor-pointer"
											/>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
