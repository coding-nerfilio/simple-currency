import {
	Button,
	Flex,
	Link,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
} from "@chakra-ui/react";
import * as React from "react";

const InfoButton = () => {
	const [modal, showModal] = React.useState(false);

	const onClose = () => showModal(!modal);
	return (
		<>
			<Button onClick={() => showModal(true)}>ⓘ</Button>
			<Modal isOpen={modal} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Simple Currency</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Flex flexDir="column">
							<Text>
								A minimalist currency exchanger PWA powered by{" "}
								<Link href="https://currencylayer.com/">currencylayer API</Link>
								.
							</Text>
							<Text>
								You could find the source code on{" "}
								<Link href="https://github.com/coding-nerfilio/simple-currency/">
									GitHub
								</Link>
							</Text>
						</Flex>
					</ModalBody>
					<ModalFooter>
						<Text textAlign="center">
							Simple Currency Copyright (C) 2021 Francisco Risso
						</Text>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default InfoButton;
