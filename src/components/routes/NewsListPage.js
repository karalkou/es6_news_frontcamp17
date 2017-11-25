import React, { Component } from 'react';
import NewsList from '../news/NewsList';

class NewsListPage extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <NewsList/>
            </div>
        )
    }
}

export default NewsListPage;