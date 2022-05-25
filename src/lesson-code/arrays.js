// Arrays Focused Content
// write hasCorrectFormat, apply it inside cleanDates
const hasCorrectFormat = (date) => {
    let dateArr;
    if(date.includes('-')) {
        dateArr = date.split('-');

        // this would be MM-DD or YYYY-MM or similar
        if(dateArr.length !== 3) {
            return false;
            // this would be non-ISO standards that still do use -
        } else if(dateArr[0].length !== 4 || dateArr[1].length !== 2 || dateArr[2].length !== 2) {
            return false;
        } else return true;
        // formats with / are incorrect
    } else if(date.includes('/')) {
        return false;
    } else return false;
}

export const cleanDates = async (arr) => {
    const returnArr = [];
    
    for(let i = 0; i < arr.length; i++) {
        // clone object so as to not directly mutate state
        const newObj = {...arr[i]};
        const dob = newObj.profile.dob;

        if((dob !== undefined || dob !== '') && hasCorrectFormat(dob) === false) {
            // could refactor this with a separator param and switch statement
            if(dob.includes('-')) {
                const dobArr = dob.split('-');

                // this logic would depend on what sort of formats are in the data, but works for our given data structure
                newObj.profile.dob = `${dobArr[2]}-${dobArr[0]}-${dobArr[1]}`;
            } else if(dob.includes('/')) {
                const dobArr = dob.split('/');

                // checks for different date string formats
                if(dobArr[0].length === 4) {
                    newObj.profile.dob = `${dobArr[0]}-${dobArr[1]}-${dobArr[2]}`;
                } else if(dobArr[2].length === 4) {
                    newObj.profile.dob = `${dobArr[2]}-${dobArr[0]}-${dobArr[1]}`;
                } else {
                    console.warn(`Setting to null due to unconvertable date. Please reset at user level.`);
                    newObj.profile.dob = null;
                }
            } else if(dob.includes(' ')) {
                const dobArr = dob.split(' ');

                // switch statement for checking month string
                switch (dobArr[0]) {
                    case "January" || "January,":
                      dobArr[0] = "01";
                      break;
                    case "February" || "February,":
                      dobArr[0] = "02";
                      break;
                    case "March" || "March,":
                      dobArr[0] = "03";
                      break;
                    case "April" || "April,":
                      dobArr[0] = "04";
                      break;
                    case "May" || "May,":
                      dobArr[0] = "05";
                      break;
                    case "June" || "June,":
                      dobArr[0] = "06";
                      break;
                    case "July" || "July,":
                      dobArr[0] = "07";
                      break;
                    case "August" || "August,":
                      dobArr[0] = "08";
                      break;
                    case "September" || "September,":
                      dobArr[0] = "09";
                      break;
                    case "October" || "October,":
                      dobArr[0] = "10";
                      break;
                    case "November" || "November,":
                      dobArr[0] = "11";
                      break;
                    case "December" || "December,":
                      dobArr[0] = "12";
                      break;
                    default:
                        console.warn(`Hit default case for month, setting DOB to null due to unconvertable date. Please reset at user level.`);
                        newObj.profile.dob = null;
                        break;
                }

                // trims off comma from Month Day, Year
                newObj.profile.dob = `${dobArr[2]}-${dobArr[0]}-${dobArr[1]}`.replace(',', '');
            } else {
                console.warn(`DOB is in unconvertable format, setting to null. Please reset at user level.`);
                newObj.profile.dob = null;
            }
        }

        // updates style to remove error color
        newObj.formatted = { color: 'black' };
        returnArr.push(newObj);
    };
    
    return returnArr;
}
