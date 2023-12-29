import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage, About, News, Recruitment, Service, Support } from "./pages";
import Login from "./pages/Login pages/Login";
import ResetPasswordForm from "./pages/Login pages/ResetPassword";
import StatsPage from "./pages/Admin pages/Statistics";
import PostOfficeMana from "./pages/Admin pages/PostOfficeMana";
import AccountMana from "./pages/Admin pages/AccountMana";
import TransBranchMana from "./pages/Admin pages/TransBranchMana";
import PostDetail from "./pages/Admin pages/PostOfficeDetail";
import HubStatsPage from "./pages/Hub leader pages/HubDashBoard";
import AccountDetail from "./pages/Admin pages/MyAccountPage";
import CreateOrders from "./pages/Hub leader pages/CreateOrders";
import NotFoundPage from "./pages/NotFoundPage";

//Bộ định tuyến của web, dùng router để trả về các element tương ứng với các path
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/recruitment",
    element: <Recruitment />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/resetPassword",
    element: <ResetPasswordForm />,
  },
  {
    path: "/admin/statistics",
    element: <StatsPage />,
  },
  {
    path: "/admin/postOfficeManagement",
    element: <PostOfficeMana />,
  },
  {
    path: "/admin/accountManagement",
    element: <AccountMana />,
  },
  {
    path: "/admin/transBranchManagement",
    element: <TransBranchMana/>,
  },
  {
    path: "/postOfficeDetail",
    element: <PostDetail/>,
  },
  {
    path: "/hubLeader/statistics",
    element: <HubStatsPage/>,
  },
  {
    path: "/createOrders",
    element: <CreateOrders/>,
  },
  {
    path: "/profile",
    element: <AccountDetail/>,
  },
  {
    path: "*", //Nếu không trùng khớp với tất cả những đường dẫn ở trên thì trả về Not Found Page
    element: <NotFoundPage/>,
  }
]);



const App = ({children}) => {
  return <RouterProvider router={router} />
}

export default App;
