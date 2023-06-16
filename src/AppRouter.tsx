import { Outlet, createBrowserRouter } from "react-router-dom";
import { Content, Footer, Header } from "@/containers";
import { Board, Question, NoMatch } from "@/pages";

const CommonRoute = () => {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <CommonRoute />,
    children: [
      {
        path: "",
        element: <Board />,
      },
      {
        path: "/question/:id",
        element: <Question />,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
]);

export default AppRouter;