import React,{Component} from "react";
class LifeCycleDemo extends Component{
    constructor(props){
        super(props);
        this.state = {count:0};
        console.log("Constructor: Component Initialized")
    }
    componentDidMount(){
        console.log("Constructor: Component is Mounted")
    }
    componentDidUpdate(){
        console.log("Constructor: Component is Update")
    }
    componentWillUnmount(){
        console.log("Constructor: Component is UnMounted")
    }

    handleClick=()=>{
        this.setState({count:this.state.count+1})
}
render(){
return(
    <>
    <h1>Count:{this.state.count}</h1>
    <button onClick={this.handleClick}>Increment</button>
    </>
)
}}

export default LifeCycleDemo;