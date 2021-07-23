import React, { useEffect, useState } from "react";
import { Link, Switch, Route, Redirect} from "react-router-dom";
import OrderForm from "./Components/OrderForm";
import Home from "./Components/Home";
import axios from "axios"
import schema from "./formSchema";
import {reach} from 'yup'

const initialFormValues = {
  name: '',
  size: '',
  Pepperoni:false,
  Mushroom: false,
  Extra_Cheese: false,
  Sausage: false,
  Onion: false,
  specialtext: ''
}

const initialErrors={
  name: '',
}
const App = () => {
const[formValues, setFormValues] = useState(initialFormValues)
const[errors, setErrors] = useState(initialErrors)
const[order,setOrder] = useState(null)
const[Disabled,setDisabled] = useState(true)

function validate(name,value){
reach(schema, name).validate(value).then(setErrors({...errors, [name]: ''}))
.catch(e => setErrors({...errors, [name]: e.errors[0]}))
}

const change= (e)=> {
const{value,name,type,checked} = e.target
let value2 = value
if(name === 'name') {
  validate(name,value)
}
type==='checkbox'? value2 = checked : value2 = value

setFormValues({...formValues, [name]:value2})
}



const submit = (e)=> {
e.preventDefault();
axios.post('https://reqres.in/api/orders', formValues).then(res => {
   setOrder(res.data)
})

setFormValues(initialFormValues)
}

const resetOrder = ()=>{
  setOrder(null)
}

useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])


  return (
    <div className="maincontainer" >
      <div className="header">
        <div className="logo">
          <Link to ="/"><h1>Lambda Eat</h1></Link>
</div>
      <Link to = "/pizza" id = "order-pizza">Order</Link>
      <Link to ="/">Home</Link>
      </div>
      <Switch>
        <Route path="/pizza">
          <OrderForm disabled ={Disabled} reset = {resetOrder} order ={order} values={formValues} errors={errors} change = {change} submit= {submit}/>
        </Route>

        <Route path="/">
        <Home/>
        </Route>
        <Redirect to='/' />
      </Switch>
      </div>

  );
};
export default App;
