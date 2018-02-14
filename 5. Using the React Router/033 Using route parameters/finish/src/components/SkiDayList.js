import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import { SkiDayRow } from './SkiDayRow'
import { PropTypes } from 'react'
import { Link } from 'react-router'

// we are wrapping SkiDayList component since we set variables as well
export const SkiDayList = ({days, filter}) => {
// filters days based on it's backcountry day or powder day (specified by links below)
  const filteredDays = (!filter || 
  		!filter.match(/powder|backcountry/))? // null returned if there is no match
  		days:
  		days.filter(day => day[filter]) // returns array of objects with same day

  return (
  	<div className="ski-day-list">
	<table>
		<thead>
			<tr>
				<th>Date</th>
				<th>Resort</th>
				<th>Powder</th>
				<th>Backcountry</th>
			</tr>
			<tr>
				<td colSpan={4}>
					<Link to="/list-days">
						All Days
					</Link>
					<Link to="/list-days/powder">
						Powder Days
					</Link>
					<Link to="/list-days/backcountry">
						Backcountry Days
					</Link>
				</td>
			</tr>
		</thead>
		<tbody>
			{filteredDays.map((day, i) =>
				<SkiDayRow key={i}
						   {...day}/>	
				)}
		</tbody>
	</table>
	</div>
  )
}  

SkiDayList.propTypes = {
	days: function(props) {
		if(!Array.isArray(props.days)) {
			return new Error(
				"SkiDayList should be an array"	
				)
		} else if(!props.days.length) {
			return new Error(
				"SkiDayList must have at least one record"
				)
		} else {
			return null
		}
	}
}













