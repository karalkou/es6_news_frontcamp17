import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchAllNews, newsListSelector, loadedSelector, loadingSelector} from '../../ducks/news';
import NewsListItem from './NewsListItem';
import Loader from '../common/Loader';

import './news.css';

class NewsList extends Component {
    static propTypes = {};
    static defaultProps = {};

    componentDidMount() {
        this.props.fetchAllNews()
    }

    state = {};

    render() {
        if (this.props.loading) return <Loader />;

        const {news} = this.props;
        const newsList = news.map( (entity, index) => {
            return (
                <NewsListItem newsItem={entity} key={index}/>
            );
        } );

        return (
            <ul className="news-list">
                {newsList}
            </ul>
        )
    }
}

export default connect((state) => ({
    news: newsListSelector(state),
    loading: loadingSelector(state),
    loaded: loadedSelector(state)
}), {fetchAllNews})(NewsList)