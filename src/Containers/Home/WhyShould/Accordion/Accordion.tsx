import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
	AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	"&:not(:last-child)": {
		borderBottom: 0,
	},
	"&:before": {
		display: "none",
	},
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor: "#4ECDC4",
	color: "white",
	flexDirection: "row-reverse",
	"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(90deg)",
	},
	"& .MuiAccordionSummary-content": {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	backgroundColor: "#FFDD00",
	color: "#06766E",
	borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
	const [expanded, setExpanded] = React.useState<string | false>("panel1");

	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false);
		};

	return (
		<div>
			<Accordion
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}
			>
				<AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
					<Typography>Berapa biaya tiap kelas?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						<p>Offline: EGP 250</p>
						<p>Online: EGP 250</p>
						<p>Private: EGP 450</p>
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel2"}
				onChange={handleChange("panel2")}
			>
				<AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
					<Typography>Bagaimana saja metode pembayarannya?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						<p>
							1. COD setiap zona tempat tinggal (khusus pendaftar yang berdomisili di
							Mesir
						</p>
						<p>
							<p>2. Transfer Bank BNI</p>
							<p className="ml-5">
								<p>Nomor Rekening: 0589152612</p>
								<p>A.N: Muadz Nasyit Ridho</p>
							</p>
						</p>
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
