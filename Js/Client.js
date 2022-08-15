let xhr=new XMLHttpRequest();
xhr.open(`GET`,`http://localhost:8888/getWeather?city=beijing`,true);
xhr.onload=function(){
    document.querySelector(`span`).innerText=JSON.parse(xhr.responseText).weather;
    console.log(xhr.responseText);
}
xhr.send();