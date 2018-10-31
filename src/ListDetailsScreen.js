import React, { Component } from 'react';
import './App.css';
import Week from './Week';
import ReviewsComp from './ReviewsComp';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';


export default class ListDetailsScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, ds_selectedRestaurantId

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
    const style_text = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_text = this.props.ds_selectedRestaurantId;
    
    const style_text_outer = {
        pointerEvents: 'none',
     };
    const style_columns = {
        height: 'auto',  // This element is in scroll flow
     };
    
    return (
      <div className="AppScreen ListDetailsScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='baseFont elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.litsdetails_text_234936}</span>)}</div>
            </div>
          
          </div>
          
          <div className='hasNestedComps elColumns'>
            <div style={style_columns}>
              <div className="col0">
                <Week appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
              </div>
              <div className="col1">
                <ReviewsComp appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
              </div>
            </div>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">List + Details</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }></div>
        </Appbar>
        
      </div>
    )
  }
  

}
