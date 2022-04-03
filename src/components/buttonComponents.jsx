import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
//import getNewQuote  from '../actions/quoteActions';

const HeadLines = () =>{

    return(
     <div> 
        <button name='login' onClick={()=>{} }>
        Login
        </button>
        <button name='login' onClick={()=>{} }>
        Signup
        </button>
      </div>
    )
    /*const dispatch = useDispatch();
    const state = useSelector(state=> state.quote);
    console.log(state);
    return(
        <React.Fragment>
            <h3>{state}</h3>
            <br />
            <button className='getQuote' onClick={()=> dispatch(getNewQuote())}>Get Quote</button>
        </React.Fragment>
    )*/
}

export default HeadLines;
