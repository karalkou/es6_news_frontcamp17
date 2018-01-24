import React, { Component } from 'react';
import {customImageUrl, dateOptions} from './../../config';
import styled from 'styled-components';
import bemto from 'bemto-components';

const NewsListItemStyled = styled(bemto('li', {
    content: [
        {
            elem: 'img',
            children: true
        },
        {
            elem: 'wrapper',
            children: true,
            content: [
                {
                    elem: 'header',
                    children: true,
                    content: {
                        elem: 'date',
                    }
                },
                {
                    elem: 'data',
                    children: true,
                    content: [
                        {
                            elem: 'content',
                            children: true,
                            content: [
                                {
                                    elem: 'author'
                                },
                                {
                                    elem: 'title'
                                },
                                {
                                    elem: 'description'
                                },
                                {
                                    elem: 'button'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})).attrs({
    className: "news-list-item"
})`
list-style: none;

&__img {
  background-image: url( ${(props) => props.__img.url} )
}
&__wrapper {
    position: relative;
    padding: 0 15px;
    min-height: 400px;
    overflow: hidden;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);
    background-color: transparent;
    z-index: 2;
    }
`;

class NewsListItem extends Component {
    static propTypes = {};
    static defaultProps = {};

    state = {};

    render() {
        const {newsItem} = this.props;
        const {urlToImage, title, publishedAt, description, author, url} = newsItem;
        const formattedPublishedAt = new Date(publishedAt).toLocaleString("en", dateOptions);

        return (
            <NewsListItemStyled
                __img={{ url: (urlToImage || customImageUrl) } }
                __date={ `${formattedPublishedAt}` }
                __author={ `${author}` }
                __title={ `${title}` }
                __description={ `${description}` }
                __button={{ content: 'Read more', props: { href: url } }}
            />
        )
    }
}

export default NewsListItem;