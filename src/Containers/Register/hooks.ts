import type { FormInputs as RegisterInput } from "./interfaces";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";

export const useComponentLogic = () => {
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterInput>();

	const onSubmit: SubmitHandler<RegisterInput> = (data) => {
		setIsLoading(true);
		axios
			.post("http://localhost:8000/account/register/", { ...data })
			.then(({ data, status }) => {
				data && setIsLoading(false);
				document.cookie = `logat_mesir_token=${data.token}; path=/`;
				console.log(data);
			})
			.catch((err) => console.log(err));
	};

	return {
		register,
		handleSubmit,
		onSubmit,
		errors,
		isLoading,
	};
};
