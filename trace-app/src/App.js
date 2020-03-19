import React,{Component} from 'react';
import './App.css';
import PureComponent from './components/PureComponent'
import ClassComponent from './components/ClassComponent';

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      main_component : ""
    }
  }

  switch_component = (val) => {    
    switch (val) {
      case "pure_component":
        return <PureComponent/>      
      case "class_component":
        return <ClassComponent/>      
    }
  }


  handleClick = (comp) => {
    let main_component = this.switch_component(comp);

    this.setState({
      main_component
    });

  }

  render = () =>{
    let {main_component} = this.state;

    return (
      <div className="App">        
        <div>
          <button onClick={(e) => this.handleClick("pure_component")}> Pure component </button>
          <button onClick={(e) => this.handleClick("class_component")}> Class component </button>          
        </div>      
        <div>
            {main_component}
        </div>
      </div>
    );
  }  
}
