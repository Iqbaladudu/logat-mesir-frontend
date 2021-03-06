import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { FormData } from "../EventRegister";
import axios from "axios";
import { Zoom } from "@mui/material";

interface Props {
	formData: FormData;
	setFormData: Function;
}

interface Province {
	id: string;
	name: string;
}

const fetcher = async (url: string) =>
	await axios.get(url).then((res) => res.data);

const Two = ({ formData, setFormData }: Props) => {
	return (
		<Box
			component="form"
			sx={{
				"& .MuiTextField-root": { m: 1, width: "25ch" },
			}}
			noValidate
			autoComplete="off"
		>
			<Zoom
				in
				style={{
					transitionDuration: "1000ms",
				}}
			>
				<div className="flex flex-col">
					<TextField
						required
						id="outlined-required"
						label="Alamat Sekarang"
						className="bg-white rounded-lg"
						value={formData.address}
						onChange={(e) =>
							setFormData({
								...formData,
								address: e.target.value,
							})
						}
					/>
					<TextField
						className="bg-white rounded-lg"
						required
						id="outlined-required"
						label="Asal/Kekeluargaan"
						value={formData.kekeluargaan}
						onChange={(e) =>
							setFormData({
								...formData,
								kekeluargaan: e.target.value,
							})
						}
					/>
				</div>
			</Zoom>
		</Box>
	);
};

export default Two;
