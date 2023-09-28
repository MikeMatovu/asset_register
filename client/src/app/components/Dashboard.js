import "../styles/dashboard.css";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
const Dashboard = ({ chartData }) => {
  return (
    <div className="chart-container">
      <div>
        <h2 style={{ textAlign: "center" }}>STATUS</h2>
        <Pie
          data={chartData.pieChartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "ASSETS BY STATUS",
              },
            },
          }}
        />
      </div>
      <div className="testClass">
        <h2 style={{ textAlign: "center" }}>ASSETS BY LOCATION</h2>
        <Bar
          type="bar"
          width={30}
          height={50}
          options={{
            title: {
              display: true,
              text: "COVID-19 Cases of Last 3 Months",
              fontSize: 15,
            },
            legend: {
              display: true,
              position: "top",
            },
          }}
          data={chartData.barChartData}
        />
      </div>
    </div>
  );
};

export default Dashboard;
