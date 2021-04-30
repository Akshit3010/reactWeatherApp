import React ,{useState} from "react";

const DateAndTime =()=>{
    let time=new Date().toLocaleTimeString();
    
    const [ctime , setCtime] = useState(time);

    let currentTime= new Date();
    var weekday = new Array(7);
     weekday[0] = "Sunday";
    weekday[1] = "Monday"; 
     weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
   weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    let day=weekday[currentTime.getDay()];

    let months=[
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    let now = new Date();
    let month = months[now.getMonth()];
    let date=now.getDate();

   


    setInterval(() => {
        time=new Date().toLocaleTimeString();
        setCtime(time); 
    }, 1000);

    return (
        <>
       {day} | {month} {date} | {ctime}
       
        </>
    );
}
export default DateAndTime;