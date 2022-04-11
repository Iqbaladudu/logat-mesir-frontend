import { useComponentLogic } from "./hooks";
import { REG_EXP } from "../../constants/constants";
import Container from "../../Components/Container/Container";
import Card from "../../Components/Card/Card";
import LoginAvatar from "/public/loginAvatar.svg";
import Image from "next/image";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";

import Multistep from "../../Components/Multistep/Multistep";
import { useState } from "react";

const Register = () => {
	const { register, handleSubmit, onSubmit, errors } = useComponentLogic();

	return (
		<section className="overflow-hidden">
			<Container
				width="w-screen"
				height="h-screen"
				flex="flex justify-center items-center text-blue-secondary"
			>
				<div>
					<form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
						<Multistep>
							<div>
								<Input
									register={register}
									errors={errors}
									required={{ value: true, message: "Nama harus diisi." }}
									label="Nama Depan"
									type="text"
									name="first_name"
									placeholder="Muhammad"
									className="mb-5 flex flex-col items-center sm:items-start sm:flex-none"
								/>
								<Input
									register={register}
									errors={errors}
									label="Nama Tengah"
									type="text"
									name="middle_name"
									placeholder=""
									className="mb-5 flex flex-col items-center sm:items-start sm:flex-none"
								/>
								<Input
									register={register}
									errors={errors}
									label="Nama Belakang"
									type="text"
									name="last_name"
									placeholder="Iqbal"
									className="mb-5 flex flex-col items-center sm:items-start sm:flex-none"
								/>
							</div>
							<div className="flex flex-col">
								<Input
									register={register}
									errors={errors}
									required={{ value: true, message: "Alamat email harus diisi." }}
									pattern={{
										value: REG_EXP.email,
										message: "Gunakan format email dengan benar.",
									}}
									label="Email"
									type="email"
									name="email"
									placeholder="Masukkan alamat email"
									className="mb-5 flex flex-col items-center sm:items-start sm:flex-none"
								/>
								<Input
									register={register}
									errors={errors}
									required={{ value: true, message: "Password harus diisi." }}
									label="Kata sandi"
									type="password"
									name="password"
									placeholder="Masukkan kata sandi"
									className="flex flex-col items-center sm:items-start sm:flex-none"
								/>

								<a href="#" className="font-semibold mt-8 mb-4 hover:underline">
									Lupa kata sandi?
								</a>
							</div>
						</Multistep>
					</form>
				</div>
			</Container>
		</section>
	);
};

export default Register;
