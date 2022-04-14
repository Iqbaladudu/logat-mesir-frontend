import axios from "axios";
import type { FormInputs as LoginInput } from "./interfaces";
import type {
	SubmitHandler,
	UseFormProps,
	UseFormStateReturn,
} from "react-hook-form";
import { useForm } from "react-hook-form";
import useSWR from "swr";

const fetcher = (url: string) => axios.post(url).then((res) => res.data);

export const useComponentLogic = () => {
	const { data, error } = useSWR("");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginInput>();

	const onSubmit: SubmitHandler<LoginInput> = (data) => {
		console.log("data::", data);
	};

	return {
		register,
		handleSubmit,
		onSubmit,
		errors,
	};
};
