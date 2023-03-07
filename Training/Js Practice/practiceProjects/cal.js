const calender=document.querySelector(".calender");


const isfriday = (a)=>{
    return day % 7===6 
}

const isSunday=()=>{
    returnday % 7===1
}

for(let day=1;day<=31;day++ ){

    const friday = isfriday(day);
    const sunday = isSunday(day);
    let days=`<div class="day ${friday?"fri":""} ${sunday?"sun":""}>${day}</div>`;
    calender.insertAdjacentHTML("beforeend",`${days}`);

}