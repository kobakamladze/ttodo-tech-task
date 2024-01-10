import { useState } from "react";

import TASK_STATUS from "../utils/task-status";
import CustomLabel from "./custom-label.component";
import { CUSTOM_INPUT_STYLE } from "../utils/custom-label-classname";
import getUser from "../utils/get-user";

const CardForm = (props) => {
  const taskData = props?.taskData;
  console.log(taskData);

  const [title, setTitle] = useState(taskData?.title ?? "");
  const [description, setDescription] = useState(taskData?.description ?? "");
  const [status, setStatus] = useState(
    taskData?.status ?? TASK_STATUS.inProgress
  );

  return (
    <div className="p-4 my-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmitAction({
            body: {
              title,
              description,
              status,
              userId: getUser()?.id,
              todoId: taskData?.id,
            },
          });
          props.setModalContent(null);
        }}
      >
        <div className="flex flex-col">
          <CustomLabel forValue="title">Title: </CustomLabel>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={CUSTOM_INPUT_STYLE}
            required
          />
        </div>
        <br></br>
        <div className="flex flex-col">
          <CustomLabel forValue="description">Description: </CustomLabel>
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`${CUSTOM_INPUT_STYLE} overflow-y-scroll h-[10rem]`}
          />
        </div>
        <br></br>
        <div>
          <CustomLabel forValue="Progress">Progress: </CustomLabel>

          <select
            name="taskState"
            id="tasState"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className={CUSTOM_INPUT_STYLE}
          >
            <option value={TASK_STATUS.inProgress}>
              {TASK_STATUS.inProgress}
            </option>
            <option value={TASK_STATUS.done}>{TASK_STATUS.done}</option>
            <option value={TASK_STATUS.cancelled}>
              {TASK_STATUS.cancelled}
            </option>
          </select>
        </div>
        <input
          type="submit"
          value="Submit"
          className="mt-8 bg-transparent hover:bg-blue-500 text-blue-300 font-semibold hover:text-white py-2 px-[3rem] border hover:cursor-pointer border-blue-500 hover:border-transparent rounded"
        />
      </form>
    </div>
  );
};

export default CardForm;
