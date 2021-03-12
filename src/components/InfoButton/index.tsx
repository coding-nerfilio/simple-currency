import { Button } from "@chakra-ui/react";
import * as React from "react";
import lodeable from "@loadable/component";

const InfoModal = lodeable(() => import("./InfoModal"));

const InfoButton = () => {
	const [modal, showModal] = React.useState(false);

	const onClose = () => showModal(!modal);
	return (
		<>
			<Button
				onClick={() => showModal(true)}
				size="xs"
				aria-label="Information"
			>
				ⓘ
			</Button>
			<InfoModal modal={modal} onClose={onClose} />
		</>
	);
};

export default InfoButton;
