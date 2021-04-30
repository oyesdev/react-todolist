import React from 'react';

const  TodoLists = (props) => {

    return(
        <>
            <div className="todo_style">
                <i
                    onClick={() => {
                        props.onSelect(props.id);
                    }}
                    className="fa fa-times" 
                    aria-hidden="true" 
                />
                <li> {props.text} </li>
            </div>
        </>
    )
}

export default TodoLists;