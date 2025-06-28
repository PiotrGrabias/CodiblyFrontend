import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mapWeatherCodeToIcon } from "../assets/WeatherIcons";

export default function Table({ data }) {
  return (
    <div className="overflow-x-auto mt-6 bg-white dark:bg-gray-700 rounded-lg shadow p-4">
      <table className="min-w-full table-auto border-1 border-gray-800 text-sm">
        <thead className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200">
          <tr>
            <th className="px-4 py-2">Data</th>
            <th className="px-4 py-2">Max Temp (°C)</th>
            <th className="px-4 py-2">Min Temp (°C)</th>
            <th className="px-4 py-2">Energia solarna (kWh)</th>
            <th className="px-4 py-2">Pogoda</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100">
          {data.map((day, idx) => {
            const icon = mapWeatherCodeToIcon(day.weather_code);
            return (
              <tr key={idx} className="border-t border-gray-200 dark:border-gray-600 text-center">
                <td className="px-4 py-3">{format(new Date(day.date), "dd/MM/yyyy")}</td>
                <td className="px-4 py-3">{day.temp_max}°</td>
                <td className="px-4 py-3">{day.temp_min}°</td>
                <td className="px-4 py-3">{day.solar_energy} kWh</td>
                <td className="px-4 py-3 text-xl text-center">
                  {icon ? <FontAwesomeIcon icon={icon} /> : "—"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
