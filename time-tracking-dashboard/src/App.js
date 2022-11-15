
import { useState, useEffect } from 'react';
import './App.css';
import Header  from './Components/Header';
import ActivityCard from './Components/ActivityCard';

const App = () => {

  const DEFAULT_TIMEFRAME = "daily"

  const [data, setData] = useState([])
  const [timeframe, setTimeframe] = useState(DEFAULT_TIMEFRAME)

  useEffect(() => {
    fetch("./data.json")
    .then(res => res.json())
    .then(data => setData(data))
  }, [])

  const activityCardElements = data.map(activity => (
    <ActivityCard 
      key={activity.title} 
      data={activity}
      timeframe={timeframe}
    />))

  return (
    <div className="container">
      <Header 
        defaultTimeframe={DEFAULT_TIMEFRAME}
        changeTimeframe={setTimeframe}
      />
      <main>
        {activityCardElements}
      </main>
    </div>
  );
}

export default App;
