import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from '../WikiPage.actions.js'

class WikiPage extends React.Component {
    render () {
        return (
            <div>
                <h1>
                    WikiPage
                </h1>
            </div>
        );
    }
}

const WikiPageContainer = ReactRedux.connect(
    function (state) {return state.wiki_page},
    actions
)(WikiPage);

export default WikiPageContainer;
