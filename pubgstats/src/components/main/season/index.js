import React, {Component} from 'react';

import Data from './data';
import './seasonStyle.css'

class Season extends Component {
    constructor(props){
        super(props);

        this.state = {
            kills: this.props.data.kills,
            assists: this.props.data.assists,
            wins: this.props.data.wins,
            losses: this.props.data.losses,
            top10s: this.props.data.top10s,
            headshotKills : this.props.data.headshotKills,
            teamKills : this.props.data.teamKills,
            longestKill : this.props.data.longestKill,
            revives: this.props.data.revives,
            damageDealt: this.props.data.damageDealt,
            heals: this.props.data.heals,
            boosts: this.props.data.boosts,
            roadKills : this.props.data.roadKills,
            weaponsAcquired: this.props.data.weaponsAcquired,
            longestTimeSurvived : this.props.data.longestTimeSurvived,
            roundMostKills : this.props.data.roundMostKills,
            suicides : this.props.data.suicides,

        }
        
    }

    render(){
        return(
            <div className = "seasonBody">
            <h1> Season Data</h1>
            <h2> Match Data </h2>
                <div className = "seasonData">
                    <Data label = "Wins" data = {this.state.wins}/>
                    <Data label = "Losses" data = {this.state.losses}/>
                    <Data label = "Top 10 Finishes" data = {this.state.top10s}/>
                    </div>
                    <h2> Combat Data </h2>
                    <div className = "seasonData">
                    <Data label = "Kills" data = {this.state.kills}/>
                    <Data label = "Headshot Kills" data = {this.state.headshotKills}/>
                    <Data label = "Team Kills" data = {this.state.teamKills}/>
                    <Data label = "Road Kills" data = {this.state.roadKills}/>
                    <Data label = "Damage Dealt" data = {this.state.damageDealt}/>
                    <Data label = "Assists" data = {this.state.assists}/>
                    <Data label = "Suicides" data = {this.state.suicides}/>
                    <Data label = "Revives" data = {this.state.revives}/>
                    <Data label = "Heals" data = {this.state.heals}/>
                    <Data label = "Boosts" data = {this.state.boosts}/>
                    <Data label = "Weapons Acquired" data = {this.state.weaponsAcquired}/>
                    </div>
                    <h2> Records </h2>
                    <div className = "seasonData">
                    <Data label = "Longest Kill (Meters)" data = {this.state.longestKill}/>
                    <Data label = "Longest Time Survived (Seconds)" data = {this.state.longestTimeSurvived}/>
                    <Data label = "Most Kills In a Single Round" data = {this.state.roundMostKills}/>
                    </div>
           
            </div>
        )
    }
}

export default Season;