"use client";
import WorldMap from "react-svg-worldmap";
import Image from "next/image";



function Stats() {
  const data = [
    // russia
    { country: "es", value: 1 }, // Spain
    { country: "za", value: 2 }, 
    { country: "jo", value: 1 },//South Africa
  ];
//22
  return (
    <>
      <div className="stat-div">
        <div className="map">
          <WorldMap
            color="red"
            title="Top 10 Populous Countries"
            value-suffix="Projects"
            size="xl"
            data={data}
          />
        </div>
        <div className="stats-data">
          <h1 className="stat-title">Dashboard</h1>
          <div className="image-div">
          <Image src="/pie2.jpeg" width={350} height={350} alt="Picture" />
          </div>
          
          
        </div>
      </div>
    </>
  );
}

export default Stats;
