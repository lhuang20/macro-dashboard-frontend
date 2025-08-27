import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function App() {
  const [cpiData, setCpiData] = useState([]);
  const [unempData, setUnempData] = useState([]);

  useEffect(() => {
    fetch("/data/cpi.json") // static JSON on GitHub Pages
      .then((res) => res.json())
      .then(setCpiData);

    fetch("/data/unemployment.json")
      .then((res) => res.json())
      .then(setUnempData);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>US Macro Dashboard</h1>

      <h2>CPI (YoY)</h2>
      <LineChart width={800} height={300} data={cpiData}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>

      <h2>Unemployment Rate</h2>
      <LineChart width={800} height={300} data={unempData}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

export default App;
