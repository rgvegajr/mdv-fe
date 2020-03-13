import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Trucks from './components/Trucks';
import Activate from './components/Activate';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/activate" exact component={Activate} />
                <Route path="/trucks" exact component={Trucks} />
            </Switch>            
        </BrowserRouter>
    );
};

export default Routes;