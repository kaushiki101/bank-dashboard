import React, { useEffect, useState } from "react";
import './style.css'


function App() {
    const [quarter, setQuarter] = useState('Q1');
    const [metrics, setMetrics] = useState({});

    const fetchMetrics = async (selectedQuarter) => {
        try {
            const response = await fetch(`http://localhost:3001/api/metrics/${selectedQuarter}`);
            const data = await response.json();
            setMetrics(data);
        } catch (error) {
            console.error('Error fetching metrics:', error);
        }
    };

    useEffect(() => {
        fetchMetrics(quarter);
    }, [quarter]);

    const handleQuarterChange = (event) => {
        setQuarter(event.target.value);
    };

    return (
        <div className="container">
            <h1>SBI Metrics Dashboard</h1>
            <label>Select Quarter: </label>
            <select value={quarter} onChange={handleQuarterChange}>
                <option value="Q1">Q1</option>
                <option value="Q2">Q2</option>
                <option value="Q3">Q3</option>
                <option value="Q4">Q4</option>
            </select>

            <div className="dashboard">
                <div className="metric-container">
                    <h2 className="metric-title">Metric 1</h2>
                    <p className="metric-value">{metrics.metric1}</p>
                </div>

                <div className="metric-container">
                    <h2 className="metric-title">Metric 2</h2>
                    <p className="metric-value">{metrics.metric2}</p>
                </div>


            </div>
        </div>
    );
}

export default App;