import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";
import Map from "./components/Map";
import SummaryFooter from "./components/SummaryFooter";

function App() {
  const [coordinates, setCoordinates] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [summaryData, setSummaryData] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleLocationFound = (latlng) => {
    setCoordinates(latlng);
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const enableDark = saved === "dark" || (!saved && prefersDark);

    setIsDarkMode(enableDark);
    document.documentElement.classList.toggle("dark", enableDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setCoordinates({ latitude, longitude });
    });
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetch(
        `https://codiblybackend.onrender.com/forecast/${coordinates.latitude}/${coordinates.longitude}`
      )
        .then((res) => res.json())
        .then((data) => setWeatherData(data));

      fetch(
        `https://codiblybackend.onrender.com/summary/${coordinates.latitude}/${coordinates.longitude}`
      )
        .then((res) => res.json())
        .then((data) => setSummaryData(data));
    }
  }, [coordinates]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🌦️ Prognoza pogody – 7 dni</h1>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-700 border-black text-black dark:text-white rounded shadow hover:bg-gray-400 dark:hover:bg-gray-600 transition"
        >
          {isDarkMode ? "☀️ Tryb jasny" : "🌙 Tryb ciemny"}
        </button>
      </header>

      {weatherData ? (
        <>
          <Table data={weatherData.forecast} />
          <SummaryFooter data={summaryData} />
        </>
      ) : (
        <p className="text-center mt-10 text-black dark:text-white">
          Ładowanie danych pogodowych…
        </p>
      )}

      {!coordinates && (
        <p className="text-center mt-4 text-sm text-white bg-yellow-600 p-2 rounded shadow">
          Nie udostępniłeś lokalizacji – wybierz miejsce na mapie lub zezwól na
          lokalizację klikając obok URL strony.
        </p>
      )}

      <div className="flex justify-center mt-4">
        <div className="w-500 h-200 px-4">
          <Map
            position={
              coordinates ? [coordinates.latitude, coordinates.longitude] : null
            }
            onLocationFound={handleLocationFound}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
