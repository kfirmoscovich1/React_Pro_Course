import React, { useEffect, useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { BsFillTelephoneFill, BsBatteryFull, BsCamera } from 'react-icons/bs'; // הוספתי גם עוד אייקונים אם תרצה

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '10px 20px',
  fontSize: '16px',
  border: 'none',
  borderRadius: '50px',
  backgroundColor: '#007bff',
  color: 'white',
  cursor: 'pointer',
};

export default function Graph() {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    const url = "https://monkeys.co.il/api2/phones/list.php";
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);

      const topEight = data
        .filter(item => item.total_score !== undefined && item.total_score !== null)
        .sort((a, b) => b.total_score - a.total_score) // ממיון הכי גבוה
        .slice(0, 8);

      const map_arr = topEight.map((item) => ({
        label: item.name,
        y: Number(item.total_score)
      }));

      setGraphData(map_arr);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const options = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Top 8 Phones by Total Score"
    },
    axisY: {
      title: "Total Score",
    },
    axisX: {
      title: "Phones",
      labelAngle: 0
    },
    data: [{
      type: "column",
      dataPoints: graphData
    }]
  };

  return (
    <div className="container" style={{ textAlign:'center' }}>
      <CanvasJSChart options={options} />

      {/* אייקונים - מתחת לגרף */}
      <div className="icon-container" style={{ display:'flex', justifyContent:'center', gap:'15px', marginTop:'20px' }}>
        
        {/* כפתור Phone */}
        <button style={buttonStyle}>
          <BsFillTelephoneFill style={{ fontSize:'20px' }} />
          Phone
        </button>

        <button style={buttonStyle}>
          <BsBatteryFull style={{ fontSize:'20px' }} />
          Battery
        </button>

        <button style={buttonStyle}>
          <BsCamera style={{ fontSize:'20px' }} />
          Camera
        </button> 
       
        
      </div>
    </div>
  );
}
