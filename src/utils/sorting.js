export const sortByEmail = (arr) => {
    const newArr = [...arr];
    const sorter = newArr.sort((a, b) => {
        if(a.email === null || b.email === null) {
            return -2;
        }
        
        const emailA = a.email.split('@')[0];
        const emailB = b.email.split('@')[0];

        if(emailA < emailB) {
            return -1;
        } else if (emailA > emailB) {
            return 1;
        } else return 0;
    });

    return sorter;
}

export const sortByUsername = (arr) => {
    const newArr = [...arr];
    const sorter = newArr.sort((a, b) => {
        if(a.username === null || a.username === '') {
            return -2;
        } else if(a.username === null || b.username === '') {
            return -2;
        }

        const strippedA = a.username.replace("\\d");
        const strippedB = b.username.replace("\\d");

        if(strippedA < strippedB) {
            return -1;
        } else if (strippedA > strippedB) {
            return 1;
        } else return 0;
    });

    return sorter;
}

export const sortByLastName = (arr) => {
    const newArr = [...arr];
    const sorter = newArr.sort((a, b) => {
        const lNameA = a.profile.name.split(' ')[1].trim();
        const lNameB = b.profile.name.split(' ')[1].trim();

        if(lNameA < lNameB) {
            return -1;
        } else if (lNameA > lNameB) {
            return 1;
        } else return 0;
    });

    return sorter;
}

export const sortByDOB = (arr) => {
    const newArr = [...arr];
    const sorter = newArr.sort((a, b) => {
        if(a.profile.dob < b.profile.dob) {
            return -1;
        } else if (a.profile.dob > b.profile.dob) {
            return 1;
        } else return 0;
    });

    return sorter;
}

export const sortByState = (arr) => {
    const newArr = [...arr];
    const sorter = newArr.sort((a, b) => {
        const stateA = a.profile.address.split(',')[2].trim();
        const stateB = b.profile.address.split(',')[2].trim();
        if(stateA < stateB) {
            return -1;
        } else if (stateA > stateB) {
            return 1;
        } else return 0;
    });

    return sorter;
}

// need to fix up the extra logic for specific keys
export const sortByKey = (arr, key) => {
    const newArr = [...arr];
    const sorter = newArr.sort((a, b) => {
        if(a[key] < b[key]) {
            return -1;
        } else if (a[key] > b[key]) {
            return 1;
        } else return 0;
    });

    return sorter;
}
