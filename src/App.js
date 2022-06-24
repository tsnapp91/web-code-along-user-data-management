import React, { useState } from "react";
import _uglyData from "./utils/uglify";
import { sortByKey } from "./utils/sorting";
import { cleanupUndefinedKeys, cleanDates } from './utils/data-clean';
import User from "./components/User";
import "./styles/App.css";

function App() {
  const [initialData] = useState(_uglyData);
  const [uglyData, setUglyData] = useState(initialData);

  const rtt = () => {
    document.documentElement.scrollTop = 0;
  };

  const resetData = () => {
    setUglyData(initialData);
  };

  const sortGeneric = (arr, key) => {
    const newData = sortByKey(arr, key);
    setUglyData(newData);
    return newData;
  };

  // IMPLEMENT IN 1.2 STEP 2
  const dateCleaner = async (arr) => {
    const newData = await cleanDates(arr);
    setUglyData(newData);
    return newData;
  };
  // IMPLEMENT IN 1.2 STEP 2

  // IMPLEMENT IN 1.2 STEP 3
  const keyCleaner = async (arr) => {
    const newData = await cleanupUndefinedKeys(arr);
    setUglyData(newData);
    return newData;
  };
  // IMPLEMENT IN 1.2 STEP 3
  
  return (
    <div className="container">
      <h1>List of Users</h1>

      <div className="button-container">
        {/* IMPLEMENT IN 1.2 STEP 2 */}
        <button onClick={() => dateCleaner([...uglyData])}>
          Fix date values
        </button>
        {/* IMPLEMENT IN 1.2 STEP 2 */}

        {/* IMPLEMENT IN 1.2 STEP 3 */}
        <button onClick={() => keyCleaner([...uglyData])}>
          Clean unformatted string values
        </button>
        {/* IMPLEMENT IN 1.2 STEP 3 */}

        <button onClick={() => resetData()}>Reset data</button>
      </div>

      <div className="button-container">
        <button onClick={() => sortGeneric([...uglyData], "email")}>
          Sort data by email
        </button>
        <button onClick={() => sortGeneric([...uglyData], "username")}>
          Sort data by username
        </button>
        <button onClick={() => sortGeneric([...uglyData], "lastName")}>
          Sort data by last name
        </button>
        <button onClick={() => sortGeneric([...uglyData], "dob")}>
          Sort data by dob
        </button>
        <button onClick={() => sortGeneric([...uglyData], "state")}>
          Sort data by state
        </button>
      </div>

      <div className="users-container">
        {uglyData.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </div>

      <p className="rtt" onClick={rtt}>
        Return to Top
      </p>
    </div>
  );
}

export default App;
