const apiKey = "0541081cff954360bf0ee033ce95d481";

const getWeather = async(city) => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then((res) => res.json())
    .then((json) => {
        return json;
    })
}

export default getWeather;

