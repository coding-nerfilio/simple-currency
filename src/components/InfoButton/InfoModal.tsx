import * as React from "react";
import {
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
const InfoModal = ({
	modal,
	onClose,
}: {
	modal: boolean;
	onClose: () => void;
}) => (
	<Modal isOpen={modal} onClose={onClose}>
		<ModalOverlay />
		<ModalContent>
			<ModalHeader>Simple Currency</ModalHeader>
			<ModalCloseButton />
			<ModalBody>
				<Flex flexDir="column">
					<Text>
						A minimalist currency exchanger PWA powered by{" "}
						<Link
							color="lightslategrey"
							href="https://www.currencyconverterapi.com/"
						>
							CurrencyConverterApi.com
						</Link>
					</Text>
					<Text>
						You could find the source code on{" "}
						<Link
							color="lightslategrey"
							href="https://github.com/coding-nerfilio/simple-currency/"
						>
							GitHub
						</Link>
					</Text>
				</Flex>
			</ModalBody>
			<ModalFooter alignContent="center" justifyContent="center">
				<Text>Simple Currency Copyright (C) 2021 Francisco Risso</Text>
			</ModalFooter>
		</ModalContent>
	</Modal>
);

export default InfoModal;
