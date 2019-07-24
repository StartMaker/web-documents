//modules
import React, {Component} from 'react';

//components

class Index extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div></div>
    )
  }
}

export default Index;


function createIndex(Com){
  class GaoJieComponenet extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return <Com/>
    }
  }
  return GaoJieComponenet;
}

//使用 createIndex(Index)

//高阶组件如何读取子节点