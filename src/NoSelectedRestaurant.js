import React, { Component } from 'react';
import './App.css';


export default class NoSelectedRestaurant extends Component {

  // This component doesn't use any properties

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_background = {
        width: '100%',
        height: '100%',
     };
    const style_background_outer = {
        backgroundColor: '#f6f6f6',
        pointerEvents: 'none',
     };
    const style_text = {
        color: '#424242',
        textAlign: 'center',
     };
    const style_text_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="NoSelectedRestaurant" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow">
          <div className='headlineFont elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{this.props.locStrings.noselectedrestaurant_text_121995}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
