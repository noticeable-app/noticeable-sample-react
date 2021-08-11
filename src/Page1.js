import React from 'react';

import {config} from './config';


export default class Page1 extends React.Component {

    componentDidMount() {
        window.noticeable.render('widget', config.noticeable.newspageEmbedWidgetId, {selector: '#noticeable-newspage-embed'});
    }

    componentWillUnmount() {
        window.noticeable.destroy('widget', config.noticeable.newspageEmbedWidgetId);
    }

    render() {
        return <div id="noticeable-newspage-embed" style={{width: '100%'}}></div>;
    }

}
