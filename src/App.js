import React, { useEffect, useState } from "react";
import CardContainer from "./Components/CardContainer";
import ScaleLoader from "react-spinners/ScaleLoader";
function App() {
  const [redditData, setRedditData] = useState([]);
  const [loading, setLoading] = useState(true);
  const override = {
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#61045F",
    margin: "auto",
    inset: 0,
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://www.reddit.com/r/reactjs.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setRedditData(result?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);

        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <ScaleLoader
          color="white"
          loading={loading}
          size={80}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <>
      <h1 className="heading">Reddit Data</h1>
      <CardContainer {...redditData} />
    </>
  );
}

export default App;
