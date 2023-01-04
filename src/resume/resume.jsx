import React, { Component } from 'react';
import { Link, Element } from 'react-scroll';
import { resume } from "./resume-data";
import Skills from "./components/skills";
import Jobs from "./components/jobs";
import Education from "./components/education";
import Summary from "./components/summary";
import { filterResume } from '../utils/utils';
import { SECTIONS, SCROLL_DUR } from '../utils/CONSTANTS';
import '../index.scss';
import './resume.scss';

class Resume extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: ''
		};
	}

	onChange = e => {
		this.setState({ filter: e.target.value });
	}

	render() {

		const { basics, skills, work, education } = resume;
		const { filter } = this.state;

		const filtered = {};
		filtered[SECTIONS.SUMMARY] = filterResume(basics.summary, filter);
		filtered[SECTIONS.SKILLS] = filterResume(skills, filter);
		filtered[SECTIONS.EXPERIENCE] = filterResume(work, filter);
		filtered[SECTIONS.EDUCATION] = filterResume(education, filter);

		return (
			<div className="resume-container">
				<nav className="page-nav">
                    <ul className="top-nav" name="top">
	                    {
	                        Object.values(SECTIONS).map( section => {
	                        	return <li key={section} >
	                        				<Link 
	                        					className={`nav-link ${!filtered[section].length ? 'disabled' : ''}`} 
	                        					to={section} 
	                        					spy={true}
	                        					smooth={true}
	                        					duration={SCROLL_DUR}>
	                        						{section}
	                        				</Link>
	                        			</li>;
	                        })
	                    }
                        <li><input placeholder="Filter Resume..." onChange={this.onChange} /></li>
                    </ul>
 	            </nav>
 	            <Element name={SECTIONS.SUMMARY}><Summary summary={filtered[SECTIONS.SUMMARY]} /></Element>
				<Element name={SECTIONS.SKILLS}><Skills skills={filtered[SECTIONS.SKILLS]} /></Element>
				<Element name={SECTIONS.EXPERIENCE}><Jobs jobs={filtered[SECTIONS.EXPERIENCE]} /></Element>
				<Element name={SECTIONS.EDUCATION}><Education education={filtered[SECTIONS.EDUCATION]} /></Element>
			</div>
		);
	}
}

export default Resume;
