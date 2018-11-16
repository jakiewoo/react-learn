import React from "react";
import log from '../utils/Log';
export default class Topic extends React.Component {
    constructor(props) {
        super(props);
        log.info(this.state)
    }

    componentWillMount() {
        log.info('Topic component will mount!', 'topic')
    }
    componentDidMount() {
        log.info('Topic component did mount!', 'topic');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        log.info('component did update', 'topic');
    }

    componentWillUnmount() {
        log.info('component will unmount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        log.info('component should update')
        return false;
    }

    render() {
        return (<div>topic</div>);
    }
}