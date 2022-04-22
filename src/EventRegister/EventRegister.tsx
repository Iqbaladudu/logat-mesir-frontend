import {
	Box,
	Button,
	FormControlLabel,
	FormGroup,
	LinearProgress,
	styled,
	Switch,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
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
	middle_name?: string;
	last_name?: string;
	email: string;
	province: string;
	province_id?: string;
	city: string;
	city_id?: string;
	regency: string;
	regency_id?: string;
	district: string;
	district_id?: string;
	kekeluargaan: string;
	address: string;
	phone: string;
}

const EventRegister = () => {
	const [isDataValid, setIsDataValid] = useState(false);
	const [progress, setProgress] = useState(33.33);
	const [page, setPage] = useState(0);
	const [formData, setFormData] = useState<FormData>({
		first_name: "",
		middle_name: "",
		last_name: "",
		email: "",
		province: "",
		province_id: "",
		city: "",
		city_id: "",
		regency: "",
		regency_id: "",
		district: "",
		district_id: "",
		kekeluargaan: "",
		address: "",
		phone: "",
	});

	const FormTitles = ["Informasi Pribadi", "Alamat", "Kontak"];

	const handleNext = () => {
		setPage((i) => i + 1);
		setProgress((i) => i + 33.33);
	};

	const handleSubmit = () => {
		axios
			.post(
				"https://api.steinhq.com/v1/storages/6262deffbca21f053e8d560f/Sheet1",
				[
					{
						first_name: formData.first_name,
						middle_name: formData.middle_name,
						last_name: formData.last_name,
						province: formData.province,
						regency: formData.regency,
						district: formData.district,
						city: formData.city,
						kekeluargaan: formData.kekeluargaan,
						address: formData.address,
						phone: formData.phone,
					},
				]
			)
			.then((res) => console.log(res))
			.catch((err) => console.log("eror", err));
	};

	const PageDisplay = () => {
		if (page === 0) {
			return <One formData={formData} setFormData={setFormData} />;
		} else if (page === 1) {
			return <Two formData={formData} setFormData={setFormData} />;
		} else {
			return <Three formData={formData} setFormData={setFormData} />;
		}
	};

	const handleValidation = () => {
		if (
			formData.first_name !== "" &&
			formData.province !== "" &&
			formData.city !== "" &&
			formData.regency !== "" &&
			formData.district !== "" &&
			formData.email !== "" &&
			formData.phone !== "" &&
			formData.address !== "" &&
			formData.kekeluargaan !== ""
		) {
			setIsDataValid(true);
		} else {
			setIsDataValid(false);
		}
	};

	return (
		<div className="h-screen w-full flex items-center justify-center bg-blue-core">
			<Box className="flex justify-center items-center w-[350px] h-[80%] min-h-[80%] sm:w-[500px] sm:h-[577px] flex-wrap rounded-sm xl:rounded-sm gap-4 bg-yellow-lm flex-col shadow-[0_8px_6px_rgba(0,0,0,0.32)]">
				<Div className="header my-3 text-lg rounded w-[200px] xl:w-[300px] text-center font-bold text-blue-secondary">
					Form Pendaftaran Kursus Bahasa Amiyah Mesir
				</Div>
				<div>
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
								setProgress((i) => i - 33.33);
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
					<LinearProgress value={progress} variant="determinate" className="my-5" />
				</div>
			</Box>
		</div>
	);
};

export default EventRegister;
