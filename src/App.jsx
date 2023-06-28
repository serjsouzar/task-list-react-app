import "./App.css";
import { FilteredButton } from "./components/FilteredButton";
import { Form } from "./components/Form";
import { TaskList } from "./components/TaskList";

function App(props) {

  function addTask(name){
    alert(name)
  }

  const taskList = props.tasks?.map((task) => (
    <TaskList
      name={task.name}
      completed={task.completed}
      id={task.id}
      key={task.id}
    />
  ));

  console.log(taskList);
  return (
    <div className="todoapp stack-large">
      <h1>Task List</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilteredButton />
        <FilteredButton />
        <FilteredButton />  
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
