alert("what's the time");
setInterval(function()
{
    var d=new Date();
    var hh=d.getHours();
    var mm=d.getMinutes();
    var ss=d.getSeconds();
    var hrot=30*hh+mm/2;
    var mrot=6*mm;
    var srot=6*ss;
    hour.style.transform=`rotate(${hrot}deg)`;
    minutes.style.transform=`rotate(${mrot}deg)`;
    seconds.style.transform=`rotate(${srot}deg)`;
},1000);