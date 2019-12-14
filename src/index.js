import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from "./components/error-boundry";
import SwapiService from "./services/swapi-services";
import { SwapiServiceProvider } from "./components/swapi-sevice-contex";

import store from './store';

const swapi = new SwapiService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <SwapiServiceProvider value={swapi}>
                <Router>
                    <App/>
                </Router>
            </SwapiServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);