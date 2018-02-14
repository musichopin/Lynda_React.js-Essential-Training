import { createClass } from 'react'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount'

export const App = createClass({
	getInitialState() {
		return {
			allSkiDays: [
			{
				resort: "Squaw Valley",
				date: new Date("1/2/2016"),
				powder: true,
				backcountry: false
			},
			{
				resort: "Kirkwood",
				date: new Date("3/28/2016"),
				powder: false,
				backcountry: false
			},
			{
				resort: "Mt. Tallac",
				date: new Date("4/2/2016"),
				powder: false,
				backcountry: true
			}
		]
		}
	},
// *filter 3 bakımdan önemli: callback filterı tanıyor, if else'de kullanılıyor, herbir 
// day objectin içindeki proplara day[filter] syntaxi ile ulaşmamızı sağlıyor*
	countDays(filter) { // amaç day objectleri gruplandırmak ve grup sayısını bulmak
		return this.state.allSkiDays.filter(function(day) {
			if(filter) { 			// alt: return filter ? day[filter] : day
				return day[filter]
			} else {
				return day
			}	
		}).length
	},
	//alt: 
	//countDays(filter) {
	//	const { allSkiDays } = this.state
	//	return allSkiDays.filter((day) => 
	//		(filter) ? day[filter] : day
	//	).length
	//},
	render() {
		return (
			<div className="app">
				<SkiDayList days={this.state.allSkiDays}/>
				<SkiDayCount total={this.countDays()}
							 powder={this.countDays(
							 		"powder"
							 	)}
							 backcountry={this.countDays(
							 		"backcountry"
							 	)}/>
			</div>
		)
	}
})




