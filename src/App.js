import React from 'react';
import routes from './routes';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {ReactComponent as Loader} from "./assets/img/audio.svg";
import './assets/styles/main.css'

class App extends React.Component {
    state = {
        loading: true
    };

    componentDidMount() {
        demoAsyncCall().then(() => this.setState({loading: false}));
    }

    render() {
        const {loading} = this.state;

        if (loading) {
            return (
                
                <div className="loader-container">
                    <div className="loader"></div>
                    <div className="loader-description"><span
                        >TEDx</span> is loading...
                    </div>
                 
                </div>
            )
        }

        return (
            // router must be fixed

            <Router>
                <Switch>
                    {routes.map((route) => {
                        return <Route {...route} />;
                      }
                    )}
                </Switch>
            </Router>
        );
    }
}

function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 4000));
}

export default App;