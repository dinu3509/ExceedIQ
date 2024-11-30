import React,{Component,useState} from "react";
import PropTypes from 'prop-types';

 function Student(props){
    return(

        <>
        {props.access?(
            <>
            <h1>Learning {props.sub} at XCEEDIQ.</h1>
        <h2>Name of the Student: {props.name}</h2>
        <h2>Age:{props.Age}</h2></>
        ):null}
        
        
        </>
    )
}

Student.propTypes = {
    name:PropTypes.string,
    Age:PropTypes.number,
}

Student.defaultProps ={
    name: 'Deepak Chandra',
    Age: 19,
}
export default Student;