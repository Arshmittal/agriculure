
Indian Agriculture Data Visualization

This project visualizes data from the Indian Agriculture dataset using a table and a bar chart. The application processes crop production data and yield statistics from 1950 to 2020 and presents it interactively.
Features

    Table:
        Displays the crop with the maximum and minimum production for each year.
    Bar Chart:
        Shows the average yield of each crop (Kg/Ha) across all years.

Technologies Used

    React: Frontend framework for building the user interface.
    TypeScript: Type safety and enhanced development experience.
    Mantine: Component library for the table and UI design.
    Apache ECharts: For creating interactive bar charts.
    Vite: Development build tool for faster and modern web apps.

Installation
Prerequisites

    Node.js (version 16 or later)
    npm or yarn package manager

Steps to Install

    Clone the repository:

git clone <repository-url>
cd project-root

Install dependencies:

npm install

Start the development server:

npm run dev

Open your browser and navigate to:

    http://localhost:5173/

Project Structure

project-root/
├── public/                         # Static files (if needed)
├── src/                            # Source code
│   ├── components/                 # React components
│   │   ├── TableComponent.tsx      # Table displaying max/min production per year
│   │   ├── BarChartComponent.tsx   # Bar chart for average crop yields
│   ├── data/                       # Dataset files
│   │   ├── agricultureData.json    # Dataset (1950–2020)
│   ├── App.tsx                     # Main application file
│   ├── main.tsx                    # Entry point for Vite
│   ├── index.css                   # Global styles
├── package.json                    # Project dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite configuration
└── README.md                       # Project documentation

Dataset

The dataset used in this project (agricultureData.json) contains the following fields:

    Country: The country name (India).
    Year: Financial year (e.g., 1950).
    Crop Name: Name of the crop.
    Crop Production (UOM:t(Tonnes)): Crop production in tonnes.
    Yield Of Crops (UOM:Kg/Ha(KilogramperHectare)): Yield per hectare.
    Area Under Cultivation (UOM:Ha(Hectares)): Cultivated area in hectares.




How It Works
Table Component

    Parses the dataset to group data by year.
    Finds the crop with the maximum production and minimum production for each year.
    Displays the data in a table using Mantine's <Table> component.

Bar Chart Component

    Aggregates the dataset to calculate the average yield for each crop from 1950 to 2020.
    Renders the data as a bar chart using Apache ECharts.