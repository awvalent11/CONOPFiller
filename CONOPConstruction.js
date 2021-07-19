import React from 'react' ;

import ReactDOM from 'react-dom';

class KeyTasks extends React.Components {
   get keyTasks[]; 
   
   render() {
    <h4>{this.keyTasks}</h4>
   }
} 

ReactDOM.render(<KeyTasks />, document.getElementbyId('keyTasks'));

class MissionStatement extends React.Components {
   get missionStatement; 
   
   render() {
    <h1>{this.missionStatement}</h1>
   }
} 

ReactDOM.render(<MissionStatement />, document.getElementbyId('missionStatement'));

class TrainingObjectives extends React.Components {
   get trainingObjectives[]; 
   
   render() {
    <h4>{this.trainingObjectives}</h4>
   }
} 

ReactDOM.render(<TrainingObjectives />, document.getElementbyId('trainingObjectives'));

