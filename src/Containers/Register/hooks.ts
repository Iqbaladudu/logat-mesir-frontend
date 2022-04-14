import type { FormInputs as RegisterInput } from "./interfaces";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import axios from "axios";

const fetcher = (url: string) => axios.post(url).then((res) => res.data);

export const useComponentLogic = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterInput>();

	const onSubmit: SubmitHandler<RegisterInput> = (data) => {
		console.log("data:", data);
	};

	return {
		register,
		handleSubmit,
		onSubmit,
		errors,
	};
};
