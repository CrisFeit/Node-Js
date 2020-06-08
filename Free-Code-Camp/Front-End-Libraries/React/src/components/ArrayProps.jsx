import React , { Component } from 'react'
const List = (props) => {
  { /* change code below this line */ }
  return <p>{props.tasks.join(", ")}</p>
  { /* change code above this line */ }
};

class ArrayProps extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* change code below this line */ }
        <List tasks={["wlak dog","workout"]}/>
        <h2>Tomorrow</h2>
        <List tasks={["wlak dog","workout","walk again"]}/>
        { /* change code above this line */ }
      </div>
    );
  }
};

export default ArrayProps;
