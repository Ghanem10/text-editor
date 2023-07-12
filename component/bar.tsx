import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faList } from '@fortawesome/free-solid-svg-icons';

export default function SideBar(props: any) {
    const { addInfoToList, newData } = props;

    return (
        <div className="bar">
            <button 
                className="btn-bar"
                onClick={addInfoToList}
            >
                <FontAwesomeIcon className="list-icon" icon={faList} />
                <span>Add template</span>
            </button>
            <div 
                className="edit"
            >
                {newData.map((s: string, idx: number) => (
                    <div 
                        key={idx}
                        className="edit-templates"
                    >
                        <span>{s}</span> 
                        <FontAwesomeIcon 
                            className="trash-icon" 
                            icon={faTrashAlt}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}