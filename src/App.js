import "./App.css";
import InternalCss from "./InternalCss";
import Usecontext from "./Usecontext";
import Sample3 from "./Sample3";
import UseState from "./UseState";
import { Appcontext } from "./context";
import UseRefhook from "./UseRefhook";
import UseEffect from "./UseEffect";
import UseffectTask from "./UseffectTask";
import UseReducerHook from "./UseReducerHook";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UseState />,
    },
    {
      path: "ref",
      element: <UseRefhook />,
    },
    {
      path: "reducer",
      element: <UseReducerHook />,
    },
    {
      path: "context",
      element: <Usecontext />,
    },
    {
      path: "useffect",
      element: <UseEffect />,
    },
    {
      path: "useffecttask",
      element: <UseffectTask />,
    },
    {
      path: "sample3",
      element: <Sample3 />,
    },
    {
      path: "internalcss",
      element: <InternalCss />,
    },

    {
      path:'memo',
      element:<UseMemo/>
    },
    {
      path:"react-memo",
      element:<ReactMemo/>
    }
  ]);
  return (
    <div className="App">
      <Appcontext.Provider value={"mifthah"}>
        <RouterProvider router={router}></RouterProvider>
      </Appcontext.Provider>
    </div>
  );
}

export default App;
