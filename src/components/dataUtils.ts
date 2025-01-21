// src/components/dataUtils.ts

// Import the JSON file
import rawData from "../Manufac.json";

// Types for the data
export type YearlyProductionData = {
  year: number;
  crop: string;
  production: number;
};

export type AverageYieldData = {
  crop: string;
  averageYield: number;
};

// Function to process raw data into YearlyProductionData
export const processYearlyProductionData = (): YearlyProductionData[] => {
  const yearlyProductionData: YearlyProductionData[] = rawData
    .filter((item: any) => item["Crop Production (UOM:t(Tonnes))"] !== "") // Filter valid production data
    .map((item: any) => ({
      year: parseInt(item.Year.split(", ")[1], 10), // Extract year from the 'Year' field
      crop: item["Crop Name"],
      production: parseFloat(item["Crop Production (UOM:t(Tonnes))"]),
    }));
  return yearlyProductionData;
};

// Function to process raw data into AverageYieldData
export const processAverageYieldData = (): AverageYieldData[] => {
  const yieldData: Record<string, { totalYield: number; count: number }> = {};

  rawData.forEach((item: any) => {
    if (item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] !== "") {
      const crop = item["Crop Name"];
      const yieldValue = parseFloat(item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]);
      if (!yieldData[crop]) {
        yieldData[crop] = { totalYield: 0, count: 0 };
      }
      yieldData[crop].totalYield += yieldValue;
      yieldData[crop].count += 1;
    }
  });

  return Object.keys(yieldData).map((crop) => ({
    crop,
    averageYield: yieldData[crop].totalYield / yieldData[crop].count,
  }));
};

// Utility function to process Mantine table data
export const processTableData = (data: YearlyProductionData[]) => {
  const years = Array.from(new Set(data.map((d) => d.year)));
  return years.map((year) => {
    const crops = data.filter((d) => d.year === year);
    const maxCrop = crops.reduce(
      (max, crop) => (crop.production > max.production ? crop : max),
      { crop: "", production: 0 }
    );
    const minCrop = crops.reduce(
      (min, crop) => (crop.production < min.production ? crop : min),
      { crop: "", production: Infinity }
    );
    return { year, maxCrop: maxCrop.crop, minCrop: minCrop.crop };
  });
};

// Example usage
const yearlyProductionData = processYearlyProductionData();
const averageYieldData = processAverageYieldData();
console.log("Yearly Production Data:", yearlyProductionData);
console.log("Average Yield Data:", averageYieldData);
