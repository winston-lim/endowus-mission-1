export const initialChartConfig: ChartConfig = {
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
	yAxis: {
		title: {
			text: undefined,
		},
	},
};

export const errorChartConfig: ChartConfig = {
	title: {
		text: "Something went wrong, please try again later",
		style: {
			fontSize: "36px",
			color: "#ed4d4d",
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
	yAxis: {
		title: {
			text: undefined,
		},
	},
};

export type DataPoint = {
	sequence: number;
	yearMonth: string;
	totalDeposit: number;
	expectedAmounts: {
		10: number;
		50: number;
		75: number;
		benchmark: number;
	};
	chanceOfUnderPerformingBenchmark: number;
};

// export type SeriesData = {
// 	x:
// }

export type ChartConfig = {
	chart?: {
		type?: string;
	};
	title: {
		text: string;
		style?: {
			fontSize: string;
			color?: string;
		};
	};
	xAxis?: {
		categories: string[];
		labels?: {
			formatter?: () => any;
		};
	};
	yAxis?: {
		title?: {
			text?: string;
		};
		opposite?: boolean;
		labels?: {
			formatter?: () => any;
		};
		min?: number;
		max?: number;
		breaks?: {
			from: number;
			to: number;
		};
	};
	series: {
		name?: string;
		type?: string;
		data: number[];
		marker?: {
			enabled?: boolean;
		};
	}[];
	tooltip: {
		style?: {
			pointerEvents?: string;
		};
		shared?: boolean;
	};
	legend?: {
		enabled?: boolean;
	};
};

export const chartOptions = {
	type: "spline",
};

export const titleOptions = {
	text: "Investment projection over 30 years",
	style: {
		fontSize: "36px",
	},
};

export const yAxisOptions = {
	title: {
		text: "Returns",
	},
	opposite: true,
	labels: {
		formatter: function (): any {
			return "$" + (this as any).value;
		},
	},
};

export const xAxisOptions = {
	categories: [],
	labels: {
		formatter: function (): any {
			let year = parseInt((this as any).value.split("-")[0]);
			let month = parseInt((this as any).value.split("-")[1]);
			if (year % 5 === 0 && month % new Date().getMonth() === 0) {
				return year.toString();
			} else {
				return "";
			}
		},
	},
};

export const tooltipOptions = {
	style: {
		pointerEvents: "auto",
	},
	shared: true,
	useHTML: true,
	// headerFormat: '<table><tr><th colspan="2">{point.key}</th></tr>',
	// pointFormat:
	// 	'<tr><td style="color: {series.color}"><b>{series.name}</b> </td>' +
	// 	'<td style="text-align: right"><b>{point.y} EUR</b></td></tr>',
	// footerFormat: "</table>",
	// valueDecimals: 2,
	formatter: function (): any {
		let months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		let output: string =
			"<b>" +
			months[parseInt((this as any).x.split("-")[1]) - 1] +
			" " +
			(this as any).x.split("-")[0] +
			"</b>";
		(this as any).points.forEach((point: any) => {
			let name = point.series.name;
			let color = point.series.color;
			let value = point.y;
			switch (name) {
				case "Total Deposit": {
					value = value.toLocaleString("en-US");
					output += `<br/><b style="color: ${color}">${name}</b>:  S$${value}`;
					break;
				}
				case "Bottom 10%": {
					value = value.toLocaleString("en-US");
					output += `<br/><b style="color: ${color}">${name}</b>:  S$${value}`;
					break;
				}
				case "Median": {
					value = value.toLocaleString("en-US");
					output += `<br/><b style="color: ${color}">${name}</b>:  S$${value}`;
					break;
				}
				case "Top 25%": {
					value = value.toLocaleString("en-US");
					output += `<br/><b style="color: ${color}">${name}</b>:  S$${value}`;
					break;
				}
				case "2.5% p.a.": {
					value = value.toLocaleString("en-US");
					output += `<br/><b style="color: ${color}">${name}</b>:  S$${value}`;
					break;
				}
				case "Underperforming 2.5% p.a.": {
					output += `<br/><b style="color: ${color}">${name}</b>:  ${value}%`;
					break;
				}
			}
		});
		return output;
		// return (this as any).points.reduce(function (s: any, point: any) {
		// 	let name: string = point.series.name;
		// 	let value: number = point.y;

		// switch (name) {
		// 	case "Total Deposit": {
		// 		return s + "<br/>" + point.series.name + ":   S$" + point.y;
		// 	}
		// 	case "Bottom 10%": {
		// 		return s + "<br/>" + point.series.name + ":   S$" + point.y;
		// 	}
		// 	case "Median": {
		// 		return s + "<br/>" + point.series.name + ":   S$" + point.y;
		// 	}
		// 	case "Top 25%": {
		// 		return s + "<br/>" + point.series.name + ":  >S$" + point.y;
		// 	}
		// 	case "2.5% p.a.": {
		// 		return s + "<br/>" + point.series.name + ":   S$" + point.y;
		// 	}
		// 	case "Underperforming 2.5% p.a.": {
		// 		return s + "<br/>" + point.series.name + ":   S$" + point.y;
		// 	}
		// }
		// }, "<b>" +
		// 	months[parseInt((this as any).x.split("-")[1])] +
		// 	" " +
		// 	(this as any).x.split("-")[0] +
		// 	"</b>");
	},
};

export const seriesOptions = [
	{
		name: "Total Deposit",
		data: [],
		marker: {
			enabled: false,
		},
		opacity: 0,
	},
	{
		name: "Bottom 10%",
		data: [],
		marker: {
			enabled: false,
		},
	},
	{
		name: "Median",
		data: [],
		marker: {
			enabled: false,
		},
	},
	{
		name: "Top 25%",
		data: [],
		marker: {
			enabled: false,
		},
	},
	{
		name: "2.5% p.a.",
		data: [],
		marker: {
			enabled: false,
		},
		opacity: 0,
	},
	{
		name: "Underperforming 2.5% p.a.",
		data: [],
		marker: {
			enabled: false,
		},
		opacity: 0,
	},
];
