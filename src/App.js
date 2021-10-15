import React, { useState } from 'react';
import "./App.css"

const App = () => {

  const [data, setData] = useState('');
  const [item, setItems] = useState([]);

  const handleSubmit = () => {
    if (!data) {

    } else {
      setItems([data, ...item])
      setData('')
    }

  }

  // delete 
  const deleteItem =(id)=>{
       const updateItems = item.filter((val, ind)=>{
          return ind!==id;
          console.log(val);
        });
        setItems(updateItems);
  }
  // const date=new Date().toString();


  return (
    <>
      <div className="main_div">
        <h1>Developed By Sachin Using ReactJs</h1>
        <div className="todo">
          <h2 className="title">TO DO</h2>
          <div className="heading_todo">
            <div className="add_todo">
              <input type="text" placeholder="Add To-do..."
                onChange={(e) => setData(e.target.value)}
                value={data} />
              <button onClick={handleSubmit}>+</button>
            </div>
          </div>
          {/* added item */}



          {/* item? */}
          {
            item.map((val, ind) => {
              return (
                <>
                  <div className="items">
                    <ol className="items_list">
                      <div className="list">
                        <li className="lists" key={ind}>{val}</li> 
                      </div>
                      <div className="list_action">
                        <button type="submit"
                        onClick={()=>deleteItem(ind)}
                        ><span>&#128465;&#65039;</span>
                        </button>
                        {/* <button type="submit">edit</button>
                        <button type="submit">edit</button> */}
                      </div>
                    </ol>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App;
