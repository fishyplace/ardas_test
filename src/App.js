import React, { Component } from 'react';
import './App.css';
import * as data from './assets/tasks.json';
import ExtendedList from './components/ExtendedList/ExtendedList';
import ElementEditor from './containers/ElementEditor/ElementEditor';
import { Switch, Route } from 'react-router-dom';

class App extends Component {

  state = {
    data: data.default
  }

  editEntryHandler = (id, newName) => {
    const entries = [...this.state.data];

    for(let i = 0; i < entries.length; i++) if (entries[i].id === +id) entries[i] = {...entries[i], name:newName};

    this.setState({data: entries});
  }

  render() {

    let input = null;
    if (this.state.data.length > 0) {
      input = this.state.data.filter(el => el.obj_status === 'active');
    }


    return (
      <Switch>
        <Route exact path="/" render={() => <ExtendedList data={input} />} />
        <Route path="/edit/:id" render={props => <ElementEditor {...props} data={input} editEntryHandler={this.editEntryHandler.bind(this)} />} />
      </Switch>
    );
  }
}

export default App;
