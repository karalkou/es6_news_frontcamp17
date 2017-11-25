import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchAllNews, newsListSelector, loadedSelector, loadingSelector} from '../../ducks/news';
import NewsListItem from './NewsListItem';
import Loader from '../common/Loader';

class NewsList extends Component {
    static propTypes = {};
    static defaultProps = {};

    componentDidMount() {
        this.props.fetchAllNews()
    }

    state = {};

    render() {

        const {news, loading, loaded} = this.props;

        console.log('--- news: ', news);

        return (
            <NewsListItem/>
        )
    }
}

export default connect((state) => ({
    news: newsListSelector(state),
    loading: loadingSelector(state),
    loaded: loadedSelector(state)
}), {fetchAllNews})(NewsList)