import { Portal, Spinner as Cspinner } from "@chakra-ui/react";
import React, { ForwardedRef, RefObject } from "react";

type SpinnerProps = {
	isLoading: boolean;
};

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
	({ isLoading }, ref) => {
		return (
			<>
				{isLoading ? (
					<Portal containerRef={ref as RefObject<HTMLDivElement | null>}>
						<Cspinner
							zIndex={1}
							position="absolute"
							top="50%"
							left="50%"
							thickness="4px"
							speed="0.65s"
							emptyColor="gray.200"
							color="blue.500"
							size="xl"
						/>
					</Portal>
				) : undefined}
			</>
		);
	}
);

export default Spinner;
