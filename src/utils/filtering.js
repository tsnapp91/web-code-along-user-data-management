export const mapByKey = (arr, key, value) => {
    const newArr = [...arr];
    let isProfileKey = false;

    if(key === 'name' || key === 'company' || key === 'dob' || key === 'address') {
        isProfileKey = true;
    }

    const map = newArr.map((user) => {
        if(isProfileKey) {
            if(user['profile'][key].includes(value)) {
                return user['profile'][key];
            }
        } else {
            if(user[key].includes(value)) {
                return user[key];
            }
        }
    });

    return map;
}