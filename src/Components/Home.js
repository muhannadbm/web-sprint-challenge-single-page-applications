import React from 'react'
import {Link} from 'react-router-dom'

export default function Home(){
    return(
<div className="container">
    <section className="top">
    <div className="cover">
        <Link to = "/pizza" id="order-pizza">Order Pizza Now !</Link>
    </div>
    </section>
    <section className="bottom">
        <h2>Food Delivery in your local area</h2>
    <div className="restlist">
        <div className="rest">
          <img className="image" src="https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/phut_0.jpg?itok=h30EAnkk"></img>
            <p className="name">McDonald's</p>
            <p className="type">Fast food - Burgers</p>
            <p className="price">$5.99 Delivery Fee</p>
        </div>
        <div className="rest">
          <img className="image" src="https://pbs.twimg.com/profile_images/1407085468664147973/i2P1HdJU_400x400.jpg"></img>
            <p className="name">McDonald's</p>
            <p className="type">Fast food - Burgers</p>
            <p className="price">$5.99 Delivery Fee</p>
        </div>
        <div className="rest">
          <img className="image" src="https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_830,q_75,w_1122/https://assets.simpleviewinc.com/simpleview/image/upload/crm/pwmva/tonys-manassas-9b5839325056a36_9b583a48-5056-a36a-0785f060a81d9f05.jpg"></img>
            <p className="name">McDonald's</p>
            <p className="type">Fast food - Burgers</p>
            <p className="price">$5.99 Delivery Fee</p>
        </div>
        <div className="rest">
          <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"></img>
            <p className="name">McDonald's</p>
            <p className="type">Fast food - Burgers</p>
            <p className="price">$5.99 Delivery Fee</p>
        </div>
    </div>
    </section>
</div>)
}