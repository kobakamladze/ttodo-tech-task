import React from "react";

import CardForm from "./card-form.component";
import { QueryClient, useMutation } from "react-query";
import { deleteTodosRequest, editTodoRequest } from "../queries";
import getUser from "../utils/get-user";

const Card = ({ taskData, setModalContent }) => {
  const editTodoMutation = useMutation({
    mutationFn: editTodoRequest,
    onSuccess: () =>
      QueryClient.invalidateQueries({ queryKey: ["todos.fetch"] }),
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodosRequest,
    onSuccess: () =>
      QueryClient.invalidateQueries({ queryKey: ["todos.fetch"] }),
  });

  return (
    <div className="flex flex-col mx-auto text-base justify-between min-h-[250px] min-w-[23rem] py-6 px-4 bg-[#282c34] rounded-lg text-white">
      <div className="mb-2">
        <span className="text-xl font-bold">{taskData.title}</span>
        {taskData?.description ? (
          <>
            <div>
              <span className="font-bold">Description:</span>
            </div>
            <div className="max-h-[7rem] mt-3 pr-2 text-[1.3rem] overflow-y-scroll">
              <textarea
                value={taskData.description}
                className="leading-5 mt-2 font-thin text-lg bg-transparent min-w-[100%] min-h-[6rem]"
              ></textarea>
            </div>
          </>
        ) : null}
      </div>

      <div>
        <div className="text-left my-4">
          <span className="font-thin">
            <span className="font-bold">Status:</span> {taskData.status}
          </span>
        </div>
        <div className="flex justify-between">
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-300 font-semibold hover:text-white py-2 px-[3rem] border border-blue-500 hover:border-transparent rounded"
            onClick={() =>
              setModalContent(
                <CardForm
                  setModalContent={setModalContent}
                  onSubmitAction={editTodoMutation.mutate}
                  taskData={taskData}
                />
              )
            }
          >
            Edit
          </button>
          <button
            onClick={() =>
              deleteTodoMutation.mutate({
                todoId: taskData.id,
                userId: getUser()?.id,
              })
            }
            className="bg-transparent hover:bg-blue-500 text-blue-300 font-semibold hover:text-white py-2 px-[3rem] border border-blue-500 hover:border-transparent rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
