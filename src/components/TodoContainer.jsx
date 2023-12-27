import AddForm from "./AddForm"
import TodoList from "./TodoList"
import { useState } from "react"
function TodoContainer() {
    const [activityArr, setactivityArr] = useState(
        [
            {
                id: 1,
                activity: "Go for a Walk"
            },
            {
                id: 2,
                activity: "Have a breakfast"
            }
        ]
    )
    return (
        <div >
            <div className="flex justify-between items-center gap-5 flex-wrap">
                <AddForm activityArr={activityArr} setactivityArr={setactivityArr}/>
                <TodoList activityArr={activityArr} setactivityArr={setactivityArr}/>
            </div>
        </div>
    )
}
export default TodoContainer