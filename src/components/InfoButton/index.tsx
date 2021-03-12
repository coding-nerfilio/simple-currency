import { Button } from "@chakra-ui/react";
import * as React from "react";
import InfoModal from "./InfoModal";

const InfoButton = () => {
	const [modal, showModal] = React.useState(false);

	const onClose = () => showModal(!modal);
	return (
		<>
			<Button onClick={() => showModal(true)} size="xs">
				ⓘ
			</Button>
			<InfoModal modal={modal} onClose={onClose} />
		</>
	);
};

export default InfoButton;
