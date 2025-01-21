import { Table } from "@mantine/core";
import { processTableData, YearlyProductionData } from "./dataUtils";

interface CropTableProps {
  data: YearlyProductionData[];
}

const CropTable: React.FC<CropTableProps> = ({ data }) => {
  const tableData = processTableData(data);

  return (
    <div style={{ margin: "20px", overflowX: "auto" }}>
      <Table
        striped
        highlightOnHover
        
        withColumnBorders
        style={{
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
     <thead
  style={{
    backgroundColor: "#f4f4f4",
    color: "#333",
    textAlign: "center", // Align headers center
    fontWeight: "bold",
  }}
>
  <tr>
    <th style={{ padding: "12px", textAlign: "center" }}>Year</th>
    <th style={{ padding: "12px", textAlign: "center" }}>Crop with Maximum Production</th>
    <th style={{ padding: "12px", textAlign: "center" }}>Crop with Minimum Production</th>
  </tr>
</thead>

        <tbody>
          {tableData.map((row) => (
            <tr key={row.year}>
              <td style={{ padding: "12px" }}>{row.year}</td>
              <td style={{ padding: "12px", fontWeight: "500", color: "#2c7be5" }}>
                {row.maxCrop}
              </td>
              <td style={{ padding: "12px", fontWeight: "500", color: "#e53e3e" }}>
                {row.minCrop}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CropTable;
