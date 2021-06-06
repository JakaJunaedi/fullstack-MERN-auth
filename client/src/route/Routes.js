import React from 'react';
import { Route, Switch } from 'react-router';

import Home from "../components/home.component";
import Profile from "../components/profile.component";
import BoardUser from "../components/board-user.component";
import BoardModerator from "../components/board-moderator.component";
import BoardAdmin from "../components/board-admin.component";
import Tutor from "../components/apis/add-tutorial.component";
import ListTutor from "../components/apis/list-tutuor";
import AddTutorial from '../components/apis/add-tutorial.component';
import ResetPassword from "../components/resetpassword";
import ChangePassword from "../components/changepassword";
import Login from "../components/login.component";
import Register from "../components/register.component";
import Messenger from "../components/messenger/Messenger";
import NotFound from "../components/layout/NotFound";




//import AuthApi from "../utils/AuthApi";


function Routes() {
    return(
        <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/tutor" component={Tutor} />
            <Route path="/list" component={ListTutor} />
            <Route path="/resetpswd" component={ResetPassword} />
            <Route path="/resetpassword/:token" component={ChangePassword} />
            <Route path="/messenger" component={Messenger} />
            
            <Route path="/add" component={AddTutorial} />
        
            <Route path="*" component={NotFound} />
          </Switch>
    );
}


{/**
const Routes = [
    {
        component: Home,
        path: "/",
        
    },
    {
        component: Home,
        path:"/home",
        
    },
    {
        component: Login,
        path: "/login",
        label: "Login",
    },
    {
        component: Register,
        path: "/register",
        label: "Register",
    },
    {
        component: Profile,
        path: "/profile",
        label: "Profile",
    },
    {
        component: BoardUser,
        path: "/user",
        label: "User",
    },
    {
        component: BoardAdmin,
        path: "/admin",
        label: "Admin",
    },
    {
        component: BoardModerator,
        path: "/mod",
        label: "Moderator",
    },
    {
        component: ResetPassword,
        path: "/resetpswd",
        label: "Reset Password",
    },
    {
        component: ChangePassword,
        path: "/resetpassword/:token",
        label: "Change Password",
    },
    
    {
        component: Messenger,
        path: "/messenger",
        label: "Messanger",
    },
];
*/}

export default Routes;