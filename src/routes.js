import React from "react";
import { IndexRoute, /* IndexRedirect,  */Router, Route } from "react-router";
import App from "containers/App/App";
import BriefAbout from "containers/BriefAbout/BriefAbout";
// import Applications from 'containers/Applications/Applications';
// import FroDev from 'containers/FroDev/FroDev';
// import SpeedVocab from 'containers/SpeedVocab/SpeedVocab';
import Projects from "containers/Projects/Projects";
import AboutMe from "containers/AboutMe/AboutMe";
import Tutorial from "containers/Tutorial/Tutorial";

export default function createRoutes(store, history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={BriefAbout} />
        {/* <Route path="applications" component={Applications}>
          <IndexRedirect to="/applications/frodev"/>
          <Route path="frodev" component={FroDev}/>
          <Route path="speedvocab" component={SpeedVocab}/>
        </Route> */}
        <Route path="projects" component={Projects} />
        <Route path="aboutMe" component={AboutMe} />
        <Route path="tutorials" component={Tutorial} />
      </Route>
    </Router>
  );
}
