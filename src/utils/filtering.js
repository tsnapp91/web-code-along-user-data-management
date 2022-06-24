// IMPLEMENT 2.1 STEP 2
export const filter = (arr, field, searchStr) => {
  const basicFilter = arr.filter((item) => {
    return item.email !== null && item.email !== undefined && item.profile.name !== null && item.profile.name !== undefined && item.profile.address !== null && item.profile.address !== undefined && item.username !== null && item.username !== undefined && item.profile.company !== null && item.profile.company !== undefined;
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
// IMPLEMENT 2.1 STEP 2
