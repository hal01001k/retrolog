import React, { Component } from 'react';
import Header from './HeaderComponent'
import About from "./AboutComponent";
import Home from "./HomeComponent";
import Footer from "./FooterComponent"
import { Switch, Route, Redirect} from "react-router-dom";
class Main extends Component {
    render() {
        const HomePage = () => {
            return(
                <Home />
            );
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component= {HomePage} />
                    <Route path ='/aboutus' component={ About }/>
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
