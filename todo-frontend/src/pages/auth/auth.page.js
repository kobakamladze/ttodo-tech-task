import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

import { CUSTOM_INPUT_STYLE } from "../../utils/custom-label-classname";
import { loginRequest } from "../../queries";
import getUser from "../../utils/get-user";

const AuthPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [error, setError] = useState(false);

  const loginMutation = useMutation({
    mutationFn: loginRequest,
    onSuccess: ({ data }) => {
      localStorage.setItem(
        "user",
        JSON.stringify({ id: data.id, email: data.email })
      );
      return navigate("/tasks");
    },
    onError: (data) => setError(data.message),
  });

  if (getUser()) return navigate("/tasks");

  return (
    <div className="m-auto p-4 my-6 max-w-[80%] shadow-2xl rounded-sm">
      <h2 className="mb-5 text-2xl font-bold">Login or create new accout:</h2>
      <span className="pl-1 text-sm font-thin">
        Enter your e-mail. If you have no account new one will be created:
      </span>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          setError(false);
          loginMutation.mutate({ body: { email } });
        }}
      >
        <div className="flex flex-col">
          <input
            type="email"
            name="email"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            className={`${CUSTOM_INPUT_STYLE} bg-transparent placeholder:text-black-900 placeholder:text-xl`}
            required
          />
        </div>
        <br></br>

        <input
          type="submit"
          value="Auth"
          className="hover:bg-blue-500 text-blue-300 font-semibold hover:text-white py-2 px-[3rem] border hover:cursor-pointer border-blue-500 hover:border-transparent rounded"
        />
      </form>
      {error ? (
        <div className="mt-3 ml-2">
          <span className="font-bold text-sm text-red-600">{error}</span>
        </div>
      ) : null}
    </div>
  );
};

export default AuthPage;
