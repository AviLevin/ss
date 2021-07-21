import { Fragment } from "react";
import Nav from "../Nav/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Athlete from "../Athelete/Athlete";
import Food from "../Food/Food";
import Music  from  "../music/music";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <Router>
        <div className={classes.container}>

        <div> <p style={{color:"white"}}> Sory.. not enough time to complete -   created by Avi levin</p></div>
          <div className={classes["main-image"]}>
            <div className={classes.main}>
              <Nav />
            </div>
          </div>




        </div>

        <Switch>
          <Route exact path="/">
            <Athlete />
          </Route>

          <Route path="/Food">
            <Food />
          </Route>

          <Route path="/Music">
            <Music />
          </Route>


          
        </Switch>
      </Router>



    </Fragment>
  );
};

export default Header;
