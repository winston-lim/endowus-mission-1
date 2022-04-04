import { ChakraProvider, Box, theme, Text, Heading } from "@chakra-ui/react";
import { createRef, useState } from "react";
import { Chart } from "./Chart";
import { ChartConfig, initialChartConfig } from "./constants";
import Form from "./Form";
import Spinner from "./Spinner";
export const App = () => {
	const ref = createRef<HTMLDivElement>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [chartConfig, setChartConfig] =
		useState<ChartConfig>(initialChartConfig);
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
				<Form
					setChartConfig={setChartConfig}
					isLoading={isLoading}
					setIsLoading={setIsLoading}
				/>
				<Chart
					chartConfig={chartConfig}
					isLoading={isLoading}
					setIsLoading={setIsLoading}
					ref={ref}
				/>
				<Spinner isLoading={isLoading} ref={ref} />
			</Box>
		</ChakraProvider>
	);
};
