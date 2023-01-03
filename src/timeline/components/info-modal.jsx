import React, { Component } from 'react';
import { TOPICS } from './../../utils/CONSTANTS';
import SoundCloud from './soundcloud';
import AudioPlayer from './audio-player';
import InfoModalActivity from './info-modal-activity';
import './../timeline.scss';

class InfoModal extends Component {
	render() {
		const { item, close, showModal, fadeIn } = this.props;
		
		if (!showModal) return null;
		
		const fadeClass = fadeIn ? 'fade-in' : 'fade-out';
		
		return (
			<div className={`info-modal-container ${fadeClass}`}>
				<div className={`info-modal ${fadeClass}`}>
					<h3> { item.label } <button onClick={ () => close() }>X</button></h3>
					<div>
						{ item.description }
					</div>
					{ !item.image || <div className="img-container"><img src={item.image} alt="Graph of different facilitation styles"/></div> }
					<ul>						
						{
							[TOPICS.CODING,TOPICS.SOCIAL,TOPICS.MUSIC].map( topic =>{
								return <InfoModalActivity key={topic} topic={item.topics[topic]} title={topic}/>;
							})
						}
					</ul>
					{ !item.topics[TOPICS.MUSIC]?.fileId || <SoundCloud fileId={item.topics[TOPICS.MUSIC].fileId} /> }
					{ !item.audio || item.audio.map( (audio,i) => { return !audio.filePath || <AudioPlayer key={i} filePath={audio.filePath} title={audio.title} />; } ) }
					{ (!item.audio || !item.audio.filePath) || item.audio.map( (audio,i) => { return !audio.fileId || <SoundCloud key={i} fileId={audio.fileId} title={audio.title} />; } ) }
				</div>
				<div className="info-modal-backdrop" onClick={ () => close() }/>
			</div>
		);
	}
}

export default InfoModal;