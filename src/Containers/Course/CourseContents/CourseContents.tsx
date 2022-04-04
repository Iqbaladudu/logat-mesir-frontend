import Card from "../../../Components/Card/Card";
import Container from "../../../Components/Container/Container";

const CourseContents = () => {
	return (
		<section className="overflow-hidden relative">
			<Container width="w-screen" height="h-screen" flex="flex flex-col">
				<div>
					<p>Nama Pelajaran</p>
				</div>
				<div>
					<Card
						headerText="Materi Belajar"
						headerStyle=""
						bodyText="Full one page untuk online course yang meyediakan berbagai ilmu dalam bentuk online/daring"
						bodyStyle="w-[378px]"
						className="w-[688px] h-[282px] bg-gray-200 shadow-[0_5px_4px_0px_rgba(0,0,0,0.3)] rounded-md flex-col"
					/>
				</div>
				<div></div>
			</Container>
		</section>
	);
};

export default CourseContents;
