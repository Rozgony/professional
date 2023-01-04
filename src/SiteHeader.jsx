import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.scss';

class SiteHeader extends Component {

	render() {
		const { location } = this.props;
		return (
			<header className="site-header" name="top">
	            <h1>Matt Schultz</h1>
	            <div className="toggle-group">
	            	<Link className={'timeline-toggle button '+(location.pathname === '/' ? 'selected' : '')} to="/">Timeline</Link>
	            	<Link className={'resume-toggle button '+(location.pathname === '/resume' ? 'selected' : '')} to="/resume">Resume</Link>
	            </div>
	            <ul className="header-links">
		            <li><a title="Click to download Resume." href="Resume_Matthew_Schultz.pdf">Resume (PDF)</a></li>
		            <li><a title="My LinkedIn Page" href="https://www.linkedin.com/in/matthewkschultz" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
		            <li><a title="Send me an email!" href="mailto:matt@matthewkschultz.com">Email</a></li>
		            <li><a title="View the code for this site." target="_blank" href="https://github.com/Rozgony/professional" rel="noopener noreferrer">View Code</a></li>
	            </ul>
	        </header>
		);
	}
}

export default SiteHeader;