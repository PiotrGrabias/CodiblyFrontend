import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHigh, faTemperatureLow, faSun, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";

export default function SummaryFooter({ data }) {
  if (!data) return null;

  return (
    <div className="mt-6 p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-3 text-black dark:text-white">
        Podsumowanie przyszłego tygodnia
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex items-center p-3 bg-gray-100 dark:bg-gray-600 rounded">
          <FontAwesomeIcon 
            icon={faTemperatureHigh} 
            className="text-red-500 text-xl mr-3" 
          />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Maksymalna temp.</p>
            <p className="font-bold text-black dark:text-white">{data.max_temp}°C</p>
          </div>
        </div>

        <div className="flex items-center p-3 bg-gray-100 dark:bg-gray-600 rounded">
          <FontAwesomeIcon 
            icon={faTemperatureLow} 
            className="text-blue-500 text-xl mr-3" 
          />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Minimalna temp.</p>
            <p className="font-bold text-black dark:text-white">{data.min_temp}°C</p>
          </div>
        </div>

        <div className="flex items-center p-3 bg-gray-100 dark:bg-gray-600 rounded">
          <FontAwesomeIcon 
            icon={faTachometerAlt} 
            className="text-purple-500 text-xl mr-3" 
          />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Średnie ciśnienie</p>
            <p className="font-bold text-black dark:text-white">{data.avg_pressure} hPa</p>
          </div>
        </div>

        <div className="flex items-center p-3 bg-gray-100 dark:bg-gray-600 rounded">
          <FontAwesomeIcon 
            icon={faSun} 
            className="text-yellow-500 text-xl mr-3" 
          />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Średnia ekspozycja słoneczna</p>
            <p className="font-bold text-black dark:text-white">{data.avg_sunshine_duration} h</p>
          </div>
        </div>
      </div>

      {data.summary && (
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900 rounded w-115">
          <p className="text-black dark:text-white italic">{data.summary}</p>
        </div>
      )}
    </div>
  );
}