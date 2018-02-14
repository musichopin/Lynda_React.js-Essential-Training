import { Component } from 'react'// import React from 'react' was more generic
import '../stylesheets/ui.scss'

// we used es6 class syntax
export class SkiDayCount extends Component { // extends React.Component was more generic
	percentToDecimal(decimal) { // alt: percentToDecimal = function(decimal) {
		return ((decimal * 100) + '%')
	}
	calcGoalProgress(total, goal) {
		return this.percentToDecimal(total/goal)
	}
	render() {
		return (
			<div className="ski-day-count">
				<div className="total-days">
					<span>{this.props.total}</span>
					<span>days</span>
				</div>
				<div className="powder-days">
					<span>{this.props.powder}</span>
					<span>days</span>
				</div>
				<div className="backcountry-days">
					<span>{this.props.backcountry}</span>
					<span>days</span>
				</div>
				<div>
					<span>
						{this.calcGoalProgress(
							this.props.total, 
							this.props.goal
						)}
					</span>
				</div>
			</div>
		)
	}
}