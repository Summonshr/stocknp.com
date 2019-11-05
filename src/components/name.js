import React from 'react';

export default class Name extends React.Component {

    render() {
        const code = this.props.code || this.props.children;
        return <span>
                <a className="text-blue-500 text-sm inline-block" href={'/company/' + code}>{code}</a>
            </span>
    }

}