import React, { useState } from "react";

import _uglyData from "./utils/uglify";
import { cleanupUndefinedKeys, cleanDates } from "./utils/data-clean";
import {
  sortByKey,
  // sortByEmail,
  // sortByUsername,
  // sortByLastName,
  // sortByDOB,
  // sortByState,
} from "./utils/sorting";
import { filterByNameEmail } from './utils/filtering';

import User from "./components/User";

import "./styles/App.css";

function App() {
  const [initialData] = useState(_uglyData);
  const [uglyData, setUglyData] = useState(initialData);
  const [optionsState, setOptionsState] = useState("");

  const rtt = () => {
    document.documentElement.scrollTop = 0;
  }

  const resetData = () => {
    setUglyData(initialData);
  }

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
  // const sortEmail = (arr) => {
  //   const newData = sortByEmail(arr);
  //   setUglyData(newData);
  //   return newData;
  // };

  // const sortUsername = (arr) => {
  //   const newData = sortByUsername(arr);
  //   setUglyData(newData);
  //   return newData;
  // };

  // const sortLastName = (arr) => {
  //   const newData = sortByLastName(arr);
  //   setUglyData(newData);
  //   return newData;
  // };

  // const sortDOB = (arr) => {
  //   const newData = sortByDOB(arr);
  //   setUglyData(newData);
  //   return newData;
  // };

  // const sortState = (arr) => {
  //   const newData = sortByState(arr);
  //   setUglyData(newData);
  //   return newData;
  // };

  // step 2
  // const sorter = (arr, type) => {
  //   let newData;
  //   switch (type) {
  //     case "email":
  //       newData = sortByEmail(arr);
  //       setUglyData(newData);
  //       break;
  //     case "username":
  //       newData = sortByUsername(arr);
  //       setUglyData(newData);
  //       break;
  //     case "lastName":
  //       newData = sortByLastName(arr);
  //       setUglyData(newData);
  //       break;
  //     case "dob":
  //       sortByDOB(arr);
  //       setUglyData(newData);
  //       break;
  //     case "state":
  //       sortByState(arr);
  //       setUglyData(newData);
  //       break;
  //     default:
  //       break;
  //   }
  //   return newData;
  // };

  // step 3
  const sortGeneric = (arr, key) => {
    const newData = sortByKey(arr, key);
    setUglyData(newData);
    return newData;
  };

  const filterGeneric = () => {
    const newData = filterByNameEmail(uglyData, optionsState);
    setUglyData(newData);
    return newData;
  }

  const handleChange = (e) => {
    e.preventDefault();
    setOptionsState(e.target.value);
    return e.target.value;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newData = filterGeneric();
    return newData;
  }

  return (
    <div className="container">
      <h1>List of Users</h1>

      {/* comment in buttons as the associated function is worked on */}
      <div className="button-container">
        <button onClick={() => keyCleaner([...uglyData])}>
          Clean unformatted string values
        </button>

        <button onClick={() => dateCleaner([...uglyData])}>
          Fix date values
        </button>

        <form onSubmit={onSubmit}>
          {/* <select value={optionsState} onChange={handleSelectChange}>
            <option value=""></option>
            <option value="email">email</option>
            <option value="username">username</option>
            <option value="lastName">last name</option>
            <option value="dob">date of birth</option>
            <option value="state">state</option>
          </select> */}
          <input onChange={handleChange} placeholder='type here!' />
          <button type="submit">Search</button>
        </form>

        <button onClick={() => resetData()}>
          Reset data
        </button>
      </div>
{/* 
      <div className="button-container">
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
          Sort data by dob
        </button>
        <button onClick={() => sortState([...uglyData])}>
          Sort data by state
        </button>
      </div> */}

      {/* <div className="button-container">
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
          Sort data by dob
        </button>
        <button onClick={() => sorter([...uglyData], 'state')}>
          Sort data by state
        </button>
      </div> */}

      <div className="button-container">
        <button onClick={() => sortGeneric([...uglyData], 'email')}>
          Sort data by email
        </button>
        <button onClick={() => sortGeneric([...uglyData], 'username')}>
          Sort data by username
        </button>
        <button onClick={() => sortGeneric([...uglyData], 'lastName')}>
          Sort data by last name
        </button>
        <button onClick={() => sortGeneric([...uglyData], 'dob')}>
          Sort data by dob
        </button>
        <button onClick={() => sortGeneric([...uglyData], 'state')}>
          Sort data by state
        </button>
      </div>

      <div className="users-container">
        {uglyData.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </div>

      <p className="rtt" onClick={rtt}>Return to Top</p>
    </div>
  );
}

export default App;
