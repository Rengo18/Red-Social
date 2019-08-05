import React,{Component} from 'react';
import {Link}from 'react-router-dom';


import image from '../../img/logo.svg';
import './styles/Register.css';


export default class Register extends Component {
    render(){
        return(
            <div className="conteiner">
                
                <div className="image-logo">
                        <img src={image} width= {400}   height= {400} alt="Logo"/>
                </div>        
            <div className="form-Register">
                
                   <form action="#" method="Post">
                        <input type="text" name="name" placeholder="Name" className="input-Register"/>
                        <input type="text" name="lastname"   placeholder="Lastname" className="input-Register"/> 
                        <input type="text" name="username"   placeholder="User Name" className="input-Register"/> 
                        <input type="password" name="password"   placeholder="Password" className="input-Register"/> 
                        <input type="text" name="email"   placeholder="Email" className="input-Register"></input>
                        <input type="date" name="birthdate" className="input-Register"/><br/>
                        <div className="gender-Register">
                        <label>Male</label><input  type="radio" value="male" name="gender"/><label>Female</label><input type="radio" value="female" name="gender"/>
                        </div>
                        <input type="submit" name="button" className="button-Register"/>
                   </form>
                   <button  className="button back"><Link to="/">Back</Link> </button>
           </div>
   </div>
        )
    }

}