import React from 'react';
import CohortDetails from './CohortDetails';
import './App.css';

function App() {
  const cohorts = [
    { name: 'Java Full Stack', startDate: '01-01-2023', endDate: '01-07-2023', status: 'ongoing' },
    { name: 'DotNet Full Stack', startDate: '01-08-2022', endDate: '01-02-2023', status: 'completed' },
    { name: 'React Frontend', startDate: '15-05-2023', endDate: '15-08-2023', status: 'ongoing' }
  ];

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <h1>Ongoing and Completed Cohorts</h1>
      {cohorts.map((cohort, index) => (
        <CohortDetails 
          key={index}
          name={cohort.name}
          startDate={cohort.startDate}
          endDate={cohort.endDate}
          status={cohort.status}
        />
      ))}
    </div>
  );
}

export default App;
