import React, { Component } from 'react';
import './../../App.scss';
import './../resume.scss';
import SectionHeader from './SectionHeader';

class Jobs extends Component {

	render() {
		const { jobs } = this.props;
		return (
			<article className="resume-section">
				{ 
					(jobs &&jobs.length > 0) ? (
						<div className="jobs-container">
							<SectionHeader name="Experience"/>
							{ 
								jobs.map((job,i) => {
									return (
										<section key={i}>
											<SectionHeader name={job.position} startDate={job.startDate} endDate={job.endDate}/>
											<a href={job.website} target="_blank" rel="noopener noreferrer">{job.company}</a><br/>
											<p> {job.summary} </p>
											<ul>
												{ !job.highlights || job.highlights.map((highlight,i) => {
														return <li className="highlight" key={i}>&#8226; <b>{highlight.title}:</b> {highlight.des}</li>
													})
												}
											</ul>
										</section>
										);
								})
							}
						</div>
					) :null
				}
			</article>
		);
	}
}

export default Jobs;