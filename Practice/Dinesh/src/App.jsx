
import './App.css'
import Student from "./props.jsx"
import LifeCycleDemo from "./life.jsx";
import {Greet,Farewell,Clickdemo} from './Greet.jsx'
function App() {
 return(
  <>
  <Greet/>
  <Student sub="ReactJS" Age={19} name="Dinesh Reddy" access={false}/>
  <Student sub="MERN" Age={19} name="Deepak Chandra" access={true}/>
  <Student/>
    <Farewell/>
    <Clickdemo/>
  
  </>
 )
}

export default App
