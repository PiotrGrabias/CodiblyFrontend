import {
  faSun,
  faCloud,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faBolt,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

export const mapWeatherCodeToIcon = (code) => {
  if (code === 0) return faSun;              
  if (code <= 2) return faCloud;               
  if (code <= 48) return faSmog;               
  if (code <= 57) return faCloudRain;         
  if (code <= 65) return faCloudShowersHeavy;  
  if (code <= 75) return faSnowflake;          
  if (code <= 95) return faBolt;              
  return faCloud;                              
};
