import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NewsListPage from './routes/NewsListPage';

import './app.css';

class App extends Component {
    static propTypes = {};

    render() {
        return (
            <Route path = '/' component = {NewsListPage}/>
        )
    }
}

export default App;