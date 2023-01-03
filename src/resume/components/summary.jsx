import React, { Component } from 'react';
import './../../App.scss';
import './../resume.scss';
import SectionHeader from './SectionHeader';

class Summary extends Component {
	render() {
		const { summary } = this.props;

		return (
			<article className="resume-section">
				{ 
					(summary && summary.length) ? (
						<div>
							<SectionHeader name="Summary"/>
			                { 
			                	summary.map( (sum,i) =>{
			                		return <div className="summary" key={i}> {sum} </div>;
			                	}) 
			            	}
		                </div>
		            ) : null 
				}
			</article>
		);
	}
}

export default Summary;