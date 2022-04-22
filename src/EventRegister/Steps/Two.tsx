import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { FormData } from "../EventRegister";
import axios from "axios";
import useSWR from "swr";
import MenuItem from "@mui/material/MenuItem";

const provinces = [
	{ id: "11", name: "ACEH" },
	{ id: "12", name: "SUMATERA UTARA" },
	{ id: "13", name: "SUMATERA BARAT" },
	{ id: "14", name: "RIAU" },
	{ id: "15", name: "JAMBI" },
	{ id: "16", name: "SUMATERA SELATAN" },
	{ id: "17", name: "BENGKULU" },
	{ id: "18", name: "LAMPUNG" },
	{ id: "19", name: "KEPULAUAN BANGKA BELITUNG" },
	{ id: "21", name: "KEPULAUAN RIAU" },
	{ id: "31", name: "DKI JAKARTA" },
	{ id: "32", name: "JAWA BARAT" },
	{ id: "33", name: "JAWA TENGAH" },
	{ id: "34", name: "DI YOGYAKARTA" },
	{ id: "35", name: "JAWA TIMUR" },
	{ id: "36", name: "BANTEN" },
	{ id: "51", name: "BALI" },
	{ id: "52", name: "NUSA TENGGARA BARAT" },
	{ id: "53", name: "NUSA TENGGARA TIMUR" },
	{ id: "61", name: "KALIMANTAN BARAT" },
	{ id: "62", name: "KALIMANTAN TENGAH" },
	{ id: "63", name: "KALIMANTAN SELATAN" },
	{ id: "64", name: "KALIMANTAN TIMUR" },
	{ id: "65", name: "KALIMANTAN UTARA" },
	{ id: "71", name: "SULAWESI UTARA" },
	{ id: "72", name: "SULAWESI TENGAH" },
	{ id: "73", name: "SULAWESI SELATAN" },
	{ id: "74", name: "SULAWESI TENGGARA" },
	{ id: "75", name: "GORONTALO" },
	{ id: "76", name: "SULAWESI BARAT" },
	{ id: "81", name: "MALUKU" },
	{ id: "82", name: "MALUKU UTARA" },
	{ id: "91", name: "PAPUA BARAT" },
	{ id: "94", name: "PAPUA" },
];

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
			<div className="flex flex-col">
				<TextField
					className="bg-white rounded-lg"
					id="outlined-select"
					select
					label="Provinsi"
					value={formData.province}
					onChange={(e) =>
						setFormData({
							...formData,
							province: e.target.value,
						})
					}
				>
					{provinces.map(({ id, name }, index) => (
						<MenuItem key={index} value={name}>
							{name}
						</MenuItem>
					))}
				</TextField>
				<TextField
					className="bg-white rounded-lg"
					required
					id="outlined-required"
					label="Kabupaten/Kota"
					value={formData.city}
					onChange={(e) =>
						setFormData({
							...formData,
							city: e.target.value,
						})
					}
				/>
				<TextField
					className="bg-white rounded-lg"
					required
					id="outlined-required"
					label="Kecamatan"
					value={formData.regency}
					onChange={(e) =>
						setFormData({
							...formData,
							regency: e.target.value,
						})
					}
				/>
				<TextField
					className="bg-white rounded-lg"
					required
					id="outlined-required"
					label="Desa/Kelurahan"
					value={formData.district}
					onChange={(e) =>
						setFormData({
							...formData,
							district: e.target.value,
						})
					}
				/>
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
			</div>
		</Box>
	);
};

export default Two;
