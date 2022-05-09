export function getTime(date: Date = new Date()) {
    let dateString = date.toLocaleTimeString();
    let myArray = dateString.split(" ");
    const dateArray = dateString.split(":");

    const time = { value: dateArray[0] + ":" + dateArray[1], indicator: myArray[1]}
    return time;
}

export function getDate(dateInUTC: number){
    let date = new Date(dateInUTC*1000)
    let formatedDate = date.toLocaleDateString('en-us', { weekday: 'long', month: 'long', day: 'numeric'});

    return formatedDate;
}