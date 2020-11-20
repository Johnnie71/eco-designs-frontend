import React from 'react'
import { connect } from 'react-redux'

class DesignsContainer extends React.Component {

    componentDidMount = () =>{
        fetch('http://localhost:4000/api/v1/designs/')
        .then(resp => resp.json())
        .then(console.log)
    }

   render(){
       return(
           <div>
               <h1>DesignsContainer</h1>
           </div>
       )
   }
}

export default connect()(DesignsContainer)