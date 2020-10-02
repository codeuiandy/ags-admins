import React, { useEffect } from "react";
import "./layout.css";
import {useRecoilState} from 'recoil'
import {UserToken} from '../../GlobalState/asyncState'
import {getToken} from '../helpers/authService'
export const Navbar = (props)=>  {
const [getUserUserToken,setUserToken] = useRecoilState(UserToken)
console.log("navbar global",getUserUserToken)

const IsUserValidated=()=>{
const CurrentToken = getUserUserToken;
const lastUsedToken = localStorage.getItem("api_token");

if (lastUsedToken === null || lastUsedToken === undefined || lastUsedToken === "" ) {
	window.location.replace('/')
} 
}

useEffect(() => {
  IsUserValidated()
}, []); 


		return (
			<div>
				<div className="App-header">
					<nav className="navRoutes">
						<span className="appLogo"></span>
						<div className="navItems">
							<span className="linkNav"><i class="fas fa-bell"></i></span>
							
						</div>

						<div className="toggleEl">
							<i
								onClick={props.handleSideBar}
								className="fa fa-bars togMenu"
								aria-hidden="true"
							></i>
						</div>
					</nav>
				</div>
			</div>
		);
	}

