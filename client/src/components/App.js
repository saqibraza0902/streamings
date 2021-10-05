import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streamings/StreamCreate';
import StreamDelete from './streamings/StreamDelete';
import StreamEdit from './streamings/StreamEdit';
import StreamList from './streamings/StreamList';
import StreamShow from './streamings/StreamShow';
import Header from './Header';
import history from '../history';


const App =()=>{
    return(
        <div className="ui container">
            <Router history={history}>
            <div>
            <Header />
            <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" component={StreamCreate} />
            <Route path="/streams/edit/:id" component={StreamEdit} />
            <Route path="/streams/delete/:id" component={StreamDelete} />
            <Route path="/streams/:id" component={StreamShow} />
            </Switch>
            </div>
            </Router>
        </div>
    )
};

export default App;