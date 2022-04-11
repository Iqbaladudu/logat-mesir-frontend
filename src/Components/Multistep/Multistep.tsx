/*

make multistep form
1. Make main function
2. Make Container
3. Handle change
5. Tombol Next
6. get all data form

*/

import { ReactNode, useState } from "react";
import { useComponentLogic } from "../../Containers/Register/hooks";
import Button from "../Button/Button";
import Container from "../Container/Container";
import styles from "./Multistep.module.css";

export interface Props {
	children: ReactNode[];
}

const Multistep = ({ children }: Props) => {
	const [position, setPosition] = useState(0);
	const { register, handleSubmit, onSubmit, errors } = useComponentLogic();

	const total = children.length - 1;

	const changeNextPosition = () => {
		position === total ? null : setPosition(position + 1);
	};

	const changePrevPosition = () => {
		position < 0 ? null : setPosition(position - 1);
	};

	const isFinish = position === total;

	return (
		<>
			<Container
				height="h-[500px]"
				width="w-[500px] bg-yellow-lm"
				flex="flex justify-center items-center flex-col"
			>
				<div className="flex justify-center items-center flex-col gap-3">
					{isFinish && (
						<button
							className={styles.nextprev}
							onClick={() => {
								changePrevPosition();
							}}
						>
							Kembali
						</button>
					)}
					{children[position]}
					{isFinish ? (
						<Button
							type="submit"
							label="Daftar"
							secondary
							className="btn w-[278px] h-[67px] shadow-[0_5px_7px_rgba(0,0,0,0.25)] rounded-[20px] leading-[54px] mx-auto"
						/>
					) : (
						<>
							<button
								className={styles.nextprev}
								onClick={() => {
									changeNextPosition();
								}}
							>
								Lanjut
							</button>
						</>
					)}
				</div>
			</Container>
		</>
	);
};

export default Multistep;
