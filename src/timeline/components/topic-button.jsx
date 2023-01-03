import React, { Component } from 'react';
import './../timeline.scss';
import { toCapitalCase } from './../../utils/utils';

class TopicButton extends Component {

	render() {
		const { fitler, topic, selected } = this.props;
		return (
				<button 
					onClick={() => fitler(topic)} 
					className={`${topic.toLowerCase() || 'all'}-button selectable ${selected === topic ? ' selected' : ''}`}>
						{ toCapitalCase(topic) || 'All' }
				</button>
			);
	}
};

export default TopicButton;