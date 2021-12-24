import fetch from 'node-fetch'
import axios from 'axios'

export const CheckWeatherByCity = async(apiKey, city) => {
	// console.log(`${city}, ${apiKey}`)
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
	try{
		const res = await fetch(url)
		// console.log(res)
		return res.json()
	}catch(err){
		return err
	}
}

export const DailyWeatherByCity = async(apiKey, lat, lon)  => {
	const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=${apiKey}`
	try{
		const res = await fetch(url)
		// console.log(res)
		return res.json()
	}catch(err){
		return err
	}
}


