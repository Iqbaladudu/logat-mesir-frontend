import Card from "../Card";
import VideoIcon from "/public/VideoIcon.svg";
import Image from "next/image";

const VideoCard = () => {
	return (
		<div className="flex">
			<Card className="w-[599px] h-[300px] bg-blue-core rounded-[20px]">
				<div className="flex justify-center items-center w-[180px] h-[180px] bg-white rounded-full">
					<Image src={VideoIcon} height="104" width="104" alt="" />
				</div>
			</Card>
		</div>
	);
};

export default VideoCard;
