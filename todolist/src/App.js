import React from 'react';
import './App.css';
import { Layout } from 'antd';
import Home from './components/home';
import Todolist from './components/todolist';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const { Header, Footer, Content } = Layout;


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { };
  }

  UNSAFE_componentWillMount() {
    console.log('UNSAFE_componentWillMount ')
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  UNSAFE_componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  UNSAFE_componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }

  UNSAFE_shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true;
  }

  UNSAFE_componentDidCatch() {
    console.log('componentDidCatch')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  render() {
    return (
      <Router>
        <div className="App">
        <Layout>
          <Header>Header</Header>
          <Content>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/Todolist">
                <Todolist 
                todolist = { this.props.todolist } 
                onAdd = { this.props.onAdd }
                onDelete = { this.props.onDelete } />
              </Route>
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
        </div>
      </Router>
    );
  }
}

export default App;