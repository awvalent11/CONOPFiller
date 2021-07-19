import React from 'react' ;

import ReactDOM from 'react-dom';

class KeyTasks extends React.Components {
   get keyTasks[]; 
   /* You may have to use: let kT = []; 
   kT = keyTasks.map; */ 
   
   render() {
    return <h4>{this.keyTasks}</h4>
   }
} 

ReactDOM.render(<KeyTasks />, document.getElementbyId('keyTasks'));

class MissionStatement extends React.Components {
   get missionStatement; 
   
   render() {
    return <h1>{this.missionStatement}</h1>
   }
} 

ReactDOM.render(<MissionStatement />, document.getElementbyId('missionStatement'));

class TrainingObjectives extends React.Components {
   get trainingObjectives[]; 
   
   render() {
    return <h4>{this.trainingObjectives}</h4>
   }
} 

ReactDOM.render(<TrainingObjectives />, document.getElementbyId('trainingObjectives'));

