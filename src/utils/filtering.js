const getKeyValue = (obj, value) => {
  return Object.keys(obj).find((key) => {
    if (typeof obj[key] !== "object") {
      console.log(obj[key]);
      return obj[key] === value;
    } else {
      console.log(obj["profile"][key]);
      return obj["profile"][key] === value;
    }
  });
};

export const filterByNameEmail = (arr, searchStr) => {
  const newArr = [...arr];
  const resultArr = [];

  for (let i = 0; i < newArr.length; i++) {
    const match = getKeyValue(newArr[i], searchStr);
    if (match !== undefined) resultArr.push(newArr[i]);
  }

  return resultArr;
};
