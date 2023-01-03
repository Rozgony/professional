import React, { Component } from 'react';

class SoundCloud extends Component {
	render() {
		const { fileId, title } = this.props;
		
		if (!fileId) return null;
		return (
			<div>
				{ !title || <label htmlFor={title}> {title} </label> }
				<div className="iframe-container">
					<iframe title={title || 'soundcloud'} name={title || 'soundcloud'} width="100%" height="20" scrolling="no" frameBorder="no" allow="autoplay" src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+fileId+"&color=%23ff5500&inverse=false&auto_play=false&show_user=false&show_artwork=false"}></iframe>
				</div>
			</div>
		);
	}
}

export default SoundCloud;
