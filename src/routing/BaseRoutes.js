import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../screens/HomePage';
import NewsTemplate from '../screens/NewsTemplate';
import NotFound from '../screens/NotFound'
import FilterList from '../screens/FilterList';
import CountryNews from '../screens/CountryNews';


const BaseRouter = () => (
    <React.Fragment>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/filter/' component={FilterList} />
            <Route exact path='/country-news/:slug/' component={CountryNews} />
            <Route component={NotFound} />
        </Switch>

    </React.Fragment>
)
export default BaseRouter;