import { useState } from "react";

function AddForm(props) {
    const activityArr = props.activityArr;
    const setactivityArr = props.setactivityArr;
    const [newActivity, setnewActivity] = useState("")

    function handleChange(event) {
        setnewActivity(event.target.value)
        
    }
    function handleAdd() {
        setactivityArr([...activityArr, { id: activityArr.length + 1, activity: newActivity }])
        setnewActivity("");
    }
    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-medium">Manage Your Activity</h1>
            <div>
                <input value={newActivity} type="text" placeholder="Enter Next Activity" className="border border-black bg-transparent p-1" onChange={handleChange} />
                <button className="bg-black text-white p-1 border border-black" onClick={handleAdd}>Add</button>
            </div>
        </div>
    )
}
export default AddForm