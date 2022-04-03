import { ChakraProvider, Box, theme, Text, Heading } from "@chakra-ui/react";
import React from "react";
import { Chart } from "./Chart";
import Form from "./Form";
import Spinner from "./Spinner";
export const App = () => {
	const ref = React.createRef<HTMLDivElement>();
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	return (
		<ChakraProvider theme={theme}>
			<Box fontSize="xl">
				<Box marginX={10} marginY={5}>
					<Heading color="blue.500">Investment Plan Projection</Heading>
					<Text marginTop={10}>
						This is an illustration of the projected returns over time of this
						investment plan
					</Text>
				</Box>
				<Form isLoading={isLoading} setIsLoading={setIsLoading} />
				<Chart isLoading={isLoading} setIsLoading={setIsLoading} ref={ref} />
				<Spinner isLoading={isLoading} ref={ref} />
			</Box>
		</ChakraProvider>
	);
};
