import React, { useEffect } from "react";
export default function Orderform(props) {
const {values,errors,change,submit,order , reset, disabled} = props
let topping = ['Pepperoni','Mushroom','Extra_Cheese','Sausage', 'Onion'];
let filter = null
filter = order !== null ? topping.filter(e => order[e]) : null

return(
order ? <div><h1>your order is being made</h1> <div><button onClick={()=> reset()}>Make another order ?</button></div>
<div className="info">
<p>Name: {order.name}</p>
<p>Size: {order.size}</p>
<p>Toppings: {filter.length != 0 ? filter.map(e => {
    return <p key={e.id}>{e}</p>
}) : 'No Toppings'} </p>
<p>Special Notes: {order.specialtext}</p>

</div>
</div> :




<div>
<h2>Build your Pizza now!</h2>
<form id="pizza-form" onSubmit={submit}>
<div className="inputhead">
<h3>Name on order:*</h3> <p>{errors.name}</p>
<input id="name-input" type="text" name="name" onChange={e=>change(e)} value={values.name} />
</div>
<div className="inputhead">
<h3>Pizza size:*</h3>
<select id="size-dropdown" name="size" value={values.size} onChange={e=>change(e)}>
<option value="">---Pick a size---</option>
<option value="small" >Small</option>
<option value="medium" >Medium</option>
<option value="large">Large</option>
</select> </div>
<div className="inputhead">
<h3>Toppings:</h3>
<input type="checkbox" checked={values.Pepperoni} name="Pepperoni" value="Pepperoni" onChange={e=>change(e)}/>Pepperoni
<input type="checkbox" checked={values.Mushroom} name="Mushroom" value="Mushroom" onChange={e=>change(e)}/>Mushroom
<input type="checkbox" checked={values.Extra_Cheese}  value="Extra_Cheese" name="Extra_Cheese" onChange={e=>change(e)}/>Extra Cheese
<input type="checkbox" checked={values.Sausage}  value="Sausage" name="Sausage" onChange={e=>change(e)}/> Sausage
<input type="checkbox" checked={values.Onion}  value="Onion" name="Onion" onChange={e=>change(e)}/>Onion

</div>
<div className="inputhead">
<h3>Special Notes:</h3>
<input type="text" id="special-text" name="specialtext" value={values.specialtext} onChange={e=>change(e)}/>
</div> 
<button disabled = {disabled} id="order-button">Add to Order</button>
</form>
</div>)
}