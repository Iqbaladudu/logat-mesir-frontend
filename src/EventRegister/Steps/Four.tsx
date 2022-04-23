import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { FormData } from "../EventRegister";
import { MenuItem, Zoom } from "@mui/material";

interface Props {
	formData: FormData;
	setFormData: Function;
}

const Four = ({ formData, setFormData }: Props) => {
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
						className="bg-white rounded-lg"
						id="outlined-select"
						select
						label="Jenis kelas"
						value={formData.classType}
						onChange={(e) =>
							setFormData({
								...formData,
								classType: e.target.value,
							})
						}
					>
						<MenuItem value="online">Online</MenuItem>
						<MenuItem value="offline">Offline</MenuItem>
					</TextField>
					<TextField
						className="bg-white rounded-lg"
						id="outlined-select"
						select
						label="Metode Pembayaran"
						value={formData.paymentMethod}
						onChange={(e) =>
							setFormData({
								...formData,
								paymentMethod: e.target.value,
							})
						}
					>
						<MenuItem value="COD">Cash on Delivery(COD)</MenuItem>
						<MenuItem value="transfer">Transfer</MenuItem>
					</TextField>
				</div>
			</Zoom>
		</Box>
	);
};

export default Four;
