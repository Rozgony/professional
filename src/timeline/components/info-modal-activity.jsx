import React, { Component } from 'react';
import { toCapitalCase } from './../../utils/utils';

class InfoModalActivity extends Component {
	render() {
		const { topic, title } = this.props;
		
		if (!topic || !title) return null;
		console.log(topic.desc);
		return <li><b>{ toCapitalCase(title) } ({topic.amount}%):</b> { 
			typeof topic.desc === 'string' ? 
				topic.desc : (
					topic.desc.map(list => {
						return <div className="modal-list" key={list.title}>
							<b>{list.title}</b>
							<br/>
							{list.des}
						</div>
					})
				)
		}</li>;
	}
}

export default InfoModalActivity;
