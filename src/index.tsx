import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Routing} from "@src/pages/routing";

// Styles
import './assets/style/index.scss';

/**
 * Render application
 */
ReactDOM.render(<Routing />, document.getElementById('app'));
