import React, { useState, useEffect } from "react";
import CropTable from "./components/CropTable";
import BarChart from "./components/BarChart";
import { processYearlyProductionData, processAverageYieldData } from "./components/dataUtils";

const App: React.FC = () => {
  const [yearlyProductionData, setYearlyProductionData] = useState<any[]>([]);
  const [averageYieldData, setAverageYieldData] = useState<any[]>([]);

  useEffect(() => {
    // Process and set the data
    setYearlyProductionData(processYearlyProductionData());
    setAverageYieldData(processAverageYieldData());
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Indian Agriculture Data Visualization</h1>

      <h2>Crop Production Table</h2>
      {yearlyProductionData.length > 0 ? (
        <CropTable data={yearlyProductionData} />
      ) : (
        <p>Loading crop production data...</p>
      )}

      <h2>Average Crop Yield Chart</h2>
      {averageYieldData.length > 0 ? (
        <BarChart data={averageYieldData} />
      ) : (
        <p>Loading average crop yield data...</p>
      )}
    </div>
  );
};

export default App;
