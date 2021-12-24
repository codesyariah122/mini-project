import {CheckWeatherByCity, DailyWeatherByCity} from '../Configs/index.js'

export const HomePageWebsite = (req, res) => {
	const context = {
		title: 'Dana Bagus Indonesia',
		description: 'mini-test-web-developer',
		author: "DanaBagusIndonesia",
		og: {
			canonical: 'https://danabagus.id/',
			meta_desc: 'Dana Bagus Indonesia',
			meta_key: 'Dana Bagus Indonesia',
			title: "Dana Bagus Indonesia | Mini::Test",
			desc: "Dana Bagus Indonesia",
			url: "https://danabagus.id/",
			image: "https://danabagus.id/static/website/img/DB-bg-hometop.jpg?99548907c718",
		},

		config: {
			apiKey: process.env.API_KEY,
			keyValidation: process.env.KEYVALID
		},
		
		base_url: process.env.BASE_URL
	}
	res.render('pages/home', context)
}


export const CheckWeather = async(req, res) => {
	const apiKey = req.params.apiKey
	const city = req.params.city
	const keyValidation = req.params.keyValid
	const keySource = 'DWE9OTCjOS2gjDalZGIKSRvJhzeIcoK1'

	// console.log(keySource)

	// console.log(`${apiKey}, ${city}, ${keyValidation}`)

	try{
		if(keyValidation === keySource){
			res.json({
				success: true,
				message: 'Success fetch weather data',
				data: await CheckWeatherByCity(apiKey, city)
			})
		}else{
			res.json({
				success: false,
				message: 'Failed to fetch weather data'
			})
		}
	}catch(err){
		res.json({
			error: true,
			message: 'Error fetch weather data by a city',
			data: err.message
		})
	}
}

export const DailyWeather = async(req, res) => {
	const apiKey = req.params.apiKey
	const lat = req.params.lat
	const lon = req.params.lon
	const keyValidation = req.params.keyValid
	const keySource = 'DWE9OTCjOS2gjDalZGIKSRvJhzeIcoK1'

	// console.log(`${apiKey}, ${lat}-${lon}, ${keyValidation}`)

	try{
		if(keyValidation === keySource){
			res.json({
				success: true,
				message: 'Success fetch weather data',
				data: await DailyWeatherByCity(apiKey, lat, lon)
			})
		}else{
			res.json({
				success: false,
				message: 'Failed to fetch weather data'
			})
		}
	}catch(err){
		res.json({
			error: true,
			message: 'Error fetch weather data by a city',
			data: err.message
		})
	}
}