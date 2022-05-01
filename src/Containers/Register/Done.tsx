import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Link from "next/link";

const Done = () => {
	return (
		<div className="flex justify-center items-center flex-col h-screen w-screen bg-blue-secondary text-white text-center">
			<CheckCircleIcon />
			<p>Pendaftaran Berhasil.</p>
			<p>Terimakasih telah melakukan pendaftaran.</p>
			<p>
				Untuk pertanyaan dan konfirmasi pembayaran silahkan{" "}
				<Link href="http://wa.me/+201011843082">
					<a className="bg-white text-blue-secondary">klik di sini</a>
				</Link>
			</p>
		</div>
	);
};

export default Done;
