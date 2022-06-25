import React, { useState } from "react";
import _uglyData from "./utils/uglify";
import { sortByKey } from "./utils/sorting";
import { cleanupUndefinedKeys, cleanDates } from './utils/data-clean';
import { filter } from "./utils/filtering";
import User from "./components/User";
import "./styles/App.css";

function App() {
  const [initialData] = useState(_uglyData);
  const [uglyData, setUglyData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [field, setField] = useState('');
  const [userCount, setUserCount] = useState(initialData.length);

  const rtt = () => {
    document.documentElement.scrollTop = 0;
  };

  const resetData = () => {
    setUglyData(initialData);
  };

  const sortGeneric = (arr, key) => {
    const newData = sortByKey(arr, key);
    setUglyData(newData);
  };

  const dateCleaner = async (arr) => {
    const newData = await cleanDates(arr);
    setUglyData(newData);
  };

  const keyCleaner = async (arr) => {
    const newData = await cleanupUndefinedKeys(arr);
    setUglyData(newData);
  };

  const searchTermSetter = (e) => {
    setSearchTerm(e.target.value);
  }

  const fieldSetter = (e) => {
    setField(e.target.value);
  }

  const search = async (e) => {
    e.preventDefault();
    const newData = await filter(uglyData, field, searchTerm);
    setUglyData(newData);
  }

  // IMPLEMENT 2.1 STEP 3
  const countUsers = (arr) => {
    const reduce = arr.reduce((accumulator) => {
      return accumulator += 1;
    }, 0);

    setUserCount(reduce);
    return reduce;
  }
  // IMPLEMENT 2.1 STEP 3

  return (
    <div className="container">
      <h1>List of Users</h1>

      <div className="button-container">
        <button onClick={() => dateCleaner([...uglyData])}>
          Fix date values
        </button>

        <button onClick={() => keyCleaner([...uglyData])}>
          Clean unformatted string values
        </button>

        <form onSubmit={search}>
          <input name="searchTerm" type="text" onChange={searchTermSetter} placeholder="Search..." />
          
          <select name="field" onChange={fieldSetter}>
            <option value="">Field</option>
            <option value="name">Name</option>
            <option value="username">Username</option>
            <option value="email">Email</option>
            <option value="company">Company</option>
            <option value="address">Address</option>
          </select>
          
          <button type="submit">Submit</button>
        </form>

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

      <div id="user-count" className="button-container">
        <h2>Users: {userCount}</h2>
        <button onClick={() => countUsers(uglyData)}>Update</button>
      </div>

      {/* IMPLEMENT 2.1 STEP 1 */}
      <div className="users-container">
        {uglyData.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </div>
      {/* IMPLEMENT 2.1 STEP 1 */}

      <p className="rtt" onClick={rtt}>
        Return to Top
      </p>
    </div>
  );
}

export default App;
