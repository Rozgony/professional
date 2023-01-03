import React, { Component } from 'react';
import './../../App.scss';
import './../resume.scss';
import SectionHeader from './SectionHeader';

class Skills extends Component {
	
	render() {
		const { skills } = this.props;

		return (
			<article className="resume-section">
				{ 
					(skills && skills.length > 0) ? (
						<div>
							<SectionHeader name="Skills"/>
			                { skills.map((skill,i) => {
				                	return <ul className="skills-list" key={i}>
					                    <li><b>{skill.name}: </b> 
					                    	{!skill.keywords || skill.keywords.map((word,ii) => {
					                    			return <span key={ii}>{word} </span>
					                    		})
					                    	}
					                    </li>
					                </ul>
			                	})
			                }
			            </div>
	                ) : null
				}
			</article>
		);
	}
}

export default Skills;
