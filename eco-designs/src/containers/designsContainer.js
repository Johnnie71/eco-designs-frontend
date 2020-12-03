import React from 'react'
import { connect } from 'react-redux'
import DesignCard from '../components/designCard'
import DesignShow from '../components/designShow'
import {Route, Switch} from 'react-router-dom'



class DesignsContainer extends React.Component {

   


    renderDesigns = () =>{
        ///renders all designs from state
        // console.log(this.props.designs)
        return this.props.designs.map(des => <DesignCard key={des.id} design={des} />)
    }
   
     filteredFollows = () =>{
         /// filters out the follow relationships in state according to the user of 34
         let filteredfollow = this.props.follows.filter(follow => follow.following_id === 32)
         //gets all the ids of everyone 34 follows puts them in an array
         return filteredfollow.map(follow => follow.followed_id)
     }

     
    
     filterDesigns = () =>{
        //  trying to filter out the designs according to who user 34 follows
        var designArray = this.props.designs
        var filterArray = this.filteredFollows()

        // compares both arrays of designs and followers and filters out the designs to match the id of the users that 34 follows
        // for the feed
                designArray = designArray.filter(function(item){
                    return filterArray.includes(item.user.id)
                })
        return designArray.map(des => <DesignCard key={des.id} design={des} />)
     }





   render(){
        // console.log(this.props.designs.filter(design => design.user.id === this.filteredFollows()))
        var designArray = this.props.designs
        console.log("Design Array",designArray)
        var filterArray = this.filteredFollows()

            designArray = designArray.filter(function(item){
                    return filterArray.includes(item.user.id)
            })

            console.log("Follows", filterArray)
            console.log("hey!", designArray)
       return(
           <div>
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
                                    : <h1>- -LOADING- -</h1>
                                }
                             </>
                         )
                    }}/>
                     <Route path="/" render={()=> {
                        return(
                             <div>
                                <h1 className="feedHeader">Feed</h1>
                                    <div className="designsContainer">
                                        {this.props.designs.length > 0 ? this.filterDesigns() : <h1>- -LOADING- -</h1>}
                                        {/* {this.renderDesigns()} */}
                                        {/* {this.filterDesigns()} */}
                                    </div>
                            </div>
                        )
                    }}/>

           </Switch>
           </div>
       )
   }
}

function mapStateToProps(state){
    return { 
        designs: state.designs,
        follows: state.follows
     };
};

export default connect(mapStateToProps)(DesignsContainer)