import React, { Component } from 'react';
import './App.css';
import img_elN00021restaurant from './images/LoginMainScreen_elN00021restaurant_883381.jpg';
import FirebaseLogin from './FirebaseLogin';
import firebase from 'firebase';
import firestore from 'firebase/firestore';


export default class LoginMainScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  componentDidMount() {
    // Check if Firebase login has been completed.
    setTimeout(() => {
      if (firebase.auth().currentUser) {
        if (this._elFirebaseLogin)
          this._elFirebaseLogin.saveCurrentUserDataInApp();
        
        this.props.appActions.goToScreen('weeksinthisyear');
        
      }
    }, 50);
  }

  onClick_elText2 = (ev) => {
    // Go to screen 'Weeks in this year'
    this.props.appActions.goToScreen('weeksinthisyear', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_background = {
        width: '100%',
        height: '100%',
     };
    const style_background_outer = {
        backgroundColor: '#f6f6f6',
        pointerEvents: 'none',
     };
    const style_n00021restaurant = {
        backgroundImage: 'url('+img_elN00021restaurant+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    const style_text = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_text_outer = {
        pointerEvents: 'none',
     };
    const style_text2 = {
        color: '#3368ff',
        textAlign: 'center',
     };
    const style_text2_outer = {
        cursor: 'pointer',
     };
    
    return (
      <div className="AppScreen LoginMainScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
          <div className='containerMinHeight elN00021restaurant' style={style_n00021restaurant} />
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='headlineFont elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{this.props.locStrings.loginmain_text_758871}</div>
            </div>
          
          </div>
          
          <div className='elFirebaseLogin'>
            <div>
              <FirebaseLogin ref={(el)=> this._elFirebaseLogin = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='baseFont elText2' style={style_text2_outer}>
            <div style={style_text2} onClick={this.onClick_elText2} >
              <div>{this.props.locStrings.loginmain_text2_130360}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
