import React, { Component } from 'react';

class AudioPlayer extends Component {
	render() {
		const { filePath, title } = this.props;
		
		if (!filePath) return null;
		
		return (
			<div>
				{ !title || <label htmlFor={title}> {title} </label> }
				<audio controls src={filePath}>
					Your browser does not support the
            			<code>audio</code> element.
    			</audio>
			</div>
		);
	}
}

export default AudioPlayer;
