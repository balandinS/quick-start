import React from "react";
import { connect } from 'react-redux';
import { exampleAction } from "../action/";
import Grid from '@material-ui/core/Grid';
class ExampleComponent extends React.Component{
    componentDidMount(){
        this.props.exampleAction();
    }
    render(){
        console.log(this.props.example)
        return(
            <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            >
                <Grid item md={6}>
                     <div>{this.props.example}</div>
                </Grid>
                <Grid item md={6}>
                     <div>{this.props.example}</div>
                </Grid>
               
            </Grid>
           
        )
    }
}

const mapStateToProps = (state) =>  {
    return{
        example: state.example
    }
}

export default connect(mapStateToProps,{exampleAction})(ExampleComponent)