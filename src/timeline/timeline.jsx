import React, { Component } from 'react';
import { timeline } from './timeline-data';
import { TOPICS } from './../utils/CONSTANTS';
import InfoModal from './components/info-modal';
import TimelineGrid from './components/timeline-grid';
import TopicButton from './components/topic-button';
import { Item } from './item';
import './timeline.scss';

class Timeline extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			item: new Item(),
			lineItems: timeline.items,
			contClasses: '',
			selected: 'TOPICS.CODING'
		};
	}

	openModal = (item) => {
		const initProps = {showModal: true, item};
		const endProps = {fadeIn: true};
		this.transition(initProps,10,endProps);
	}

	closeModal = () => {
		this.setState({showModal: false, fadeIn: false, item: new Item()});
	}

	fitler = (topic = '') => {
		const initProps = { 
			contClasses: this.state.contClasses.includes('fade-in') ? this.state.contClasses.replace('fade-in','fade-out') : (this.state.contClasses+' fade-out'), 
			selected: topic 
		};
		const endProps = { 
			lineItems: topic ? timeline.items.filter(item => Object.keys(item.topics).includes(topic)) : timeline.items, 
			contClasses: `${topic.toLowerCase()} fade-in` 
		};
		this.transition(initProps,250,endProps);
	}

	transition = (initProps,duration,endProps) => {
		this.setState(initProps);
		setTimeout(()=>{
			this.setState(endProps);
		},duration);
	}

	componentDidMount() {
		this.fitler(TOPICS.CODING);
	}

	render() {
		const { showModal, item, lineItems, contClasses, selected, fadeIn } = this.state;
		
		return (
			<div className="App">
				<header className="timelime-intro">
					<div className="timeline-description"> { !timeline || timeline.description } </div>
					<div className="timeline-description"> { !timeline || timeline.instructions } </div>
					<div className="key-cont"> 
						{
							Object.values(TOPICS).map((topic,i) => {
								return <TopicButton key={i} fitler={this.fitler} topic={topic} selected={selected}/>;
							})
						}
					</div>
				</header>
				<InfoModal showModal={showModal} item={item} close={this.closeModal} fadeIn={fadeIn} />
				<TimelineGrid items={lineItems} contClasses={contClasses} openModal={this.openModal} />
			</div>
		);
	}
}

export default Timeline;
