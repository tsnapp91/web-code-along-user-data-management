export const sortByUsername = (arr) => {
  const newArr = [...arr];
  const sorter = newArr.sort((a, b) => {
    if (a.username === null || a.username === "") {
      return -2;
    } else if (a.username === null || b.username === "") {
      return -2;
    }

    let strippedA = a.username;
    let strippedB = b.username;

    if (strippedA < strippedB) {
      return -1;
    } else if (strippedA > strippedB) {
      return 1;
    } else return 0;
  });

  return sorter;
};

export const sortByLastName = (arr) => {
  const newArr = [...arr];
  const sorter = newArr.sort((a, b) => {
    const lNameA = a.profile.name.split(" ")[1].trim();
    const lNameB = b.profile.name.split(" ")[1].trim();

    if (lNameA < lNameB) {
      return -1;
    } else if (lNameA > lNameB) {
      return 1;
    } else return 0;
  });

  return sorter;
};

export const sortByDOB = (arr) => {
  const newArr = [...arr];
  const sorter = newArr.sort((a, b) => {
    if (a.profile.dob < b.profile.dob) {
      return -1;
    } else if (a.profile.dob > b.profile.dob) {
      return 1;
    } else return 0;
  });

  return sorter;
};

export const sortByState = (arr) => {
  const newArr = [...arr];

  const sorter = newArr.sort((a, b) => {
    const stateA = a.profile.address.split(",")[2].trim();
    const stateB = b.profile.address.split(",")[2].trim();
    if (stateA < stateB) {
      return -1;
    } else if (stateA > stateB) {
      return 1;
    } else return 0;
  });

  return sorter;
};

// IMPLEMENT IN 1.1 STEP 2
// export const sortByEmail = (arr) => {
//   const newArr = [...arr];

//   return returnVal;
// };
// IMPLEMENT IN 1.1 STEP 2

// IMPLEMENT IN 1.1 STEP 3
export const sortByEmail = (arr) => {
  const newArr = [...arr];

  const filtered = [];
  const empty = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].email === null) {
      empty.push(newArr[i]);
    } else {
      filtered.push(newArr[i]);
    }
  }

  const sorter = filtered.sort((a, b) => {
    if (a.email !== null && b.email !== null) {
      const emailA = a.email.split("@")[0] || null;
      const emailB = b.email.split("@")[0] || null;

      if (emailA < emailB) {
        return -1;
      } else if (emailA > emailB) {
        return 1;
      } else return 0;
    }
  });

  const returnVal = [...empty, ...sorter];

  return returnVal;
};
// IMPLEMENT IN 1.1 STEP 3

// IMPLEMENT IN 1.1 STEP 4
export const sortByKey = (arr, key) => {
  let returnVal;
  switch (key) {
    case "email":
      returnVal = sortByEmail(arr);
      break;
    case "username":
      returnVal = sortByUsername(arr);
      break;
    case "lastName":
      returnVal = sortByLastName(arr);
      break;
    case "dob":
      returnVal = sortByDOB(arr);
      break;
    case "state":
      returnVal = sortByState(arr);
      break;
    default:
      returnVal = arr;
      break;
  }

  return returnVal;
};
// IMPLEMENT IN 1.1 STEP 4
