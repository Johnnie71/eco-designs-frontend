import React from 'react'
import { connect } from 'react-redux'
import DesignCard from '../components/designCard'
import DesignShow from '../components/designShow'
import {Route, Switch} from 'react-router-dom'



class DesignsContainer extends React.Component {


    renderDesigns = () =>{
        console.log(this.props.designs)
        return this.props.designs.map(des => <DesignCard key={des.id} design={des} />)
    }


   render(){
        console.log(this.props.designs)
       return(
           <div>
           <h1>Designs</h1>
           <Switch>
           <Route path="/designs/:id" render={(routerProps) => {
                         let id = parseInt(routerProps.match.params.id)
                         let design
                         if(this.props.designs.length > 0){
                             design = this.props.designs.find(el => el.id === id)
                         }
                         return(
                             <>
                                {this.props.designs.length > 0 ?
                                <div>
                                    <DesignShow design={design} />
                                </div>
                                    : <h1>Loading</h1>
                                }
                             </>
                         )
                    }}/>
                     <Route path="/" render={()=> {
                        return(
                        <div className="designCardContainer">
                            {/* {this.props.designs.length > 0 ? this.renderDesigns() : <h1>LOADING</h1>} */}
                           {this.renderDesigns()}
                        </div>
                        )
                    }}/>

           </Switch>
           </div>
       )
   }
}

function mapStateToProps(state){
    return { designs: state.designs };
};

export default connect(mapStateToProps)(DesignsContainer)