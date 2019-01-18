import React from 'react';

class EditableField extends React.Component {

    state = {
        data: this.props.name,
        isEditing: false
    }

    editingHandler = () => {
        this.setState({isEditing: true});
    }

    dataUpdateHandler = e => {
        this.setState({data: e.target.value});
    }

    focusOutHandler = e => {
        fetch('http://localhost:3000', {
            method: 'PUT',
            body: 'hey'
        }).then(_ => {
            this.props.editEntryHandler(this.state.data);
            this.setState({isEditing: false});
        });
    }


    render () {

        let content = null;

        if (this.state.isEditing) {
            content = (
                <input type="text" onChange={this.dataUpdateHandler} onBlur={this.focusOutHandler} value={this.state.data}></input>
            )
        } else {
            content = (
                <label>{this.props.children}</label>
            )
        }

        return (
            <div onClick={this.editingHandler}>{content}</div>
        )
    }
}

export default EditableField;