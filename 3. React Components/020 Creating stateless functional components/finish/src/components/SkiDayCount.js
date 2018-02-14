// *stateles functional components is similar to how we use es6 functions, and can modify them.
// when using stateless functional components methods are written as functions on their 
// own (  we can delete this part from class syntax: '{   render() {   return' keeping only 
// paranthesis; we can even delete paranthesis after return sta; or we can keep this part 
// {   return ( if we are not only going to return jsx expression  )
// secondly since we dont use this kw we either write 'props' as param or use relevant object keys*

import '../stylesheets/ui.scss' // import { Component } from 'react' removed

const percentToDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
	return percentToDecimal(total/goal)
}

// {total, powder, backcountry, goal} yerine props denip
// taglerde props.total, props.powder vs denebilirdi
export const SkiDayCount = ({total, powder, backcountry, goal}) => (
		<div className="ski-day-count">
			<div className="total-days">
				<span>{total}</span>
				<span>days</span>
			</div>
			<div className="powder-days">
				<span>{powder}</span>
				<span>days</span>
			</div>
			<div className="backcountry-days">
				<span>{backcountry}</span>
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
