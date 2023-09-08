"use client";
import WorldMap from "react-svg-worldmap";




function Stats() {
  const data = [
    // russia
    { country: "es", value: 1 }, // Spain
    { country: "za", value: 1 }, 
    { country: "jo", value: 1 },//South Africa
  ];

  return (
    <>
      <div className="stat-div">
        <div className="map">
          <WorldMap
            color="red"
            title="Top 10 Populous Countries"
            value-suffix="people"
            size="xl"
            data={data}
          />
        </div>
        <div className="stats-data">
          <h1 className="stat-title">Dashboard</h1>
          
        </div>
      </div>
    </>
  );
}

export default Stats;
