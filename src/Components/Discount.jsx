import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Discount.css'
function Discount() { 
  const [amount,setAmount]=useState(0)
  const [discount,setDiscount] = useState(0)
  const [payment,setPayment] = useState(0)
  const [saved,setSaved] = useState(0)

  const calculate=(e)=>{
    const output=amount-discount/100*amount
    const save=amount-output
    console.log(output);
    setPayment(output);
    setSaved(save);
  }

  const reset=(e)=>{
   setAmount(0)
   setDiscount(0)
   setPayment(0)
   setSaved(0)
  }
  
  
  
  console.log(amount,discount);
  return (
    <div>
       <div className="container">
          <div className="headings">
            <h1>Discount Calculator</h1>
        </div>
        <form className='form1'>
        <div className='input'>
          <br/>
        <TextField id="outlined-basic" label="Amount" 
        onChange={(e)=>setAmount(e.target.value)}
        value={amount||""}
        variant="outlined" />
        <br/>
        <br/>
        <TextField id="outlined-basic" label="Discount%" 
        onChange={(e)=>setDiscount(e.target.value)}
        value={discount||""}
        variant="outlined" />
        </div>
        <div className='button'>
          <br/>
        <Button onClick={calculate} className='bg-danger ' variant="contained">Calculate</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button onClick={reset} className='bg-success text-white' variant="outlined">Reset</Button>
        </div>
        <div className='total'>
       <p>Amount After Discount</p>
       <h3>&#8377;{payment}</h3>
       <p>Amount Saved</p>
       <h3>&#8377;{saved}</h3>
        </div>

        </form>
        
        </div>
    </div>
  )
}

export default Discount