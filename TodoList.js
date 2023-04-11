import { React, useState } from "react";

const TodoList = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  function addActivity() {
    setListData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");

      return updatedList;
    });
  }
  function remove(i) {
    const updatedList = listData.filter((element, id) => {
      return i != id;
    });
    setListData(updatedList);
  }
  return (
    <>
      <div className="container">
        <div className="header">TODO List</div>
        <input
          type="text"
          placeholder="Add activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p className="ListHead">Here is your List :-{")"}</p>
        {listData !== [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listData">{data}</div>
                  <div>
                    <button onClick={() => remove(i)} className="btn2">
                      Remove
                    </button>
                  </div>
                </p>
              </>
            );
          })}
      </div>
    </>
  );
};

export default TodoList;
