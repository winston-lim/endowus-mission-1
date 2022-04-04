import {
	ChartConfig,
	chartOptions,
	DataPoint,
	seriesOptions,
	titleOptions,
	tooltipOptions,
	xAxisOptions,
	yAxisOptions,
} from "./constants";

export const fetchData = (
	initialInvestment: number,
	monthlyInvestment: number
): Promise<ChartConfig> => {
	return fetch("http://www.mocky.io/v2/5e69de892d00007a005f9e29", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			initialInvestment,
			monthlyInvestment,
		}),
	})
		.then((response) => response.json())
		.then((response) => {
			const data: DataPoint[] = response;
			const chartConfig: ChartConfig = {
				chart: chartOptions,
				title: titleOptions,
				xAxis: xAxisOptions,
				yAxis: yAxisOptions,
				tooltip: tooltipOptions,
				series: seriesOptions,
			};
			//chartConfig.yAxis!.min = initialInvestment;
			chartConfig.yAxis!.breaks = {
				from: 0,
				to: initialInvestment - 1,
			};
			data.forEach((dataPoint) => {
				chartConfig.xAxis!.categories.push(dataPoint.yearMonth);
				chartConfig.series[0].data!.push(dataPoint.totalDeposit);
				chartConfig.series[1].data!.push(dataPoint.expectedAmounts[10]);
				chartConfig.series[2].data!.push(dataPoint.expectedAmounts[50]);
				chartConfig.series[3].data!.push(dataPoint.expectedAmounts[75]);
				chartConfig.series[4].data!.push(
					dataPoint.expectedAmounts["benchmark"]
				);
				chartConfig.series[5].data!.push(
					dataPoint.chanceOfUnderPerformingBenchmark
				);
			});
			return chartConfig;
		});
};
