import React, { Component } from 'react';
import NewsList from '../news/NewsList';

class NewsListPage extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <NewsList/>
                <div style={{textAlign: 'center'}}>
                    Thanks to <a href="https://newsapi.org/">newsapi.org</a>
                </div>

            </div>
        )
    }
}

export default NewsListPage;