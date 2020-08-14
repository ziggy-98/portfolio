import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar';
import React from 'react';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      width: 0,
      height: 0,
      sides: []
    }
  }
  componentDidMount(){
    let data = getWidths(window.innerWidth);
    this.setState({
      width: data.width+4,
      height: data.height+4,
      sides: data.sides
    });
    console.log(this.state);
  }
  render(){
    let active = 'home';
    let viewBox = "0 0 "+this.state.width + " "+this.state.height;
    return (
      <div className="main-container">
        <Head>
          <title>Luke Zigler</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="home-main-area">
          <div className="home-main-bg"></div>
          <div className="home-main-content">
            <div className="home-content-bg">
              <svg className="home-main-hexagon" viewBox ={viewBox}  width={this.state.width} height={this.state.height}>
                {this.state.sides.map((line, index) => (
                  <line key={index} className={line.class} x1={line.x1} x2={line.x2} y1={line.y1} y2={line.y2} />
                ))}
              </svg>
            </div>
            <div className="home-content-text">
              <h1>Luke Zigler</h1>
              <h2>Full stack web developer</h2>
              <h3>Specialising in linking php backends to js frontends</h3>
            </div>
          </div>
        </div>
        <Navbar active={`${active}`}></Navbar>
      </div>
    )
  }
}

function getWidths(windowWidth){
  let width, height;
  if(windowWidth > 1200){
    width = 850;
    height = 850;
  }else if(windowWidth <= 1200 && windowWidth > 992){
    width = 700;
    height = 700;
  }else if(windowWidth <= 992 && windowWidth > 768){
    width = 550;
    height = 550;
  }else if(windowWidth <= 768 && windowWidth > 480){
    width = 450
    height = 450;
  }else{
    width = 450;
    height = 450;
  }
  let sides = [
    {x1: 2 , x2: (width / 3 + 2), y1: (height / 3 + 2), y2: 0, class: 'long'},
    {x1: (width / 3 + 2), x2: (((width / 3) * 2)+2), y1: 2, y2: 2, class: 'short'},
    {x1: (((width /3) * 2)+2), x2: width+2, y1: 2, y2: (height / 3 + 2), class: 'long'},
    {x1: width+2, x2: width+2, y1: (height / 3)+2, y2: ((height / 3) * 2)+2, class: 'short'},
    {x1: width+2, x2: ((width / 3) * 2)+2, y1: ((height / 3) * 2)+2, y2: height+2, class: 'long'},
    {x1: ((width / 3) * 2)+2, x2: (width / 3)+2, y1: height+2, y2: height+2, class: 'short'},
    {x1: (width / 3)+2, x2: 2, y1: height+2, y2: ((height / 3) * 2)+2, class: 'long'},
    {x1: 2, x2: 2, y1: ((height / 3) * 2)+2, y2: (height / 3)+2, class: 'short'}
  ];

  let data = {
    width: width,
    height: height,
    sides: sides
  };

  return data;
}