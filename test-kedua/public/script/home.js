new Vue({
	el:'#home',
	data(){
		return {
			logo: '/images/logos/logo.svg',
			heros:[],			
			loading: null,
			ip: '',
			city: '',
			temp:'',
			weathers: [],
			fdays:  [],
			config: {
				apiKey: '172033330b26104e83475e409303f1d7',
				keyValid: 'DWE9OTCjOS2gjDalZGIKSRvJhzeIcoK1'
			},
			coordinates: {},
			loading_daily: null,
			test_time: moment.unix(1640318400).format('LLLL')
		}
	},

	beforMount(){
		this.getIP()
	},

	created(){
		this.getHeroData(),
		this.getLocation(this.ip)
	},

	methods: {
		getHeroData(){
			const hero = {
				'title': 'Dana Bagus Indonesia | Mini::Test',
				'desc': 'Widget cuaca kota Jakarta untuk 7 hari kedepan.'
			}

			this.heros.push(hero)
		},


		getIP(){
			axios.get('https://api.ipify.org/?format=json')
			.then(res => {
				this.ip = res.data.ip
			})
			.catch(err => {
				console.log(err.message)
			})
		},

		getLocation(ip){
			axios.get(`https://ipapi.co/${ip}/json/`)
			.then(res => {
				this.city = res.data.city
				this.coordinates.lat=res.data.latitude
				this.coordinates.lon=res.data.longitude
				this.getWeather(this.city)
			})
			.catch(err => {
				console.log(err.message)
			})
		},

		getWeather(city){
			this.loading=true
			axios.get(`/api/data/check/weather/${this.config.apiKey}/${city}/${this.config.keyValid}`)
			.then(res => {
				if(res.data.success){
					this.loading=false
					this.weathers = res.data.data.weather[0]
					this.temp = this.getCelcius(res.data.data.main.temp)
				}

			})
			.catch(err => {
				console.log(err.message)
			})
		},


		dailyWeather(param){
			this.loading_daily=true
			axios.get(`/api/data/daily/weather/${this.config.apiKey}/${param.lat}/${param.lon}/${this.config.keyValid}`)
			.then(res => {
				if(res.data.success){
					console.log(res.data)
					setTimeout(() => {
						this.loading_daily=false
						this.fdays = res.data.data.daily

					}, 1500)
					
				}
				
			})
			.catch(err => {
				console.log(err.message)
			})
		},

		formatTime(time){
			return moment.unix(time).format('LLLL')
		},

		getCelcius(num){
			num = parseFloat(num)
			return Math.ceil((num - 32) / 1.8)
		},

	}
})


new Vue({
	el: '#footer',
	data(){
		return {
			year: ''
		}
	},

	created(){
		this.GetYear()
	},

	methods: {
		GetYear(){
			const date = new Date()
			this.year = date.getFullYear()
			// console.log(this.year)
		}
	}
})