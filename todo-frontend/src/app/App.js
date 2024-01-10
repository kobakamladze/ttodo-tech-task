import "./App.css";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import TASK_STATUS from "../utils/task-status";

import Layout from "../layouts/main.layout";
import AuthPage from "../pages/auth/auth.page";
import CardsPage from "../pages/cards/cards.page";

// react-query client
const queryClient = new QueryClient();

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<AuthPage />} />
      <Route path="tasks" element={<CardsPage />} />
      {/* <Route path="*" element={<Error />} /> */}
    </Route>
  )
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={appRouter} />;
    </QueryClientProvider>
  );
}

export default App;
