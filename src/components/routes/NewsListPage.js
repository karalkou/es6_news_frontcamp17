import React, { Component } from 'react'
import {connect} from 'react-redux'
// import {loadAllNews} from '../../ducks/news'

class NewsListPage extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <h2>NewsListPage</h2>
            </div>
        )
    }
}

export default connect(null, {})(NewsListPage)