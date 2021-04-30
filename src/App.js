import React, {useState} from 'react';
import TodoLists from './TodoLists';
const App = () => {
    const [listItem, setListItem] = useState(" ");
    const [Items, setItems] = useState([]);

    const updateListItem = (event) => {
        setListItem(event.target.value)
    }
    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, listItem]
        })
        setListItem("");
    }
    const deleteItem = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>ToDo List</h1>
                    <br/>
                    <input
                        value={listItem}
                        onChange={updateListItem}
                        type="text" 
                        placeholder="Add a item"
                    />
                    <button onClick={listOfItems}>+</button>
                    <ol>
                        {/* <li>{listItem}</li> */}

                        {Items.map((itemVal, index) => {
                            return <TodoLists
                                key={index}
                                id = {index}
                                text={itemVal}
                                onSelect={deleteItem}
                            />
                        })}

                    </ol>
                </div>

            </div>

        </>
    );
}

export default App;