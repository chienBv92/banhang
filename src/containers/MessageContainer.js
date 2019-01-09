import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types'
import Message from '../component/Main/Message/Message';

class MessageContainer extends Component {

    render() {
        var { message } = this.props;
        return (
            // lấy dữ liệu sau đó đưa vào component
            <Message message={message}>

            </Message>
        );
    }
}

MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
}

const mapStateToProp = state => {
    return {
        message: state.message
    }
}
export default connect(mapStateToProp, null)(MessageContainer);


