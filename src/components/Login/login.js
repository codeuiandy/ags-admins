import React,{useState} from 'react'
import {LoginhttpPost} from '../helpers/httpMethods'
import {ValidateEmail} from '../helpers/emailAuth'
import {ValidateEmptyString} from '../helpers/emptyString'
import Tilt from 'react-tilt'
import { hideLoader, showLoader } from '../helpers/loader'
import {setToken} from '../helpers/authService'
import { NotificationManager } from "react-notifications";
import {useRecoilState} from 'recoil'
import {UserCurrentState,UserToken,BrowserController} from '../../GlobalState/asyncState'
export function Login(props) {

	let TiltOptions = {
		reverse:        false,  
		max:            40,    
		perspective:    1000,   
		scale:          1.1,      
		speed:          1000,    
		transition:     true,  
		axis:           null,   
		reset:          true  ,
		easing:         "cubic-bezier(.03,.98,.52,.99)",  
	          
	}


	let [loginDetails, setLoginDetails] = useState({email:"",password:""})
	const [UserDetails, SetUserDetailsGlobal] = useRecoilState(UserCurrentState)
	const [UserGlobalToken, setUserToken] = useRecoilState(UserToken)
console.log(loginDetails.email)

	const LoginHandler=async(e)=>{
	e.preventDefault()
	let check = ValidateEmail(loginDetails.email);

	if(!check){
		return false;
	}

	let validResult = ValidateEmptyString(loginDetails.password)
	if(!validResult){
		return false;
	}

		const data = loginDetails;
		showLoader()
    try {
		const res =	await LoginhttpPost("login/",data)
		
			console.log(res)
				setToken(res.token)
				SetUserDetailsGlobal(res.user)
				setUserToken(res.token)
			hideLoader()
			console.log(">>>>Login user details",UserDetails)
		
			props.history.push("/dashboard")
			
		} catch (error) {
			NotificationManager.error(
				"Invalid Details",
				"Opps!",
				3000
			);
			hideLoader()
		}
	}

  return (
    <div>
      	<div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">

				<Tilt className="login100-pic " data-tilt options={TiltOptions} >
						<img src="images/img-01.png" alt="IMG"/>
				</Tilt>
				
			

				<form className="login100-form validate-form">
					<span className="login100-form-title">
					AGS Admin Login
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input100" type="text" name="email" 
							placeholder="Email"
							onChange={e => setLoginDetails({...loginDetails,email:e.target.value})}
						/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input className="input100" type="password" name="pass" placeholder="Password"
							onChange={e => setLoginDetails({...loginDetails,password:e.target.value})}
						/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div className="container-login100-form-btn">
						<button onClick={LoginHandler} className="login100-form-btn">
							Login
						</button>
					</div>

					<div className="text-center p-t-12">
						<span style={{marginRight:"10px"}} className="txt1">
							Forgot 
						</span>
						<a className="txt2" >
						  	Username / Password?
						</a>
					</div>

					<div className="text-center p-t-136">
						<a className="txt2" >
							Create An Account
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
    </div>
  )
}
