
import { Fragment } from 'react';
import { Route, Switch} from 'react-router-dom';
import AuthForm from './components/AuthForm/AuthForm'
import ProfileForm from './components/Profile/ProfileForm';
import Layout from './components/Layout/Layout';
import StartingPageContent from './components/StartingPage/StartingPageContent';
import ForgotPassword from './components/ForgotPassword/ForgotPassword'


import React from "react";
import './components/AuthForm/Dark_lightMode.css'




function App() {

  return (
    <Fragment>
      <div>
      <Layout/>
      <Switch>
        <Route path="/" exact>
          <AuthForm />
        </Route>
        <Route path="/login">
          <AuthForm />
        </Route>
        <Route path="/home">
          <StartingPageContent />
        </Route>
        <Route path="/profile">
          <ProfileForm />
        </Route>
        <Route path="/forgot">
          <ForgotPassword/>
        </Route>
      </Switch>
      </div>
    </Fragment>
  );
}

export default App;

