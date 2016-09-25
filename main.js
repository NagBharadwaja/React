import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Archives from './scripts/components/pages/Archives';
import Featured from './scripts/components/pages/Featured';
import Layout from './scripts/components/pages/Layout';
import Settings from './scripts/components/pages/Settings';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Featured}></IndexRoute>
			<Route path="archives" component={Archives}></Route>
			<Route path="settings" component={Settings}></Route>
		</Route>
	</Router>, 
document.getElementById('app'));