import React from 'react';


class Todo extends React.Component {

    render() {
        const {id, name, isFinished} = this.props;
        return (
            <ul>
                <li>{id} {name} {isFinished}</li>
            </ul>
        )
    }

}

export default Todo