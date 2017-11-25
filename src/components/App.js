import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import NewsListPage from './routes/NewsListPage';

class App extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <Route path = '/' component = {NewsListPage}/>
            </div>
        )
    }
}

export default App;