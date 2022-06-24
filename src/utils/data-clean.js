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
