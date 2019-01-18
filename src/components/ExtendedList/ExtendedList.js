import React from 'react';
import './ExtendedList.css';
import { Link } from 'react-router-dom';

const extendedList = props => {
    const {data} = props;
    let toDisplay = null;

    if (data.length !== 0) {
        toDisplay = data.map(el => (
            <tr key={el.id} className={el.is_high_priority ? 'important' : null}>
                <td>
                    <Link to={`/edit/${el.id}`}>
                        {el.name}
                    </Link>
                </td>
                <td>{el.estimated_effort}</td>
                <td>{el.actual_effort}</td>
                <td>{el.due_date ? new Date(el.due_date).toString().split(/[0-9]+:[0-9]+:[0-9]+/)[0] : null}</td>
                <td>{el.tags ? el.tags.join(' , ') : 'none'}</td>
            </tr>
            )
        )
    }

    return (
        <div className="ext-list">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Estimated</th>
                        <th>Actual</th>
                        <th>Due Date</th>
                        <th>Tags</th>
                    </tr>
                </thead>
                <tbody>
                    {toDisplay}
                </tbody>
            </table>
        </div>
    )
}

export default extendedList;