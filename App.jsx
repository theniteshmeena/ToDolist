import React, { useState } from "react";
import "./index.css";
import Todolist  from "./Todolist";


const App = ()=>{
   const [list,setList] = useState("");
   const [Items, setItems] = useState([]); 
   const itemEvent = (event)=>{
        setList(event.target.value);
    };

    const listOfItem = ()=>{
        setItems((oldItems)=>{
            return [...oldItems,list];
        })
        setList("")

    };
    const deleteItems = (id)=>{
        console.log("Deleted");
        setItems((oldItems)=>{
            return oldItems.filter((arrelem,index)=>{
                return index!==id;
            })
        })
    };
    
    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>ToDo List </h1>
                <br/>
                <input type="text" placeholder="Add a Items" 
                    onChange={itemEvent}
                    value={list}
                />
                <button onClick={listOfItem}>+</button>
                <ol>
                    {/* <li>{list}</li> */}
                    {Items.map((itemval,index)=>{
                      return <Todolist key={index} 
                      text={itemval}
                        id={index}
                        onSelect = {deleteItems}
                      /> 
                    })}
                </ol>
            </div>
        </div>

        </>
    );
}

export default App;