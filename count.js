
const daysel = document.getElementById('days');
const hoursel = document.getElementById('hours'); 
const minutesel = document.getElementById('minutes');
const secoundsel = document.getElementById('secounds');

const birthday = "7 jul 2022";


function count(){
    const bday = new Date(birthday);
    const cdate = new Date();
    const totalsec = (bday-cdate)/1000;
    
    const days = Math.floor(totalsec/3600/24);
    const hours = Math.floor(totalsec/3600) %24;
    const min = (Math.floor(totalsec/60) %60);
    const sec = Math.floor(totalsec %60);
    
    daysel.innerHTML = format(days);
    hoursel.innerHTML = format(hours);
    minutesel.innerHTML =format(min);
    secoundsel.innerHTML =format(sec);

}

function format(time){
    return time < 10 ? (`0${time}`): time ;   
}

    count();
    setInterval(count,1000);

if(bday <= cdate){
    document.getElementById('cc').innerHTML = "happy brithday";
}