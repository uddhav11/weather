// this project only gives forecase after 3 hours gap time.

import "./forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemHeading,
} from "react-accessible-accordion";

const WeekDays=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const Forecast = ({ data }) => {
    const daysInWeek=new Date().getDay()
    const forecastDays= WeekDays.slice(daysInWeek, WeekDays.length).concat(WeekDays.slice(0, daysInWeek))

    const groupedByDay={};
    data.list.forEach(forecast=> {
        const date= new Date(forecast.dt * 1000)
        const dayofWeek= WeekDays[date.getDay()]

        if(!groupedByDay[dayofWeek]){
            groupedByDay[dayofWeek]= []
        }

        groupedByDay[dayofWeek].push(forecast)
    })

  return (
    <>
      <label htmlFor="title" className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, ).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                <img
                  src={`icons/${item.weather[0].icon}.png`}
                  alt="weather forecase" 
                  className="icon-small"
                />
                <label htmlFor="forecast" className="day">{forecastDays[index]}</label>
                <label className="description">{item.weather[0].description}</label>
                <label className="min-max">{Math.round(item.main.temp_max)}°C / {Math.round(item.main.temp_min)}°C </label>
                </div>

              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
            <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure:</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity:</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels like:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
{/* 
<label htmlFor="title" className="title">
        Daily
      </label>
      <Accordion allowZeroExpanded>
        {Object.keys(groupedByDay).map((day, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`icons/${groupedByDay[day][0].weather[0].icon}.png`}
                    alt="weather forecase"
                    className="icon-small"
                  />
                  <label htmlFor="forecast" className="day">
                    {forecastDays[index]}
                  </label>
                  <label className="description">{groupedByDay[day][0].weather[0].description}</label>
                  <label className="min-max">
                    {Math.round(groupedByDay[day][0].main.temp_max)}°C / {Math.round(groupedByDay[day][0].main.temp_min)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                {groupedByDay[day].map((forecast, idx) => (
                  <div className="daily-details-grid-item" key={idx}>
                    <label>{forecast.dt_txt}</label>
                    <label>{forecast.weather[0].description}</label>
                    <label>{Math.round(forecast.main.temp_max)}°C / {Math.round(forecast.main.temp_min)}°C</label>
                    <label>Pressure: {forecast.main.pressure}</label>
                    <label>Humidity: {forecast.main.humidity}</label>
                    <label>Clouds: {forecast.clouds.all}%</label>
                    <label>Wind speed: {forecast.wind.speed} m/s</label>
                    <label>Sea level: {forecast.main.sea_level}m</label>
                    <label>Feels like: {forecast.main.feels_like}°C</label>
                  </div>
                ))}
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion> */}
    </>
  );
};


export default Forecast;