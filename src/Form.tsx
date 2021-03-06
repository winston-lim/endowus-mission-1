import {
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	HStack,
	Box,
	InputGroup,
	InputLeftElement,
	VStack,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import { errorChartConfig } from "./constants";
import { fetchData } from "./helpers";
import SubmitButton from "./SubmitButton";

type FormProps = {
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setChartConfig: React.Dispatch<any>;
};

const Form = ({ isLoading, setIsLoading, setChartConfig }: FormProps) => {
	return (
		<Box marginY={10} marginX={10}>
			<Formik
				initialValues={{
					initial: "",
					monthly: "",
				}}
				onSubmit={async (values) => {
					setIsLoading(true);
					try {
						const chartConfig = await fetchData(
							parseInt(values.initial),
							parseInt(values.monthly)
						);
						setChartConfig(chartConfig);
					} catch (e) {
						setChartConfig(errorChartConfig);
						setIsLoading(false);
					}
				}}
			>
				{({ handleSubmit, errors, touched, values }) => (
					<form onSubmit={handleSubmit}>
						<VStack align="flex-start" spacing={5}>
							<HStack shouldWrapChildren={true} spacing={5} align="center">
								<FormControl
									minW="250"
									isInvalid={!!errors.initial!! && touched.initial}
								>
									<FormLabel htmlFor="initial-investment">
										Initial Investment
									</FormLabel>
									<InputGroup>
										<InputLeftElement
											mr={5}
											pointerEvents="none"
											children="$"
										/>
										<Field
											as={Input}
											id="initial-investment"
											name="initial"
											type="number"
											variant="filled"
											paddingLeft={10}
											validate={(value: number) => {
												let error;
												if (value <= 0) {
													error = "Enter a valid number";
												}
												return error;
											}}
										/>
									</InputGroup>
									<FormErrorMessage>{errors.initial}</FormErrorMessage>
								</FormControl>
								<FormControl
									minW="250"
									isInvalid={!!errors.monthly!! && touched.monthly}
								>
									<FormLabel htmlFor="monthly-investment">
										Monthly Investment
									</FormLabel>
									<InputGroup>
										<InputLeftElement
											mr={5}
											pointerEvents="none"
											children="$"
										/>
										<Field
											as={Input}
											id="monthly-investment"
											name="monthly"
											type="number"
											variant="filled"
											paddingLeft={10}
											validate={(value: number) => {
												let error;
												if (value <= 0) {
													error = "Enter a valid number";
												}
												return error;
											}}
										/>
									</InputGroup>
									<FormErrorMessage>{errors.monthly}</FormErrorMessage>
								</FormControl>
							</HStack>
							<SubmitButton isLoading={isLoading} />
						</VStack>
					</form>
				)}
			</Formik>
		</Box>
	);
};

export default Form;
