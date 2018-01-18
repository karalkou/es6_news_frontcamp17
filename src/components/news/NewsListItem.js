import React, { Component } from 'react';
import {customImageUrl, dateOptions} from './../../config';

class NewsListItem extends Component {
    static propTypes = {};
    static defaultProps = {};

    state = {};

    render() {
        const {newsItem} = this.props;
        const {urlToImage, title, publishedAt, description, author, url} = newsItem;
        const formattedPublishedAt = new Date(publishedAt).toLocaleString("ru", dateOptions);

        return (
            <li className="news-list-item">
                <div className="news-list-item__img" style={{ backgroundImage: `url(${urlToImage || customImageUrl})`}}/>

                <div className="news-list-item__wrapper">
                    <div className="news-list-item__header">
                        <div className="news-list-item__date">
                            ${formattedPublishedAt}
                        </div>
                    </div>
                    <div className="news-list-item__data">
                        <div className="news-list-item__content">
                            <span className="news-list-item__author">${author}</span>
                            <h1 className="news-list-item__title"><a href="#">${title}</a></h1>
                            <p className="news-list-item__description">${description}</p>
                            <a href={url} className="news-list-item__button">Read more</a>
                        </div>
                    </div>
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