import React, { Component } from 'react';
import { TOPICS } from './../../utils/CONSTANTS';
import { gridItemClasses } from './../../utils/utils';
import './../timeline.scss';

class TimelineGrid extends Component {

	render() {
		const { items, contClasses, openModal } = this.props;

		if (!items) return null;
		
		return (
				<div className={`timeline-cont ${contClasses}`}>
					{
						['2021','2020','2015','2010','2005','2000'].map( year => {
							return <label key={year} className={`label label-${year} left`}>{year}</label>;
						})
					}
					{
						!items || items.map( (item,i) => {
							return <div 
									key={i}
									onClick={() => openModal(item)} 
									className={gridItemClasses(item)}
									style={{display: item.display}}>
										<div className="col-label">{item.label}</div>
										<div className="col-container">
											{
												Object.values(TOPICS).map( topic => {
													return (!topic || <div 
																		key={topic} 
																		className={`col ${topic.toLowerCase()}-col`} 
																		style={{width: (item.topics[topic]?.amount || 0)+'%'}}>
				 															<div className="pattern"/>
				 													</div>);
												})
											}
 										</div>
									</div>;
						})
					}
				</div>
			);
	}
};

export default TimelineGrid;