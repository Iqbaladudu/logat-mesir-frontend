import {
	Backdrop,
	Box,
	Button,
	CircularProgress,
	FormControlLabel,
	FormGroup,
	LinearProgress,
	styled,
	Switch,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Done from "../Containers/Register/Done";
import Four from "./Steps/Four";
import One from "./Steps/One";
import Three from "./Steps/Three";
import Two from "./Steps/Two";

const Div = styled("div")(({ theme }) => ({
	...theme.typography.button,
	backgroundColor: theme.palette.background.paper,
	padding: theme.spacing(1),
}));

export interface FormData {
	first_name: string;
	last_name?: string;
	email: string;
	kekeluargaan: string;
	address: string;
	phone: string;
	classType: "online" | "offline" | "private" | string;
	paymentMethod: "COD" | "Transfer" | string;
}

const EventRegister = () => {
	const [loading, setLoading] = useState(false);
	const [succes, setSuccess] = useState(false);
	const [isDataValid, setIsDataValid] = useState(false);
	const [progress, setProgress] = useState(25);
	const [page, setPage] = useState(0);
	const [formData, setFormData] = useState<FormData>({
		first_name: "",
		last_name: "",
		email: "",
		kekeluargaan: "",
		address: "",
		phone: "",
		classType: "",
		paymentMethod: "",
	});

	const FormTitles = ["Informasi Pribadi", "Alamat", "Kontak", "Lain-lain"];

	const handleNext = () => {
		setPage((i) => i + 1);
		setProgress((i) => i + 25);
	};

	const whileSuccess = () => {
		if (loading && page === FormTitles.length - 1) {
			return true;
		} else if (loading === false && page === FormTitles.length - 1) {
			setSuccess(true);
			return false;
		}
	};

	const handleSubmit = async () => {
		await setLoading(true);
		await axios
			.post(
				"https://api.steinhq.com/v1/storages/6262deffbca21f053e8d560f/Sheet1",
				[
					{
						first_name: formData.first_name,
						last_name: formData.last_name,
						kekeluargaan: formData.kekeluargaan,
						address: formData.address,
						email: formData.email,
						phone: formData.phone,
						classType: formData.classType,
						paymentMethod: formData.paymentMethod,
					},
				]
			)
			.then((_res) => setLoading(false))
			.catch((err) => console.log("error", err))
			.then(() => whileSuccess());
	};

	const PageDisplay = () => {
		if (page === 0) {
			return <One formData={formData} setFormData={setFormData} />;
		} else if (page === 1) {
			return <Two formData={formData} setFormData={setFormData} />;
		} else if (page === 2) {
			return <Three formData={formData} setFormData={setFormData} />;
		} else {
			return <Four formData={formData} setFormData={setFormData} />;
		}
	};

	const handleValidation = () => {
		if (
			formData.first_name !== "" &&
			formData.email !== "" &&
			formData.phone !== "" &&
			formData.address !== "" &&
			formData.kekeluargaan !== "" &&
			formData.classType !== "" &&
			formData.paymentMethod !== ""
		) {
			setIsDataValid(true);
		} else {
			setIsDataValid(false);
		}
	};

	return (
		<>
			{!succes ? (
				<Done />
			) : (
				<div className="h-screen w-screen flex flex-col items-center justify-center bg-blue-core">
					<Div className="header my-3 text-lg rounded w-[200px] xl:w-[300px] text-center font-bold text-blue-secondary">
						Daftar Kursus
					</Div>
					<Box className="flex justify-center items-center w-[85%] md:w-[60%] lg:w-[350px] h-[450px] lg:h-[50%] flex-wrap rounded-sm xl:rounded-sm gap-5 bg-yellow-lm flex-col shadow-[0_8px_6px_rgba(0,0,0,0.32)]">
						<Backdrop
							sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
							open={loading}
							className="flex justify-center items-center"
						>
							<CircularProgress color="success" />
						</Backdrop>
						<div className="flex flex-col gap-5">
							<Div className="header my-3 text-sm rounded text-center">
								{FormTitles[page]}
							</Div>
							<div className="body">{PageDisplay()}</div>
							{page === FormTitles.length - 1 && (
								<FormGroup className="text-blue-secondary">
									<FormControlLabel
										control={<Switch onChange={handleValidation} />}
										label="Bismillah"
									/>
								</FormGroup>
							)}
							<div className="footer w-auto flex justify-between">
								<Button
									variant="outlined"
									className="bg-white hover:bg-white"
									disabled={page === 0}
									onClick={() => {
										setPage((i) => i - 1);
										setProgress((i) => i - 25);
									}}
								>
									Prev
								</Button>
								<Button
									variant="outlined"
									className="bg-white hover:bg-white"
									disabled={!isDataValid && page === FormTitles.length - 1}
									onClick={() => {
										page === FormTitles.length - 1 ? handleSubmit() : handleNext();
										handleValidation();
									}}
								>
									{page === FormTitles.length - 1 ? "Daftar" : "Next"}
								</Button>
							</div>
							<LinearProgress
								value={progress}
								variant="determinate"
								className="my-5"
							/>
						</div>
					</Box>
				</div>
			)}{" "}
		</>
	);
};

export default EventRegister;
