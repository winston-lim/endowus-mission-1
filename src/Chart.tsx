import React, { useState, useCallback } from "react";
import Highcharts, { Chart as HighchartsChart } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Tooltip } from "./Tooltip";
import { Box } from "@chakra-ui/react";
import { ChartConfig } from "./constants";

type ChartProps = {
	chartConfig: ChartConfig;
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Chart = React.forwardRef<HTMLDivElement, ChartProps>(
	({ chartConfig, isLoading, setIsLoading }, ref) => {
		const [chart, setChart] = useState<HighchartsChart | null>(null);
		const callback = useCallback(
			(chart: HighchartsChart) => {
				setChart(chart);
				setIsLoading(false);
			},
			[setIsLoading]
		);

		return (
			<Box position="relative" ref={ref} marginX={10}>
				<HighchartsReact
					highcharts={Highcharts}
					options={chartConfig}
					callback={callback}
				/>
				{/* <Tooltip chart={chart}>
					{(formatterContext) => {
						const { x, y } = formatterContext;
						return (
							<>
								<div>x: {x}</div>
								<div>y: {y}</div>
								<br />
								<button onClick={() => alert(`x: ${x}, y: ${y}`)}>
									Action
								</button>
							</>
						);
					}}
				</Tooltip> */}
			</Box>
		);
	}
);
