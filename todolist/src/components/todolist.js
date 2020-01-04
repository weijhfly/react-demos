import React from 'react';
import { Input, Button } from 'antd';

const { Search } = Input;

class Todolist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  UNSAFE_componentWillUpdate() {
    //console.log(this.props.todolist)
  }

  onAdd(value) {
    if(value)
    this.props.onAdd.bind(this, value)();
  }

  onDelete(index) {
    this.props.onDelete.bind(this, index)();
  }

  render() {
    let self = this;

    return (
      <div className="Todolist">
        <Search
          placeholder="add todo"
          enterButton="add"
          size="large"
          style={{ width: 500 }}
          onSearch={value => { this.onAdd(value) }}
        />

        <ul>
          {
            this.props.todolist.map(function (item, i) {
              return <li key = { i }>
                <span>{item}</span>
                <Button type="default" onClick={ self.onDelete.bind(self, i) }>delete</Button>
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}
export default Todolist;
