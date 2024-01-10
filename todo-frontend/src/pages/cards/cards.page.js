import "./task-list.css";

import React, { useState } from "react";
import Card from "../../components/card.component";

import ModalWindow from "../../components/modal.component";
import CardForm from "../../components/card-form.component";
import { QueryClient, useMutation, useQuery } from "react-query";
import { createTodoRequest, fetchTodosRequest } from "../../queries";
import Spinner from "../../components/spinner.component";
import getUser from "../../utils/get-user";

const CardsPage = () => {
  // if there is any content for modal window it becomes visible
  const [modalContent, setModalContent] = useState(null);

  const { data: taskList, isLoading } = useQuery({
    queryKey: "todos.fetch",
    queryFn: () => fetchTodosRequest(JSON.parse(getUser()?.id)),
  });

  const createTodoMutation = useMutation({
    mutationFn: createTodoRequest,
    onSuccess: () =>
      QueryClient.invalidateQueries({ queryKey: ["todos.fetch"] }),
  });

  return (
    <>
      <div className="flex justify-center pt-2 my-4">
        <button
          onClick={() =>
            setModalContent(
              <CardForm
                setModalContent={setModalContent}
                onSubmitAction={createTodoMutation.mutate}
              />
            )
          }
          className="hover:bg-transparent bg-blue-500 hover:text-blue-300 font-semibold text-white py-2 px-[3rem] border hover:border-blue-500 border-transparent rounded"
        >
          Add new
        </button>
      </div>
      {isLoading ? (
        <Spinner />
      ) : taskList?.data?.length > 0 && !taskList.error ? (
        <div className="cards-catalog p-4">
          {taskList?.data?.map((taskData) => (
            <Card
              key={Math.random()}
              setModalContent={setModalContent}
              taskData={taskData}
            />
          ))}
        </div>
      ) : (
        <p className="text-3xl my-10 text-center">no tasks</p>
      )}
      {modalContent ? (
        <ModalWindow setModalContent={setModalContent}>
          {modalContent}
        </ModalWindow>
      ) : null}
    </>
  );
};

export default CardsPage;
