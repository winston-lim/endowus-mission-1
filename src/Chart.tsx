import React, { useState, useCallback, RefObject } from "react";
import Highcharts, { Chart as HighchartsChart } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Tooltip } from "./Tooltip";
import { Box, Portal, Spinner as Cspinner } from "@chakra-ui/react";

const initialOptions = {
	title: {
		text: "Enter a value to begin visualization",
		style: {
			fontSize: "36px",
		},
	},
	series: [
		{
			type: "line",
			data: [],
		},
	],
	tooltip: {
		style: {
			pointerEvents: "auto",
		},
	},
	legend: {
		enabled: false,
	},
	yAxis: [
		{
			title: {
				text: undefined,
			},
		},
	],
};

type ChartProps = {
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Chart = React.forwardRef<HTMLDivElement, ChartProps>(
	({ isLoading, setIsLoading }, ref) => {
		const [options, setOptions] = useState(initialOptions);
		const [chart, setChart] = useState<HighchartsChart | null>(null);
		const callback = useCallback((chart: HighchartsChart) => {
			setChart(chart);
		}, []);

		return (
			<Box position="relative" ref={ref} marginX={10}>
				<HighchartsReact
					highcharts={Highcharts}
					options={options}
					callback={callback}
				/>

				<Tooltip chart={chart}>
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
				</Tooltip>
			</Box>
		);
	}
);
