import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { AverageYieldData } from "./dataUtils";

interface BarChartProps {
  data: AverageYieldData[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);

      chart.setOption({
        title: {
          text: "Average Crop Yield (1950-2020)",
          left: "center",
        },
        tooltip: {
          trigger: "axis",
          formatter: (params: any) => {
            const item = params[0];
            return `${item.name}<br/>${item.marker} ${item.seriesName}: ${item.value.toLocaleString()} Kg/Ha`;
          },
        },
        xAxis: {
          type: "category",
          name: "Crop",
          data: data.map((d) => d.crop),
          axisLabel: {
            rotate: 45, // Rotate labels if needed
          },
        },
        yAxis: {
          type: "value",
          name: "Average Yield (Kg/Ha)",
          axisLabel: {
            formatter: (value: number) => value.toLocaleString(), // Format Y-axis ticks
          },
        },
        series: [
          {
            name: "Average Yield",
            type: "bar",
            data: data.map((d) => d.averageYield),
            itemStyle: {
              color: "#5470C6", // Customize bar color
            },
          },
        ],
      });

      // Cleanup on component unmount
      return () => chart.dispose();
    }
  }, [data]);

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
};

export default BarChart;
