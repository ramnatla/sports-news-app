import React, { Component } from 'react';
import LinkList from './components/LinkList';
import './App.css';
import NewsAPI from './testApi.js'

//const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('4db68098d46f4ef89bb5fbc60e217d41');
    // "newsapi": "^2.3.0",

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
      ],
      basketball: [
        {
          title: 'Loading',
          url: '',
          img: '',
          description: '',
          source: ''
        }
      ],
      baseball: [
        {
          title: 'Loading',
          url: '',
          img: '',
          description: '',
          source: ''
        }
      ],
      soccer: [
        {
          title: 'Loading',
          url: '',
          img: '',
          description: '',
          source: ''
        }
      ]
    }
    this.setArticleArray();
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


//Sets football and basketeball article arrays in state
setArticleArray = () => {
  newsapi.v2.everything({
    sources: 'bbc-sport,bleacher-report,espn,fox-sports,nfl-news,talksport,the-sport-bible',
    from: this.getCurrentDate(),
    language: 'en',
    sortBy: 'popularity',
    q: '+nfl +football'
  }).then(response => {
    this.setState({football: this.getInfo(response)});
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
  });

  newsapi.v2.everything({
    sources: 'bbc-sport,bleacher-report,espn,fox-sports,nfl-news,talksport,the-sport-bible',
    from: this.getCurrentDate(),
    language: 'en',
    sortBy: 'popularity',
    q: '+nba +basketball'
  }).then(response => {
    this.setState({basketball: this.getInfo(response)});
  });

  newsapi.v2.everything({
    sources: 'bbc-sport,bleacher-report,espn,fox-sports,nfl-news,talksport,the-sport-bible',
    from: this.getCurrentDate(),
    language: 'en',
    sortBy: 'popularity',
    q: '+mlb +baseball'
  }).then(response => {
    this.setState({baseball: this.getInfo(response)});
  });

  newsapi.v2.everything({
    from: this.getCurrentDate(),
    language: 'en',
    sortBy: 'popularity',
    q: '(soccer OR football) AND (mls OR bpl OR liga OR premier) AND -nfl'
  }).then(response => {
    this.setState({soccer: this.getInfo(response)});
  });
}

  render() {
    return (
      <div className="App">
        <h1 className='f1 tc'>Daily Sports Tribune</h1>
        <p className='tc f2 ma0 pb2'>Find out about the top stories of the day from the sportsworld
         in one convenient location!</p>

        <div className="firstSet">
          <div className='w-50'>
            <h1 className='tc header'>Top Football Stories</h1>
            <LinkList linkArray={this.state.football} />
          </div>

          <div className='w-50'>
            <h1 className='tc header'>Top Basketball Stories</h1>
            <LinkList linkArray={this.state.basketball} />
          </div>
        </div>

        <div className="secondSet">
          <div className='w-50'>
            <h1 className='tc header'>Top Baseball Stories</h1>
            <LinkList linkArray={this.state.baseball} />
          </div>

          <div className='w-50'>
            <h1 className='tc header'>Top Soccer Stories</h1>
            <LinkList linkArray={this.state.soccer} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
