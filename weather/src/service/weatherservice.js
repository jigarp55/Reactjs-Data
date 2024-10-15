export async function getWeatherdata(city) {

    let key ='21c1854eb5c8674f1e4d0bf3c9270faf';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`
    let p = await fetch(url);
    let d = await p.json();
    return d;
}