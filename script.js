const endDate = "10 October 2023 2:40 pm"
document.getElementById('end-date').innerText= endDate;
let inputs=document.querySelectorAll('input');
function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff =(end - now)/1000 ;
     
    if(diff<0)return;

    // convert
    const day= Math.floor(diff/3600/24);
    const hours= Math.floor(diff/ 3600  % 24);
    const minutes= Math.floor(diff/ 60  % 60);
    const seconds= Math.floor(diff % 60);
    inputs[0].value=day;
    inputs[1].value=hours;
    inputs[2].value=minutes;
    inputs[3].value=seconds;
   
}

clock()

setInterval(
    function(){
        clock()
    },
    1000
)