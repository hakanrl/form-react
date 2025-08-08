import { useState } from "react";
import TaskCreate from "./compenents/TaskCreate";
import TasksContext from "./context/task";
import { useContext } from "react";

function TaskShow({ task, onUpdate }) {
  const { deleteTaskById, editTaskById } = useContext(TasksContext);
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    deleteTaskById(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    //onUpdate(id, updatedTitle, updatedTaskDesc);
    editTaskById(id, updatedTitle, updatedTaskDesc);
  };
  console.log(task);
  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className="task-title">Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="task-update" onClick={handleEditClick}>
              Güncelle
            </button>
            <button className="task-delete" onClick={handleDeleteClick}>
              Sil
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
