import { Button } from "@chakra-ui/react";
import React from "react";

type SubmitButtonProps = {
	isLoading: boolean;
};

const SubmitButton = ({ isLoading }: SubmitButtonProps) => {
	return (
		<Button
			disabled={isLoading}
			type="submit"
			marginX={5}
			colorScheme="blue"
			size="lg"
		>
			Get projection
		</Button>
	);
};

export default SubmitButton;
