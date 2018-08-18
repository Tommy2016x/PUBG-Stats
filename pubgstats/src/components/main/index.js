import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import { callbackify } from 'util';

import Season from './season';
import './mainStyle.css';

//pubg.js wrapper
let pubg;
let client;
let seasonchange;
let savdata;
let modechange;


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        'margin-left' : 30,
      },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      'margin-left' : 30,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
  });
  

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            season: [17],
            mode: ['SquadFPP'],
            userid: this.props.id,
            currentseason: "division.bro.official.2018-07",
            data: null,
           
        }
    }

    handleChangeSeason = (event) =>{
        seasonchange = true;
        this.setState({ season : [event.target.value],data: null})
        console.log(event.target.name, event.target.value)
        
    }

   loadSeason = (callback) => {
       let data2;
       let client = new pubg.Client('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5MGI0NzhmMC03Mjg3LTAxMzYtNmFlZC0xM2I1MzBjZThjNjUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTMyNTU3NTMxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Ii1lN2I1NWI4ZC0yMGQ2LTRjMWMtYmNmOC0xMjI5NTFjZjJhNjUifQ.TXwC8UC8LGCt5S6XIcDo1HyF2fVb1w9OCR64YBMJt54',
       'pc-na');
    seasonchange = false;
        console.log('changing season');
        
        
        let seasons = [
            null,
            "division.bro.official.2017-beta",
             "division.bro.official.2017-pre1",
             "division.bro.official.2017-pre2",
            "division.bro.official.2017-pre3",
             "division.bro.official.2017-pre4",
             "division.bro.official.2017-pre5",
            "division.bro.official.2017-pre6",
             "division.bro.official.2017-pre7",
             "division.bro.official.2017-pre8",
             "division.bro.official.2017-pre9",
             "division.bro.official.2018-01",
             "division.bro.official.2018-02",
             "division.bro.official.2018-03",
             "division.bro.official.2018-04",
            "division.bro.official.2018-05",
             "division.bro.official.2018-06",
            "division.bro.official.2018-07",
        ]
        let matches;
        let thisseason = seasons[this.state.season] 
        console.log('season: ' + thisseason);
        let player = client.getPlayerSeason(this.state.userid,thisseason).then(matches = (data) => {
            console.log("mode is 3: " + this.state.mode);
            console.log(data)
            savdata = data;

                if (this.state.mode[0] == 'SingleFPP') 
                 data2 = data.attributes.gameModeStats.soloFPP
                
                else if (this.state.mode[0] == 'SingleTPP') 
                 data2 = data.attributes.gameModeStats.soloTPP

                 else if (this.state.mode[0] == 'DuoFPP') 
                 data2 = data.attributes.gameModeStats.duoFPP
                
                 else if (this.state.mode[0] == 'DuoTPP') 
                 data2 = data.attributes.gameModeStats.duoTPP
               
                 else if (this.state.mode[0] == 'SquadFPP') 
                 data2 = data.attributes.gameModeStats.squadFPP

                else 

                 data2 = data.attributes.gameModeStats.squad;
                 callback(data2)
             
            
        })
    }

    changeseason = (data2) => {
        console.log('setting season')
        console.log(data2);
        this.setState({data: data2})
    } 

    handleChangeMode= (event) =>{
        modechange = true;
        this.setState({ mode : [event.target.value],data: null})
        console.log(event.target.name, event.target.value)
    }

    loadMode = (callback) => {
        modechange = false;
        console.log('changing mode')
        let data2;
        
        if (this.state.mode[0] == 'SingleFPP') 
        data2 = savdata.attributes.gameModeStats.soloFPP
       
       else if (this.state.mode[0] == 'SingleTPP') 
        data2 = savdata.attributes.gameModeStats.solo

        else if (this.state.mode[0] == 'DuoFPP') 
        data2 = savdata.attributes.gameModeStats.duoFPP
       
        else if (this.state.mode[0] == 'DuoTPP') 
        data2 = savdata.attributes.gameModeStats.duo
      
        else if (this.state.mode[0] == 'SquadFPP') 
        data2 = savdata.attributes.gameModeStats.squadFPP

       else 

        data2 = savdata.attributes.gameModeStats.squad;
        callback(data2)
    }

    componentWillUpdate(){
      
            
    }
    
    componentDidUpdate(){
        if(seasonchange == true){
            this.loadSeason(this.changeseason);
        }

        if(modechange == true)
        this.loadMode(this.changeseason);
}

    componentWillMount(){
          console.log('season: ' +this.state.currentseason)
          pubg = require('pubg.js');
        client = new pubg.Client('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5MGI0NzhmMC03Mjg3LTAxMzYtNmFlZC0xM2I1MzBjZThjNjUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTMyNTU3NTMxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Ii1lN2I1NWI4ZC0yMGQ2LTRjMWMtYmNmOC0xMjI5NTFjZjJhNjUifQ.TXwC8UC8LGCt5S6XIcDo1HyF2fVb1w9OCR64YBMJt54',
                'pc-na');
        let matches;
        let player = client.getPlayerSeason(this.state.userid,this.state.currentseason).then(matches = (data) => {
            console.log(data);
            savdata = data
            let data2 = data.attributes.gameModeStats.squadFPP
            this.setState({data: data2})

        })
      
    }
    componentDidMount(){
        console.log('mounted')
       console.log(this.state.data)
    }
    
    render(){

        const { classes } = this.props;
        if(this.state.data)
        return(
            <div className = "main">
                <h1> Stats for: {this.props.username}</h1>
                <h2> Choose Season and Mode</h2>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Season</InputLabel>
                    <Select
                        value={this.state.season[0]}
                        
                        onChange={this.handleChangeSeason}
                        inputProps={{
                        name: 'season',
                        id: 'age-simple',
                        }}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                        <MenuItem value={14}>14</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={17}>17</MenuItem>
                        
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">Mode</InputLabel>
                    <Select
                        value={this.state.mode[0]}
                        onChange={this.handleChangeMode}
                        inputProps={{
                        name: 'mode',
                        id: 'age-simple',
                        }}
                    >
                        <MenuItem value={'SingleFPP'}>Single First Person</MenuItem>
                        <MenuItem value={'SingleTPP'}>Single Third Person</MenuItem>
                        <MenuItem value={'DuoFPP'}>Duo First Person</MenuItem>
                        <MenuItem value={'DuoTPP'}>Duo Third Person</MenuItem>
                        <MenuItem value={'SquadFPP'}>Squad FirstPerson</MenuItem>
                        <MenuItem value={'quadTPP'}>Squad ThirdPerson</MenuItem>
                    </Select>
                </FormControl> <br />
                <Season data = {this.state.data} /> <br />
                <Button variant="contained" color="secondary" className={classes.button} onClick = {this.props.changeView}> Change Username </Button>
            </div>
        )
        else
        return(
            <div>
                <h1> Loading... </h1>
            </div>
        )
    }
}

export default withStyles(styles)(Main);