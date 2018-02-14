// there are 2 ways to set default propertis in functional components: using 
// defaultProps object as in ES6 or setting default property values

import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

const percentToDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
	return percentToDecimal(total/goal)
}

export const SkiDayCount = ({total = 50, powder = 10, 
							backcountry = 15, goal = 75}) => (
		<div className="ski-day-count">
			<div className="total-days">
				<span>{total}</span>
					<Calendar />
				<span>days</span>
			</div>
			<div className="powder-days">
				<span>{powder}</span>
					<SnowFlake />
				<span>days</span>
			</div>
			<div className="backcountry-days">
				<span>{backcountry}</span>
					<Terrain />
				<span>days</span>
			</div>
			<div>
				<span>
					{calcGoalProgress(
						total, 
						goal
					)}
				</span>
			</div>
		</div>
)

// validation için (type ve required) default propların burada deklare edilmesi daha doğru(?)
//SkiDayCount.defaultProps = {
//  total: 50,
//  powder: 10,
//  backcountry: 15,
//  goal: 75
//}


// alt: fonksiyonlar component içinde olabilir:
// export const SkiDayCount = ({total = 50, powder = 10, 
// 							backcountry = 15, goal = 75}) => {

// 	const percentToDecimal = (decimal) => {
// 		return ((decimal * 100) + '%')
// 	}

// 	const calcGoalProgress = (total, goal) => {
// 		return percentToDecimal(total/goal)
// 	}

// 	return (
// 		<div className="ski-day-count">
// 			<div className="total-days">
// 				<span>{total}</span>
// 					<Calendar />
// 				<span>days</span>
// 			</div>
// 			<div className="powder-days">
// 				<span>{powder}</span>
// 					<SnowFlake />
// 				<span>days</span>
// 			</div>
// 			<div className="backcountry-days">
// 				<span>{backcountry}</span>
// 					<Terrain />
// 				<span>days</span>
// 			</div>
// 			<div>
// 				<span>
// 					{calcGoalProgress(
// 						total, 
// 						goal
// 					)}
// 				</span>
// 			</div>
// 		</div>
// )}

