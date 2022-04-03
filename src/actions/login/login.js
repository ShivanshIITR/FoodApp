import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
//import getNewQuote  from '../actions/quoteActions';

const LOGIN = () =>{

    return(
     <div> 
         <form action='/action_page.php' >
            <br></br> <br></br>
            <label for="uname" > Username  </label>
            <input type="text" id="uname" name="uname" ></input><br></br><br></br>
            <label for="password" > Password </label>
            <input type="text" id="password" name="passsword" minLength='8' ></input><br></br>
         </form>
        <button name='login' onClick={()=>{} }>
          Login
        </button>
        <p></p>
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

export default LOGIN;
