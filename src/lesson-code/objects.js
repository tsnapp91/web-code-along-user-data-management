// Objects Focused Lesson
// write the for... in... loop content
export const cleanupUndefinedKeys = async (arr) => {
    const returnArr = [];
    
    for(let i = 0; i < arr.length; i++) {
        // clone object so as to not directly mutate state
        const newObj = {...arr[i]};
        for(let key in newObj) {
            // exclude nested obj and irrelevant keys
            if((key === 'email' || key === 'username' || key === 'roles') && (newObj[key] === undefined || newObj[key] === '')) {
                if(key !== 'roles') {
                    newObj[key] = null;
                    // because 'roles' is an array, set to empty array rather than null
                } else newObj[key] = [];
            } else if(key === 'profile' && (newObj[key] === undefined || newObj[key] === '')) {
                // checks nested keys
                for(let profileKey in newObj[key]) {
                    if((profileKey === 'name' || profileKey === 'about' || profileKey === 'dob' || profileKey === 'address' || profileKey === 'company') && (newObj[key][profileKey] === undefined || newObj[key][profileKey] === '')) {
                        newObj[key][profileKey] = null;
                    }
                }
            }
        }

        // if date format is also good, update style to remove error color
        if(hasCorrectFormat(newObj['profile']['dob'])) {
            newObj.formatted = { color: 'black' };
        }
        returnArr.push(newObj);
    };

    return returnArr;
}
