import Router from 'express'
import {HomePageWebsite, CheckWeather, DailyWeather } from '../Controllers/ApiDataController.js'

const ApiRouter = Router()
const WebRouter = Router()


ApiRouter.get('/check/weather/:apiKey/:city/:keyValid', CheckWeather)
ApiRouter.get('/daily/weather/:apiKey/:lat/:lon/:keyValid', DailyWeather)
// WebRouter.get('*',function(req,res,next){
// 	if(req.headers['x-forwarded-proto']!='https')
// 		res.redirect('https://puji-app.herokuapp.com/'+req.url)
// 	else
// 		next() /* Continue to other routes if we're not redirecting */
// })

WebRouter.get('/', HomePageWebsite)

export {ApiRouter, WebRouter}