import "./App.css";
import InternalCss from "./InternalCss";
import Usecontext from "./Components/ReactHooks/Usecontext";
import Sample3 from "./Components/Sample3";
import UseState from "./Components/ReactHooks/UseState";
import { Appcontext } from "./Context-api/context";
import UseRefhook from "./Components/ReactHooks/UseRefhook";
import UseEffect from "./Components/ReactHooks/UseEffect";
import UseffectTask from "./Components/ReactHooks/UseffectTask";
import UseReducerHook from "./Components/ReactHooks/UseReducerHook";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UseMemo from "./Components/ReactHooks/UseMemo";
import ReactMemo from "./Components/Reactmemo/ReactMemo";
import UseCallBack from "./Components/Reactmemo/UseCallBack";
import Form from "./Components/Form";
import FormWithRef from "./Components/FormWithRef";
import ReduxApiFetch from "./Components/ReduxApiFetch";
import NewChild from "./Components/Reactmemo/NewChild";
import Usenavigate from "./Components/ReactRouter/Usenavigate/Usenavigate";
import RouterLink from "./Components/ReactRouter/RouterLink";
import TimeDelay from "./Components/ReactRouter/Usenavigate/TimeDelay";
import Useparams from "./Components/ReactRouter/Useparams";
import Useselctor from "./Components/Useselctor";
import ReducerContext from "./Components/ReducerContext ";
import ReducerContextProvide from "./Components/ReducerContextProvide";

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
      path: "memo",
      element: <UseMemo />,
    },
    {
      path: "react-memo",
      element: <ReactMemo />,
    },
    {
      path: "call-back",
      element: <UseCallBack />,
    },
    {
      path: "form",
      element: <Form />,
    },
    {
      path: "form-ref",
      element: <FormWithRef />,
    },
    {
      path: "redux",
      element: <ReduxApiFetch />,
    },
    {
      path: "new-child",
      element: <NewChild />,
    },
    {
      path: "use-navigate",
      element: <Usenavigate />,
    },
    {
      path:'router-link',
      element:<RouterLink/>
    },
    {
      path:'delay',
      element:<TimeDelay/>
    },
    {
      path:'use-params/:id',
      element:<Useparams/>
    },
    {
      path:'use-selector',
      element:<Useselctor/>
    },
    {
      path:'reducer-context',
      element:<ReducerContext/>
    },
    {
      path:'reducer-context-provider',
      element:<ReducerContextProvide/>
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
