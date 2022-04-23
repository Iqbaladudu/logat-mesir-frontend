import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Done = () => {
	return (
		<div className="flex justify-center items-center flex-col h-screen w-screen bg-blue-secondary text-white">
			<CheckCircleIcon />
			<p>Pendaftaran Berhasil</p>
		</div>
	);
};

export default Done;
