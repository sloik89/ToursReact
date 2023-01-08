import "./App.css";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const handleTour = (id) => {
    setTours(tours.filter((item) => item.id !== id));
    console.log(id);
  };
  const fetchTours = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTours(data);
    setLoading(false);
  };
  console.log(tours);
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <button onClick={() => fetchTours()} className="btn-load">
        Load Content
      </button>
    );
  }
  return (
    <div className="App">
      <Tours tours={tours} click={handleTour} />
    </div>
  );
}

export default App;
