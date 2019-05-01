const weatherConditions = [
  {
    "main": "Thunderstorm",
    "id": 200,
    "short_description": "Light Thunderstorms",
    "description": "thunderstorm with light rain",
    "day_icon_class": "wi-day-storm-showers",
    "night_icon_class": "wi-night-alt-storm-showers"
  },
  {
    "main": "Thunderstorm",
    "id": 201,
    "short_description": "Thunderstorms",
    "description": "thunderstorm with rain",
    "day_icon_class": "wi-day-thunderstorm",
    "night_icon_class": "wi-night-alt-thunderstorm"
  },
  {
    "main": "Thunderstorm",
    "id": 202,
    "short_description": "Heavy Thunderstorms",
    "description": "thunderstorm with heavy rain",
    "day_icon_class": "wi-day-thunderstorm",
    "night_icon_class": "wi-night-alt-thunderstorm"
  },
  {
    "main": "Thunderstorm",
    "id": 210,
    "short_description": "Light Thunderstorms",
    "description": "light thunderstorm",
    "day_icon_class": "wi-day-storm-showers",
    "night_icon_class": "wi-night-alt-storm-showers"
  },
  {
    "main": "Thunderstorm",
    "id": 211,
    "short_description": "Thunderstorms",
    "description": "thunderstorm",
    "day_icon_class": "wi-day-thunderstorm",
    "night_icon_class": "wi-night-alt-thunderstorm"
  },
  {
    "main": "Thunderstorm",
    "id": 212,
    "short_description": "Severe Thunderstorms",
    "description": "heavy thunderstorm",
    "day_icon_class": "wi-day-thunderstorm",
    "night_icon_class": "wi-night-alt-thunderstorm"
  },
  {
    "main": "Thunderstorm",
    "id": 221,
    "short_description": "Scattered Thunderstorms",
    "description": "ragged thunderstorm",
    "day_icon_class": "wi-day-thunderstorm",
    "night_icon_class": "wi-night-alt-thunderstorm"
  },
  {
    "main": "Thunderstorm",
    "id": 230,
    "short_description": "Light Thunderstorms",
    "description": "thunderstorm with light drizzle",
    "day_icon_class": "wi-day-storm-showers",
    "night_icon_class": "wi-night-alt-storm-showers"
  },
  {
    "main": "Thunderstorm",
    "id": 231,
    "short_description": "Light Thunderstorms",
    "description": "thunderstorm with drizzle",
    "day_icon_class": "wi-day-storm-showers",
    "night_icon_class": "wi-night-alt-storm-showers"
  },
  {
    "main": "Thunderstorm",
    "id": 232,
    "short_description": "Light Thunderstorms",
    "description": "thunderstorm with heavy drizzle",
    "day_icon_class": "wi-day-thunderstorm",
    "night_icon_class": "wi-night-alt-thunderstorm"
  },
  {
    "main": "Drizzle",
    "id": 300,
    "short_description": "Possible Showers",
    "description": "light intensity drizzle",
    "day_icon_class": "wi-day-showers",
    "night_icon_class": "wi-night-alt-showers"
  },
  {
    "main": "Drizzle",
    "id": 301,
    "short_description": "Showers",
    "description": "drizzle",
    "day_icon_class": "wi-day-showers",
    "night_icon_class": "wi-night-alt-showers"
  },
  {
    "main": "Drizzle",
    "id": 302,
    "short_description": "Showers",
    "description": "heavy intensity drizzle",
    "day_icon_class": "wi-day-showers",
    "night_icon_class": "wi-night-alt-showers"
  },
  {
    "main": "Drizzle",
    "id": 310,
    "short_description": "Possible Showers",
    "description": "light intensity drizzle rain",
    "day_icon_class": "wi-day-showers",
    "night_icon_class": "wi-night-alt-showers"
  },
  {
    "main": "Drizzle",
    "id": 311,
    "short_description": "Showers",
    "description": "drizzle rain",
    "day_icon_class": "wi-day-showers",
    "night_icon_class": "wi-night-alt-showers"
  },
  {
    "main": "Drizzle",
    "id": 312,
    "short_description": "Showers",
    "description": "heavy intensity drizzle rain",
    "day_icon_class": "wi-day-showers",
    "night_icon_class": "wi-night-alt-showers"
  },
  {
    "main": "Drizzle",
    "id": 313,
    "short_description": "Showers",
    "description": "shower rain and drizzle",
    "day_icon_class": "wi-day-showers",
    "night_icon_class": "wi-night-alt-showers"
  },
  {
    "main": "Drizzle",
    "id": 314,
    "short_description": "Showers",
    "description": "heavy shower rain and drizzle",
    "day_icon_class": "wi-day-showers",
    "night_icon_class": "wi-night-alt-showers"
  },
  {
    "main": "Drizzle",
    "id": 321,
    "short_description": "Showers",
    "description": "shower drizzle",
    "day_icon_class": "wi-day-showers",
    "night_icon_class": "wi-night-alt-showers"
  },
  {
    "main": "Rain",
    "id": 500,
    "short_description": "Rain",
    "description": "light rain",
    "day_icon_class": "wi-day-rain",
    "night_icon_class": "wi-night-alt-rain"
  },
  {
    "main": "Rain",
    "id": 501,
    "short_description": "Rain",
    "description": "moderate rain",
    "day_icon_class": "wi-day-rain",
    "night_icon_class": "wi-night-alt-rain"
  },
  {
    "main": "Rain",
    "id": 502,
    "short_description": "Heavy Rain",
    "description": "heavy intensity rain",
    "day_icon_class": "wi-day-rain",
    "night_icon_class": "wi-night-alt-rain"
  },
  {
    "main": "Rain",
    "id": 503,
    "short_description": "Heavy Rain",
    "description": "very heavy rain",
    "day_icon_class": "wi-day-rain",
    "night_icon_class": "wi-night-alt-rain"
  },
  {
    "main": "Rain",
    "id": 504,
    "short_description": "Heavy Rain",
    "description": "extreme rain",
    "day_icon_class": "wi-day-rain",
    "night_icon_class": "wi-night-alt-rain"
  },
  {
    "main": "Rain",
    "id": 511,
    "short_description": "Freezing Rain",
    "description": "freezing rain",
    "day_icon_class": "wi-day-rain",
    "night_icon_class": "wi-night-alt-rain"
  },
  {
    "main": "Rain",
    "id": 520,
    "short_description": "Rain",
    "description": "light intensity shower rain",
    "day_icon_class": "wi-day-rain",
    "night_icon_class": "wi-night-alt-rain"
  },
  {
    "main": "Rain",
    "id": 521,
    "short_description": "Rain",
    "description": "shower rain",
    "day_icon_class": "wi-day-rain",
    "night_icon_class": "wi-night-alt-rain"
  },
  {
    "main": "Rain",
    "id": 522,
    "short_description": "Heavy Rain",
    "description": "heavy intensity shower rain",
    "day_icon_class": "wi-day-rain",
    "night_icon_class": "wi-night-alt-rain"
  },
  {
    "main": "Rain",
    "id": 531,
    "short_description": "Scattered Showers",
    "description": "ragged shower rain",
    "day_icon_class": "wi-day-rain",
    "night_icon_class": "wi-night-alt-rain"
  },
  {
    "main": "Snow",
    "id": 600,
    "short_description": "Light Snow",
    "description": "light snow",
    "day_icon_class": "wi-day-snow",
    "night_icon_class": "wi-night-alt-snow"
  },
  {
    "main": "Snow",
    "id": 601,
    "short_description": "Snow",
    "description": "Snow",
    "day_icon_class": "wi-day-snow",
    "night_icon_class": "wi-night-alt-snow"
  },
  {
    "main": "Snow",
    "id": 602,
    "short_description": "Heavy Snow",
    "description": "Heavy snow",
    "day_icon_class": "wi-day-snow",
    "night_icon_class": "wi-night-alt-snow"
  },
  {
    "main": "Snow",
    "id": 611,
    "short_description": "Sleet",
    "description": "Sleet",
    "day_icon_class": "wi-day-rain-mix",
    "night_icon_class": "wi-night-alt-rain-mix"
  },
  {
    "main": "Snow",
    "id": 612,
    "short_description": "Mixed Snow and Sleet",
    "description": "Light shower sleet",
    "day_icon_class": "wi-day-rain-mix",
    "night_icon_class": "wi-night-alt-rain-mix"
  },
  {
    "main": "Snow",
    "id": 613,
    "short_description": "Mixed Snow and Sleet",
    "description": "Shower sleet",
    "day_icon_class": "wi-day-rain-mix",
    "night_icon_class": "wi-night-alt-rain-mix"
  },
  {
    "main": "Snow",
    "id": 615,
    "short_description": "Mix",
    "description": "Light rain and snow",
    "day_icon_class": "wi-day-rain-mix",
    "night_icon_class": "wi-night-alt-rain-mix"
  },
  {
    "main": "Snow",
    "id": 616,
    "short_description": "Mix",
    "description": "Rain and snow",
    "day_icon_class": "wi-day-rain-mix",
    "night_icon_class": "wi-night-alt-rain-mix"
  },
  {
    "main": "Snow",
    "id": 620,
    "short_description": "Mix",
    "description": "Light shower snow",
    "day_icon_class": "wi-day-rain-mix",
    "night_icon_class": "wi-night-alt-rain-mix"
  },
  {
    "main": "Snow",
    "id": 621,
    "short_description": "Mix",
    "description": "Shower snow",
    "day_icon_class": "wi-day-rain-mix",
    "night_icon_class": "wi-night-alt-rain-mix"
  },
  {
    "main": "Snow",
    "id": 622,
    "short_description": "Mix",
    "description": "Heavy shower snow",
    "day_icon_class": "wi-day-rain-mix",
    "night_icon_class": "wi-night-alt-rain-mix"
  },
  {
    "main": "Mist",
    "id": 701,
    "short_description": "Mist",
    "description": "mist",
    "day_icon_class": "wi-day-sleet",
    "night_icon_class": "wi-night-alt-sleet"
  },
  {
    "main": "Smoke",
    "id": 711,
    "short_description": "Smoke Advisory",
    "description": "Smoke",
    "day_icon_class": "wi-smoke",
    "night_icon_class": "wi-smoke"
  },
  {
    "main": "Haze",
    "id": 721,
    "short_description": "Haze Advisory",
    "description": "Haze",
    "day_icon_class": "wi-day-haze",
    "night_icon_class": "wi-night-fog"
  },
  {
    "main": "Dust",
    "id": 731,
    "short_description": "Dust Advisory",
    "description": "sand/ dust whirls",
    "day_icon_class": "wi-sandstorm",
    "night_icon_class": "wi-sandstorm"
  },
  {
    "main": "Fog",
    "id": 741,
    "short_description": "Fog",
    "description": "fog",
    "day_icon_class": "wi-day-fog",
    "night_icon_class": "wi-night-fog"
  },
  {
    "main": "Sand",
    "id": 751,
    "short_description": "Sand",
    "description": "sand",
    "day_icon_class": "wi-sandstorm",
    "night_icon_class": "wi-sandstorm"
  },
  {
    "main": "Dust",
    "id": 761,
    "short_description": "Dust Advisory",
    "description": "dust",
    "day_icon_class": "wi-sandstorm",
    "night_icon_class": "wi-sandstorm"
  },
  {
    "main": "Ash",
    "id": 762,
    "short_description": "Volcanic Ash Advisory",
    "description": "volcanic ash",
    "day_icon_class": "wi-volcano",
    "night_icon_class": "wi-volcano"
  },
  {
    "main": "Squall",
    "id": 771,
    "short_description": "Squall Advisory",
    "description": "squalls",
    "day_icon_class": "wi-cloudy-gusts",
    "night_icon_class": "wi-cloudy-gusts"
  },
  {
    "main": "Tornado",
    "id": 781,
    "short_description": "Tornado Advisory",
    "description": "tornado",
    "day_icon_class": "wi-tornado",
    "night_icon_class": "wi-tornado"
  },
  {
    "main": "Clear",
    "id": 800,
    "short_description": "Clear Sky",
    "description": "clear sky",
    "day_icon_class": "wi-day-sunny",
    "night_icon_class": "wi-night-clear"
  },
  {
    "main": "Clouds",
    "id": 801,
    "short_description": "Moderately Cloudy",
    "description": "few clouds: 11-25%",
    "day_icon_class": "wi-day-cloudy",
    "night_icon_class": "wi-night-alt-cloudy"
  },
  {
    "main": "Clouds",
    "id": 802,
    "short_description": "Scattered Clouds",
    "description": "scattered clouds: 25-50%",
    "day_icon_class": "wi-day-cloudy",
    "night_icon_class": "wi-night-alt-cloudy"
  },
  {
    "main": "Clouds",
    "id": 803,
    "short_description": "Cloudy",
    "description": "broken clouds: 51-84%",
    "day_icon_class": "wi-cloudy",
    "night_icon_class": "wi-cloudy"
  },
  {
    "main": "Clouds",
    "id": 804,
    "short_description": "Cloudy",
    "description": "overcast clouds: 85-100%",
    "day_icon_class": "wi-cloudy",
    "night_icon_class": "wi-cloudy"
  }
];

export default weatherConditions;
