import TodoItem from "./TodoItem"

function TodoList(props) {
    const activityArr = props.activityArr;
    const setactivityArr = props.setactivityArr;
    return (
        <div className="bg-[#BDB4EA] border rounded-md p-3 flex-grow">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            {activityArr.length===0 ?<p>You haven't added anything yet!</p>:""}
            {
                activityArr.map(function (item, index) {
                    return <TodoItem index={index} activity={item.activity} activityArr={activityArr} setactivityArr={setactivityArr} id={item.id} />
                })
            }
        </div>
    )
}
export default TodoList