import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { FormData } from "../EventRegister";
import { Zoom } from "@mui/material";

interface Props {
	formData: FormData;
	setFormData: Function;
}

const One = ({ formData, setFormData }: Props) => {
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
						label="Nama Depan"
						value={formData.first_name}
						className="bg-white rounded-lg"
						onChange={(e) =>
							setFormData({
								...formData,
								first_name: e.target.value,
							})
						}
					/>
					<TextField
						id="outlined"
						label="Nama Belakang"
						className="bg-white rounded-lg"
						value={formData.last_name}
						onChange={(e) =>
							setFormData({
								...formData,
								last_name: e.target.value,
							})
						}
					/>
				</div>
			</Zoom>
		</Box>
	);
};

export default One;
