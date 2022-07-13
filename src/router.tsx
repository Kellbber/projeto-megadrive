import { Route, Routes } from "react-router-dom";
import { RoutePath } from "types/routes";

import Home from './pages/Homepage/index'
import Login from "pages/Login";
import CreateAccount from "pages/CreateAccount";
import Profile from "pages/profiles";
import AllGames from "pages/AllGames";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.START} element={<Login/>} />
      <Route path={RoutePath.HOMEPAGE} element={<Home/>}/>
      <Route path={RoutePath.ACCOUNT} element={<CreateAccount/>}/>
      <Route path={RoutePath.PROFILE} element={<Profile/>}/>
      <Route path={RoutePath.GAMES} element={<AllGames/>}/>
    </Routes>
  );
};

export default Router;
