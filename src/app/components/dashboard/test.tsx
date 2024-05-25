"use client"
// components/ChartComponent.js
import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartContainer.current) {
      chartInstance.current = new Chart(chartContainer.current, {
        type: 'bar', // Changed this to 'bar' for a bar chart
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: 'dataset',
              data: [30000, 12000, 21000, 30000, 8500, 10000, 26000],
              backgroundColor: '#1D9BF0',
              borderColor: '#1D9BF0',
              borderWidth: 1,
              borderRadius: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (chartInstance.current) {
        chartInstance.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={chartContainer} />;
};

export default ChartComponent;
