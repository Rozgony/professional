import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import './App.scss';
import Timeline from "./timeline/timeline";
import Resume from "./resume/resume";
import SiteHeader from "./SiteHeader";

function SiteHeaderWLocation() {
	let loc = useLocation(); 
	return <SiteHeader location={loc}/>;
}

class App extends Component {
	render() {
		return (
			<Router>
					<main>
						<SiteHeaderWLocation/>
						<Switch>
							<Route exact path="/" component={Timeline} />
							<Route exact path="/resume" component={Resume} />
						</Switch>
					</main>
			</Router>
		);
	}
}

export default App;
