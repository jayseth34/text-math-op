import React from 'react';

const Operation = () => {
    const add = () =>{
        let inputValue = document.getElementById("num1").value; 
        let inputValue1 = document.getElementById("num2").value;
        document.getElementById("pastes").innerHTML = `The Addition of ${inputValue} and ${inputValue1} is`
        document.getElementById("paste").innerHTML = (parseInt(inputValue) + parseInt(inputValue1)); 
      }
      const subtract = () =>{
        let inputValue = document.getElementById("num1").value; 
        let inputValue1 = document.getElementById("num2").value;
        document.getElementById("pastes1").innerHTML = (`The Subtraction ${inputValue} and ${inputValue1} is`)
        document.getElementById("pastesub").innerHTML = (parseInt(inputValue) - parseInt(inputValue1)); 
      }
      const multiply = () =>{
        let inputValue = document.getElementById("num1").value; 
        let inputValue1 = document.getElementById("num2").value;
        document.getElementById("pastes2").innerHTML = (`The Multiplication ${inputValue} and ${inputValue1} is`)
        document.getElementById("pastemul").innerHTML = (parseInt(inputValue) * parseInt(inputValue1)); 
      }
      const divide = () =>{
        let inputValue = document.getElementById("num1").value; 
        let inputValue1 = document.getElementById("num2").value;
        document.getElementById("pastes3").innerHTML = (`The Division ${inputValue} and ${inputValue1} is`)
        document.getElementById("pastediv").innerHTML = (parseInt(inputValue) / parseInt(inputValue1)); 
      }
    return (
        <>
        <center>
        <div>
            <h1 className='greenary'>Math Operation</h1>
            <hr className='greenary'></hr>
            <label className='greenary mx-3 my-3'>Enter number 1: </label>
            <input classname=' whitish mx-3 ' type='number' id='num1'/><br></br><br></br>
            <label className='greenary mx-3'>Enter number 2: </label>
            <input classname=' whitish mx-3' type='number' id='num2'/><br></br>
            <button className="btn btn-success mx-2 my-3" onClick={add}>
                Add
            </button>
          <button className="btn btn-success mx-2 my-3" onClick={subtract}>
            Subtract
          </button>
          <button className="btn btn-success mx-2 my-3" onClick={multiply}>
            Multiply
          </button>
          <button className="btn btn-success mx-2 my-3" onClick={divide}>
            Divide
          </button>
          <p className='whitish' id='pastes'></p><b><p className='greenary' id='paste'></p></b>
          <p className='whitish' id='pastes1'></p><b><p className='greenary' id='pastesub'></p></b>
          <p className='whitish' id='pastes2'></p><b><p className='greenary' id='pastemul'></p></b>
          <p className='whitish' id='pastes3'></p><b><p className='greenary' id='pastediv'></p></b>
        </div>
        </center>
        </>
    );
}

export default Operation;
