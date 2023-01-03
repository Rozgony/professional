import React, { Component } from 'react';
import { toCapitalCase } from './../../utils/utils';

class InfoModalActivity extends Component {
	render() {
		const { topic, title } = this.props;
		
		if (!topic || !title) return null;
		
		return <li><b>{ toCapitalCase(title) } ({topic.amount}%):</b> { topic.desc }</li>;
	}
}

export default InfoModalActivity;
