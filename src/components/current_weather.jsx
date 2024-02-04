import "./current_weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <>
      <div className="weather">
        <div className="top">
          <div>
            <p className="city-name">{data.city}</p>
            <p className="weather-discription">{data.weather[0].description}</p>
          </div>
          <img
            src={`./icons/${data.weather[0].icon}.png`}
            alt="weather image"
            className="weather-icon"
          />
        </div>
        <div className="bottom">
          <p className="temperature">{Math.round(data.main.temp)}°C</p>
          <div className="details">
            <div className="parameter-row">
              <u><span className="details">Details</span></u>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Feels Like</span>
              <span className="parameter-label">
                {Math.round(data.main.feels_like)}
              </span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Wind</span>
              <span className="parameter-label">{data.wind.speed}m/s</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Humidity</span>
              <span className="parameter-label">{data.main.humidity}%</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Pressure</span>
              <span className="parameter-label">{data.main.pressure}hpa</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
