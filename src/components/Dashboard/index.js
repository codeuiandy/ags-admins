import React, { useState } from "react";
import "./index.css";
import OVERVIEW from "./overview";
import StaticticsOVERVIEW from "./staticticsOverview";
import Statictics from "./statictics";
import Recents from "./recents";
import Layout from '../Layout/index'
import UserRoute from '../UserRoute/Route'
import {useRecoilState} from 'recoil'
import {UserCurrentState} from '../../GlobalState/asyncState'
import {Modal} from '../Modals/Modal'

export const Index=(props)=> {
let [isVisible ,setIsVisible] =useState({	isVisible :true})




		const [getUserDetails,setUserDetails] = useRecoilState(UserCurrentState)
			console.log(">>>>using recoil state on dashboard ",getUserDetails)



	
		return (
			<React.Fragment>
				<Layout RouteUserLayout={
					props.history
				}  page="dashboard">
			
					
				
					{/* <Modal/> */}
					<OVERVIEW />
				<div id="app">
    
						
					<StaticticsOVERVIEW />
				
					<Statictics />
				</div>
				{/* <Recents /> */}
			<br/>
				</Layout>
			</React.Fragment>
		);
	
			}