import React from 'react'
import { connect } from 'react-redux'
// import { NavLink } from 'react-router-dom'
// import { editUserAction } from '../redux/actions'
import { addDesignAction } from '../redux/actions'


class DesignForm extends React.Component{

    state = {
        user_id: this.props.user.id,
        title: "",
        main_img: "",
        img_1: "",
        img_2: "",
        img_3: "",
        img_4: "",
        img_5: "",
        img_6: "",
        description: "",
        category: "",
    }

    changeHandler =(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    localsubmitHandler = (e) =>{
        e.preventDefault()
        this.props.submitHandler(this.props.user.id, this.state)
    }

    // localDeleteHandler = (e) => {
    //     this.props.deleteHandler(this.props.user.id)
    // }

    render(){

        return(
            <div> 
                <form onSubmit={this.localsubmitHandler}>
                    <input name="title" type="text" placeholder="Title" value={this.state.title} onChange={this.changeHandler}/>
                    <input name="main_img" type="text" placeholder="Main Img" value={this.state.main_img} onChange={this.changeHandler}/>
                    <input name="img_1" type="text-area" placeholder="Image 1" value={this.state.img_1} onChange={this.changeHandler}/>
                    <input name="img_2" type="text" placeholder="Image 2" value={this.state.img_2} onChange={this.changeHandler}/>
                    <input name="img_3" type="text" placeholder="Image 3"value={this.state.img_3} onChange={this.changeHandler}/>
                    <input name="img_4" type="text" placeholder="Image 4" value={this.state.img_4} onChange={this.changeHandler}/>
                    <input name="img_5" type="text" placeholder="Image 5" value={this.state.img_5} onChange={this.changeHandler}/>
                    <input name="img_6" type="text" placeholder="Image 6" value={this.state.img_6} onChange={this.changeHandler}/>
                    <input name="description" type="text" placeholder="Description" value={this.state.description} onChange={this.changeHandler}/>
                    <input name="category" type="text" placeholder="Category" value={this.state.category} onChange={this.changeHandler}/>
                    <button type="submit">Add Design</button>
                </form>
                {/* <button onClick={this.localDeleteHandler}>Delete Profile?</button> */}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){

    return { 
        submitHandler: (id, newDesign) => dispatch(addDesignAction(id, newDesign)),
        // deleteHandler: (id) => dispatch(deleteUserAction(id))
    }
}

export default connect(null, mapDispatchToProps)(DesignForm)