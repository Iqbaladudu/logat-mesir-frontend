import { useComponentLogic } from "./hooks";
import { REG_EXP } from "../../constants/constants";
import Container from "../../Components/Container/Container";
import Card from "../../Components/Card/Card";
import Input from "../../Components/Input/Input";
import Multistep from "../../Components/Multistep/Multistep";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { AppDispatch } from "../../store/store";
import {
	firstName as changeFirstName,
	middleName as changeMiddleName,
	lastName as changeLastName,
	email as changeEmail,
	password as changePassword,
	passwordConfir as changePasswordConfirm,
} from "../../store/registrationReducer";
import { useState } from "react";

const Register = () => {
	const { register, handleSubmit, onSubmit, errors, isLoading } =
		useComponentLogic();
	const dispatch: AppDispatch = useAppDispatch();
	const { firstName, middleName, lastName, email, password, passwordConfirm } =
		useAppSelector(({ registration }) => {
			return { ...registration };
		});

	const handleClick = () => {
		dispatch(changeFirstName("Muhammad"));
		console.log("cek:", firstName);
	};

	return (
		<section className="overflow-hidden bg-blue-core">
			<Container
				width="w-screen"
				height="h-screen"
				flex="flex justify-center items-center text-blue-secondary"
			>
				<Card
					className="w-[350px] h-[550px] sm:w-[500px] sm:h-[577px] flex-wrap rounded-[10px] xl:rounded-[30px] gap-4 bg-yellow-lm flex-col shadow-[0_8px_6px_rgba(0,0,0,0.32)]"
					headerText="Daftar"
					headerStyle="text-blue-secondary text-[36px] leading-[54px] font-bold"
				>
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
									label="Nama Belakang"
									type="text"
									name="last_name"
									placeholder=""
									className="mb-5 flex flex-col items-center sm:items-start sm:flex-none"
								/>
								<Input
									register={register}
									errors={errors}
									label="Username"
									type="text"
									name="username"
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

								<div className="ml-8 sm:ml-0 mt-8 mb-4">
									<a href="#" className="font-semibold hover:underline">
										Lupa kata sandi?
									</a>
								</div>
							</div>
						</Multistep>
					</form>
				</Card>
			</Container>
		</section>
	);
};

export default Register;
