export const filter = (arr, field, searchStr) => {
  const basicFilter = arr.filter((item) => {
    if(field === "email" || field === "username") {
        return item[field] !== null && item[field] !== undefined && item[field] !== "" && item[field] !== [];
    } else if(field === "address" || field === "name" || field === "dob")  {
        return item.profile[field] !== null && item.profile[field] !== undefined && item.profile[field] !== "" && item.profile[field] !== [];
    }
  });

  const filteredArr = basicFilter.filter((item) => {
    switch(field) {
      case "email":
        return item.email.includes(searchStr);
      case "name":
        return item.profile.name.includes(searchStr);
      case "address":
        return item.profile.address.includes(searchStr);
      case "username":
        return item.username.includes(searchStr);
      case "company":
        return item.profile.company.includes(searchStr);
      default:
        return (item.profile.name.includes(searchStr) || item.email.includes(searchStr) || item.profile.address.includes(searchStr) || item.username.includes(searchStr) || item.profile.company.includes(searchStr));
    }
  });

  return filteredArr;
}
