import React, { Component } from 'react'
import PlanTable from '../Tables/planTable'
import Layout from '../Layout/index'
import './index.css'
import PlanModal from '../Modals/planModal'

export default class overview extends Component {
    render() {
        return (
            <div>
            <Layout RouteUserLayout={
					this.props.history
				} page="planss">
                    <div className="createPlan">
                        <button   data-toggle="modal"
                         data-target="#PlanModals">Create New Plan</button>
                    </div>
                <div className="planWrapper">
                
                       <PlanTable/> 
                </div>
           
            </Layout>
             <PlanModal/>
             </div>
        )
    }
}
