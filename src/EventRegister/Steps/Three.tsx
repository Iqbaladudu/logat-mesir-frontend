import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { FormData } from "../EventRegister";
import { MenuItem, Zoom } from "@mui/material";

interface Props {
	formData: FormData;
	setFormData: Function;
}

const Three = ({ formData, setFormData }: Props) => {
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
						error={
							/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email) ===
							false
						}
						className="bg-white rounded-lg"
						required
						id="outlined-required"
						label="Email"
						value={formData.email}
						onChange={(e) =>
							setFormData({
								...formData,
								email: e.target.value,
							})
						}
					/>
					<TextField
						className="bg-white rounded-lg"
						type="number"
						required
						id="outlined-required"
						label="WhatsApp"
						value={formData.phone}
						onChange={(e) =>
							setFormData({
								...formData,
								phone: e.target.value,
							})
						}
					/>
				</div>
			</Zoom>
		</Box>
	);
};

export default Three;
