import { Route, Routes } from "react-router-dom";
import { RoutePath } from "types/routes";
import Start from './pages/Start/index'
import Home from './pages/Homepage/index'
import Login from "pages/Login";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.START} element={<Start/>} />
      <Route path={RoutePath.HOMEPAGE} element={<Home/>}/>
      <Route path={RoutePath.LOGIN} element={<Login/>}/>
    </Routes>
  );
};

export default Router;
