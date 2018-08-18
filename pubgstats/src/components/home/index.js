import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Main from './../main'
import './home.css';

//pubg.js wrapper
let pubg;
let client;

//battlegrounds wrapper
let battlegrounds
let api
const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      marginLeft : 30,
    },
    input: {
      display: 'none',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: 30,
        marginRight: theme.spacing.unit,
        marginBottom: 15,
        width: 250,
        margin : theme.spacing.unit,
      },
      menu: {
        width: 200,
      },
  });
  

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            verified: null,
            username: null,
            userid: null,
            data: null,
            user: {name:'Tommy2016'},
            view: 'home'
        }
    }
    
    componentWillMount(){
        pubg = require('pubg.js');
        client = new pubg.Client('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5MGI0NzhmMC03Mjg3LTAxMzYtNmFlZC0xM2I1MzBjZThjNjUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTMyNTU3NTMxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Ii1lN2I1NWI4ZC0yMGQ2LTRjMWMtYmNmOC0xMjI5NTFjZjJhNjUifQ.TXwC8UC8LGCt5S6XIcDo1HyF2fVb1w9OCR64YBMJt54',
                'pc-na');
        battlegrounds = require('battlegrounds')

        api = new battlegrounds('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5MGI0NzhmMC03Mjg3LTAxMzYtNmFlZC0xM2I1MzBjZThjNjUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTMyNTU3NTMxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Ii1lN2I1NWI4ZC0yMGQ2LTRjMWMtYmNmOC0xMjI5NTFjZjJhNjUifQ.TXwC8UC8LGCt5S6XIcDo1HyF2fVb1w9OCR64YBMJt54', 'pc-na')

    }

    handleChange = (event) =>{
        this.setState({ [event.target.name] : [event.target.value]})
        console.log(event.target.name, event.target.value)
    }

    getId = (callback) => {
        console.log('getting ID')
        
        let matches;
       
        let player = api.getPlayers({names: [this.state.username]}).then(matches = (value) => {
            let id = value[0].id
            console.log(id);
            this.setState({userid: id})
            callback()
        }).catch(reason => {
            alert('invalid username')
        })
    }

    getData = () => {
        this.setState({view : 'main'})
    }
    
    changeView = () => {
        this.setState({view: 'home'})
    }

    render(){

        const { classes } = this.props;

        if(this.state.view == 'home')
        return(
            <div className = "home">
            <h1> PUBG Player Data </h1>
            <div className = "input">
                <h2> Enter Name to get Statistics</h2>
                <TextField
                    id="name"
                    label="Name"
                    className={classes.textField}
                    value={this.state.username}
                    onChange={this.handleChange}
                    margin="normal"
                    name = "username"
                /> < br /> < br /> 
                <Button onClick= {() => this.getId(this.getData)} variant="contained" color="primary" className={classes.button}>
                    Get Data
                </Button> 
                </div>
                
                <h2>Don't have an account? try typing in "shroud"</h2>
            </div>
        )

        if(this.state.view == 'main')
        return(
            <div>
                <Main username = {this.state.username} id = {this.state.userid}changeView = {this.changeView}/>
            </div>
        )
    }
}

export default withStyles(styles)(Home);