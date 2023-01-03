import React, { Component } from 'react';
import './../../App.scss';
import './../resume.scss';
import SectionHeader from './SectionHeader';

class Education extends Component {

	render() {
		const { education } = this.props;

		return (
			<article className="resume-section">
				{ 
					(education && education.length > 0) ? (
						<div className="education-container">
							<SectionHeader name="Education"/>
							{ 	
								education.map((school,i) => {
									return (
										<section key={i}>
											<SectionHeader name={school.institution} startDate={school.startDate} endDate={school.endDate}/>
											<p>
												{school.area}<br/>
												{school.studyType}
											</p>
										</section>
									);
								})
							}
						</div>
					) : null
				}
			</article>
		);
	}
}

export default Education;