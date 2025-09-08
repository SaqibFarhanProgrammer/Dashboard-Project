"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcncomponenets/ui/card"
import { Input } from "@/shadcncomponenets/ui/input"
import { Button } from "@/shadcncomponenets/ui/button"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function WeatherPage() {
  const [city, setCity] = useState("Karachi")
  const [weather, setWeather] = useState<any>(null)
  const [forecast, setForecast] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const API_KEY = "d0a919ed17ad7bcc10a6eb58d0cef1f8"

  const fetchWeather = async (query: string) => {
    setLoading(true)
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
      )
      const data = await res.json()
      setWeather(data)

      const resForecast = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${API_KEY}&units=metric`
      )
      const dataForecast = await resForecast.json()

      const chartData = dataForecast.list.slice(0, 8).map((item: any) => ({
        time: new Date(item.dt * 1000).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        temp: item.main.temp,
        humidity: item.main.humidity,
      }))
      setForecast(chartData)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWeather(city)
  }, [])

  const chartData = {
    labels: forecast.map((f) => f.time),
    datasets: [
      {
        label: "Temperature (°C)",
        data: forecast.map((f) => f.temp),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        tension: 0.3,
      },
      {
        label: "Humidity (%)",
        data: forecast.map((f) => f.humidity),
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        tension: 0.3,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  }

  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl font-bold mb-6">🌤 Weather Dashboard</h1>

      <div className="flex gap-2 mb-6 w-full">
        <Input
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button onClick={() => fetchWeather(city)} disabled={loading}>
          {loading ? "Loading..." : "Search"}
        </Button>
      </div>

      {weather && weather.main ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>{weather.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">🌡 Temp: {weather.main.temp}°C</p>
                <p className="text-lg">
                  Condition: {weather.weather[0].description}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>💧 Humidity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">
                  {weather.main.humidity}%
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>🌬 Wind</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">{weather.wind.speed} m/s</p>
              </CardContent>
            </Card>
          </div>

          <Card className="h-[400px]">
            <CardHeader>
              <CardTitle>📈 Next 24h Forecast</CardTitle>
            </CardHeader>
            <CardContent className="h-full">
              <Line data={chartData} options={chartOptions} />
            </CardContent>
          </Card>
        </>
      ) : (
        <p className="text-red-500">City not found!</p>
      )}
    </div>
  )
}
