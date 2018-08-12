import React, { Component } from 'react';
import Link from './components/Link';
import './App.css';

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('4db68098d46f4ef89bb5fbc60e217d41');



class App extends Component {
  constructor(){
    super();
    this.state = {
      football: [
        {
          title: 'Loading',
          url: '',
          img: '',
          description: '',
          source: ''
        }
      ]
    }
    console.log("state",this.state.football);
    this.setFootball();
  }


//Returns current date in appropriate format
getCurrentDate = () => {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd;
  } 

  if(mm<10) {
      mm = '0'+mm;
  } 

  today = yyyy + "-" + mm + "-" + dd;
  return today;
}

//Returns array with data
getInfo = (data) => {
  let array = [];
  let size = data.totalResults;

  //Max size of 5
  if (size > 5){
    size = 5;
  }

  for (let i = 0; i < size; ++i){
    let articleInfo = {};
    articleInfo.title = data.articles[i].title;
    articleInfo.url = data.articles[i].url;
    articleInfo.img = data.articles[i].urlToImage;
    articleInfo.source = data.articles[i].source.name;
    articleInfo.description = data.articles[i].description;
    array.push(articleInfo);
  }
  return array;
}


//Football
setFootball = () => {
  newsapi.v2.everything({
    sources: 'bbc-sport,bleacher-report,espn,fox-sports,nfl-news,talksport,the-sport-bible',
    from: this.getCurrentDate(),
    language: 'en',
    sortBy: 'popularity',
    q: '+nba +basketball'
  }).then(response => {
    console.log(response);
    // ans = this.getInfo(response);
    // console.log('ans', ans);
    this.setState({football: this.getInfo(response)});

    /*
      {
        status: "ok",
        articles: [...]
      }
    */
  });
}

  render() {
    console.log('football', this.state.football[0]);
    return (
      <div className="App">
        <Link articleInfo={this.state.football[0]} />
      </div>
    );
  }
}

export default App;
