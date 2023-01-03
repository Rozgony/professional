import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { SCROLL_DUR } from '../../utils/CONSTANTS';
import './../../App.scss';
import './../resume.scss';

class SectionHeader extends Component {

	scrollToTop = () => {
	    scroll.scrollToTop({duration: SCROLL_DUR});
	}
	
	render() {
		const { name, startDate, endDate } = this.props;

		return (
			<header>
				<h3>{name}</h3>
				{ 	
					startDate && endDate ?
						<div className="date">{startDate} to {endDate}</div> : 
						<button className="to-top" onClick={this.scrollToTop}>&#8676;</button>
            	}
			</header>	               
		);
	}
}

export default SectionHeader;
