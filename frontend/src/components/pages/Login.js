import React,{ Component } from 'react';
import {Link} from 'react-router-dom';


import image from '../../img/logo.svg';
import './styles/Login.css';


export default class Login extends Component {
    render(){
            return(
                        <div className="conteiner">
                                 <div className="image-logo">
                                         <img src={image} width= {400}   height= {400} alt="Logo"/>
                                 </div>        
                                 <div className="form-login">
                                        <form action="#" method="Post">
                                                <label >User Name</label><br/>
                                                <input type="text" name="userName" className="input-Login" placeholder="UserName"/><br/>
                                                 <label>Password</label><br/>
                                                <input type="password"  name="password" className="input-Login" placeholder="Password"/><br/>
                                                <input type="submit" name="Login"  value="Login" className="button"/>  
                                         </form>
                                        <div>
                                                <button  className="button button-Register-login"><Link to="/Register">sign up</Link> </button>                
                                        </div>
                                </div>
                        </div>
                        );
                }                                                      
};                                                                                             
                                       
               

    

