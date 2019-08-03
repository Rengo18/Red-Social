import React,{ Component } from 'react';
import {Link} from 'react-router-dom';

import Logo from '../Logo';
import image from '../img/logo.svg';
import './styles/Login.css';

export default class Login extends Component {
    render(){
            return(
                        <div className="conteiner">
                                <div className="image-logo">
                                        <Logo image={image} width={400}   height={400}/>
                                </div>
                                 <div className="form-login">
                                        <form action="#" method="Post">
                                                <label >User Name</label><br/>
                                                <input type="text" name="UserName" className="input-Login" placeholder="UserName"/><br/>
                                                 <label>Password</label><br/>
                                                <input type="password"  name="Password" className="input-Login" placeholder="Password"/>
                                                <div >
                                                        <input type="submit" name="Login"  value="Login" className="button-Login"/>
                                                        <button  className="button-Login"><Link to="/">sign up</Link> </button>  
                                               </div>                                                                    
                                        </form>
                                </div>
                        </div>
                        );
                }                                                      
};                         

    

