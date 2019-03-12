import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>
const URL = () => <a  href='https://www.yelp.com/writeareview/biz/yfuIKwjKbQpJ0MKq55q7mA?return_url=%2Fbiz%2FyfuIKwjKbQpJ0MKq55q7mA&source=biz_details_war_button'
                                      download="Test.pdf">Excellent</a>

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path="/" component={URL}/>
                    <Route exact path={"/surveys"} component={Dashboard}/>
                    <Route path={'/surveys/new'} component={SurveyNew}/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;