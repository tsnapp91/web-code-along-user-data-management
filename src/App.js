import React, { Fragment, useState } from "react";

import _uglyData from "./utils/uglify";
import { cleanupUndefinedKeys, cleanDates } from "./utils/data-clean";
import {
  sortByKey,
  sortByEmail,
  sortByUsername,
  sortByLastName,
  sortByDOB,
  sortByState,
} from "./utils/sorting";

import User from "./components/User";

import "./styles/App.css";

function App() {
  const [uglyData, setUglyData] = useState(_uglyData);
  const [optionsState, setOptionsState] = useState("");

  const keyCleaner = async (arr) => {
    const newData = await cleanupUndefinedKeys(arr);
    setUglyData(newData);
    return newData;
  };

  const dateCleaner = async (arr) => {
    const newData = await cleanDates(arr);
    setUglyData(newData);
    return newData;
  };

  // step 1
  const sortEmail = (arr) => {
    const newData = sortByEmail(arr);
    setUglyData(newData);
    return newData;
  };

  const sortUsername = (arr) => {
    const newData = sortByUsername(arr);
    setUglyData(newData);
    return newData;
  };

  const sortLastName = (arr) => {
    const newData = sortByLastName(arr);
    setUglyData(newData);
    return newData;
  };

  const sortDOB = (arr) => {
    const newData = sortByDOB(arr);
    setUglyData(newData);
    return newData;
  };

  const sortState = (arr) => {
    const newData = sortByState(arr);
    setUglyData(newData);
    return newData;
  };

  // step 2
  const sorter = (arr, type) => {
    let newData;
    switch (type) {
      case "email":
        newData = sortByEmail(arr);
        setUglyData(newData);
        break;
      case "username":
        newData = sortByUsername(arr);
        setUglyData(newData);
        break;
      case "lastName":
        newData = sortByLastName(arr);
        setUglyData(newData);
        break;
      case "dob":
        sortByDOB(arr);
        setUglyData(newData);
        break;
      case "state":
        sortByState(arr);
        setUglyData(newData);
        break;
      default:
        break;
    }
    return newData;
  };

  // step 3
  const sortGeneric = (arr, key) => {
    const newData = sortByKey(arr, key);
    setUglyData(newData);
    return newData;
  };

  const handleSelectChange = (e) => {
    e.preventDefault();
    setOptionsState(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    sortGeneric(uglyData, optionsState);
  };

  return (
    <Fragment>
      <h1>List of Users</h1>

      <div>
        {uglyData.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </div>

      {/* lesson 1 */}
      <div>
        <button onClick={() => keyCleaner([...uglyData])}>
          Clean undefined and empty string values
        </button>
        <button onClick={() => dateCleaner([...uglyData])}>
          Fix date values
        </button>
      </div>

      {/* lesson 2 */}
      {/* step 1 */}
      <div>
        <button onClick={() => sortEmail([...uglyData])}>
          Sort data by email
        </button>
        <button onClick={() => sortUsername([...uglyData])}>
          Sort data by username
        </button>
        <button onClick={() => sortLastName([...uglyData])}>
          Sort data by last name
        </button>
        <button onClick={() => sortDOB([...uglyData])}>
          Sort data by date of birth
        </button>
        <button onClick={() => sortState([...uglyData])}>
          Sort data by state
        </button>
      </div>

      {/* step 2 */}
      {/* <div>
        <button onClick={() => sorter([...uglyData], 'email')}>
          Sort data by email
        </button>
        <button onClick={() => sorter([...uglyData], 'username')}>
          Sort data by username
        </button>
        <button onClick={() => sorter([...uglyData], 'lastName')}>
          Sort data by last name
        </button>
        <button onClick={() => sorter([...uglyData], 'dob')}>
          Sort data by date of birth
        </button>
        <button onClick={() => sorter([...uglyData], 'state')}>
          Sort data by state
        </button>
      </div> */}

      {/* step 3 */}
      {/* <form onSubmit={onSubmit}>
        <select value={optionsState} onChange={handleSelectChange}>
          <option value=""></option>
          <option value="email">email</option>
          <option value="username">username</option>
          <option value="lastName">last name</option>
          <option value="dob">date of birth</option>
          <option value="state">state</option>
        </select>
        <button type="submit">Sort</button>
      </form> */}
    </Fragment>
  );
}

export default App;
