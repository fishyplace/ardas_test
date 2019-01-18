import React from 'react';
import './ElementEditor.css';
import EditableField from './EditableField/EditableField';
import { Link } from 'react-router-dom';

const elementEditor = props => {

    const editTriggeredHandler = (id, name) => {
        props.editEntryHandler(id, name);
    }

    const {id} = props.match.params;
    const toEdit = props.data.find(el => el.id === +id);

    return (
        <div className="editor-container">
            <EditableField editEntryHandler={name => editTriggeredHandler(id, name)} name={toEdit.name}>Name : {toEdit.name}</EditableField>
            <p>Description: <br /> {toEdit.description}</p>
            <p>Estimated: {toEdit.estimated_effort}</p>
            <p>Actual: {toEdit.actual_effort}</p>
            <p>Due Date: {toEdit.due_date}</p>
            <p>Tags: {toEdit.tags ? toEdit.tags.join(' , ') : 'none'}</p>
            <Link to="/">Back</Link>
        </div>
    )
}

export default elementEditor;