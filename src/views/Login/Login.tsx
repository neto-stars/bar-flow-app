import Logo from "../../assets/logo.png";

export default function Login() {
	return (
		<div className="h-screen bg-gray-800">
			<div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm ">
					<img className="max-w-xs mx-auto" src={Logo} alt="Your Company" />
				</div>

				<div className="p-4 mt-10 border-2 border-white rounded-lg sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" action="#" method="POST">
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-white"
							>
								Usuário
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-white"
								>
									Senha
								</label>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
							>
								Entrar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
