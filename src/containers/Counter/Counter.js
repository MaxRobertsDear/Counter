import React, { Component } from 'react';
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const counter = (props) => {
  // state = {
  //     counter: 0
  // }

  // counterChangedHandler = ( action, value ) => {
  //   switch ( action ) {
  //     case 'inc':
  //         this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
  //         break;
  //     case 'dec':
  //         this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
  //         break;
  //     case 'add':
  //         this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
  //         break;
  //     case 'sub':
  //         this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
  //         break;
  //   }
  // }

  // render () {
    return (
      <div>
          <CounterOutput value={props.ctr} />
          <CounterControl label="Increment" clicked={props.onIncrementCounter} />
          <CounterControl label="Decrement" clicked={props.onDecrementCounter}  />
          <CounterControl label="Add 5" clicked={props.onAddCounter}  />
          <CounterControl label="Subtract 5" clicked={props.onSubCounter}  />
          <hr />
          <button onClick={props.onStoreResult}>Store Result</button>
          <ul>
            {props.storedResults.map(strResult => (
            <li onClick={props.onDeleteResult}>{strResult}</li>
            ))}
          </ul>
      </div>
    );
  }
// }

const mapStateToProps = (state) => {
  return {
    ctr: state.counter, 
    storedResults: state.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
    onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
    onAddCounter: () => dispatch({type: 'ADD', val: 5}),
    onSubCounter: () => dispatch({type: 'SUB', val: 5}),
    onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
    onDeleteResult: () => dispatch({type: 'DELETE_RESULT'}),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(counter);