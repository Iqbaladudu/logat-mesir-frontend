import { useComponentLogic } from "./hooks";
import { REG_EXP } from "../../constants/constants";
import Container from "../../Components/Container/Container";
import Card from "../../Components/Card/Card";
import LoginAvatar from "/public/loginAvatar.svg";
import Image from "next/image";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";

const Register = () => {
	const { register, handleSubmit, onSubmit, errors } = useComponentLogic();

	return (
		<section className="overflow-hidden">
			<Container
				width="w-screen"
				height="h-screen"
				flex="flex justify-center items-center text-blue-secondary"
			>
				<Card
<<<<<<< HEAD
					className="w-[500px] h-[800px] rounded-[30px] gap-4 bg-yellow-lm flex-col shadow-[0_8px_6px_rgba(0,0,0,0.32)]"
=======
					className="flex w-[500px] h-[850px] rounded-[30px] gap-4 bg-yellow-lm flex-col shadow-[0_8px_6px_rgba(0,0,0,0.32)]"
>>>>>>> responsive-web
					headerText="Masuk"
					headerStyle="text-blue-secondary text-[36px] leading-[54px] font-bold"
				>
					<div className="flex justify-center">
						<Image src={LoginAvatar} height={84} width={84} alt="" />
					</div>
					<div>
						<form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
							<Input
								register={register}
								errors={errors}
								required={{ value: true, message: "Nama harus diisi." }}
								label="Nama Depan"
								type="text"
								name="first_name"
<<<<<<< HEAD
								placeholder="Masukkan alamat email"
=======
								placeholder="Muhammad"
>>>>>>> responsive-web
								className="mb-5 flex flex-col items-center sm:items-start sm:flex-none"
							/>
							<Input
								register={register}
								errors={errors}
								label="Nama Tengah"
								type="text"
								name="middle_name"
<<<<<<< HEAD
								placeholder="Masukkan alamat email"
=======
								placeholder=""
>>>>>>> responsive-web
								className="mb-5 flex flex-col items-center sm:items-start sm:flex-none"
							/>
							<Input
								register={register}
								errors={errors}
								label="Nama Belakang"
								type="text"
								name="last_name"
<<<<<<< HEAD
								placeholder="Masukkan alamat email"
=======
								placeholder="Iqbal"
>>>>>>> responsive-web
								className="mb-5 flex flex-col items-center sm:items-start sm:flex-none"
							/>
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
<<<<<<< HEAD
								placeholder="Masukkan alamat email"
=======
								placeholder="iqbal.adudu@blamail.com"
>>>>>>> responsive-web
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

<<<<<<< HEAD
							<a href="#" className="font-semibold mt-8 mb-4 hover:underline">
=======
							<a href="#" className="font-semibold mt-3 mb-4 hover:underline">
>>>>>>> responsive-web
								Lupa kata sandi?
							</a>

							<Button
								type="submit"
								label="Masuk"
								className="btn w-[278px] h-[67px] shadow-[0_5px_7px_rgba(0,0,0,0.25)] rounded-[20px] leading-[54px] mx-auto"
							/>
						</form>
					</div>
				</Card>
			</Container>
		</section>
	);
};

export default Register;
