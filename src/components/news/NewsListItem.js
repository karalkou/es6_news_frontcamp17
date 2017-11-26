import React, { Component } from 'react'

class NewsListItem extends Component {
    static propTypes = {};
    static defaultProps = {};

    state = {};

    render() {
        const {newsItem} = this.props;
        const {urlToImage, title, publishedAt, description, source, author, url} = newsItem;

        let options = {
            era: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };
        const formattedPublishedAt = new Date(publishedAt).toLocaleString("ru", options);

        return (
            <li className="news-list__item">
                <div className="news-list__item-pic">
                    <img src={urlToImage} alt=""/>
                </div>

                <div className="news-list__item-content">
                    <h4 className="news-list__item-title">{title}</h4>
                    <div className="news-list__item-date">{formattedPublishedAt}</div>
                    <p className="news-list__item-descr">{description}</p>
                    <div className="news-list__item-author">Author: {author}</div>
                    <div>Link: <a className="news-list__item-link" href={url}>{url}</a></div>
                </div>

            </li>
        )
    }
}

export default NewsListItem

   /* author: null,
    description: null,
    publishedAt: null,
    source: null,
    title: null,
    url: null,
    urlToImage: null*/