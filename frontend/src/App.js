import React from 'react';
import './App.css';

//Infos pour la requête à l'API distante





//Récupération des données:




  class Change extends React.Component{

    constructor() {
      super()
      this.state= {
        country : "No value",
        deaths : "No value",
        cas: "No value"
      }
    }

      

    new() {
      var self=this

      var ax = require("axios").default;

      var options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/country',
        params: {name: document.getElementById("country-input").value},
        headers: {
          'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
          'x-rapidapi-key': 'e7e8354e9dmsh5a2dd8ba4d71029p19913ejsn32ce10b9ca47'
        }
      };
      
      ax.request(options).then(function (response) {

        console.log(response.data);
        const data = response.data;
        console.log(data[0].country);

        self.setState({
          country: data[0].country,
          deaths: data[0].deaths,
          cas: data[0].confirmed
          
        })

      }).catch(function (error) {
        console.error(error);
      });

      
    }

    render(){

        console.log(this.country)
        

      return(
        <div>

          <h1>Rechercher les infos covid selon le nom du Pays: </h1>
          <input id="country-input" type="text" class="form-control" placeholder="Rentrer le nom d'une ville"></input>
          <button onClick={() => this.new()}>Prout</button>

          <h1>Pays: {this.state.country}</h1>
          <h1>Morts: {this.state.deaths}</h1>
          <h1>Cas actuels: {this.state.cas}</h1>

        </div>
      )
    }
  }

  class Popo extends React.Component{

    

  }


function App() {
  return (
    <div>
      
      <Change/>

    </div>
  );
}


export default App;


