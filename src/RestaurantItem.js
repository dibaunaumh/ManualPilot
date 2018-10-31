import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/RestaurantItem_elImage_56105.jpg';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class RestaurantItem extends Component {

  // Properties used by this component:
  // restaurantCoverImage, restaurantName, restaurantAddress, restaurantOpeningHours

  onClick_elButtonReviews = (ev) => {
    let newVal = this.props.dataSheetRow.key;
    this.props.appActions.updateDataSlot('ds_selectedRestaurantId', newVal);
  
    // Go to screen 'WeekActivities'
    this.props.appActions.goToScreen('weekactivities', { ...this.props, transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_backgroundShape = {
        background: 'rgba(255, 255, 255, 1.000)',
        pointerEvents: 'none',
     };
    const style_image = {
        backgroundImage: 'url('+(this.props.restaurantCoverImage || img_elImage)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
     };
    const style_image_outer = {
        pointerEvents: 'none',
     };
    const style_restaurantName = {
        fontSize: 25.8,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_restaurantName = this.props.restaurantName;
    
    const style_restaurantName_outer = {
        pointerEvents: 'none',
     };
    const style_text = {
        fontSize: 19.4,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_text = this.props.restaurantAddress;
    
    const style_text_outer = {
        pointerEvents: 'none',
     };
    const style_addressCopy = {
        fontSize: 19.4,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_addressCopy = this.props.restaurantOpeningHours;
    
    const style_addressCopy_outer = {
        pointerEvents: 'none',
     };
    const style_buttonReviews = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_buttonReviews_outer = {
        cursor: 'pointer',
     };
    const style_rectangleSpacer = {
        background: 'rgba(252, 253, 253, 1.000)',
     };
    const style_rectangleSpacer_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="RestaurantItem" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackgroundShape' style={style_backgroundShape} />
        </div>
        <div className="layoutFlow">
          <div className='elImage' style={style_image_outer}>
            <div style={style_image} />
          
          </div>
          
          <div className='font-avenirNextRegular  elRestaurantName' style={style_restaurantName_outer}>
            <div style={style_restaurantName}>
              <div>{value_restaurantName !== undefined ? value_restaurantName : (<span className="propValueMissing">{this.props.locStrings.restaurantitem_textblockcopy2_495180}</span>)}</div>
            </div>
          
          </div>
          
          <div className='font-avenirBook  elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.restaurantitem_text_230898}</span>)}</div>
            </div>
          
          </div>
          
          <div className='font-avenirBook  elAddressCopy' style={style_addressCopy_outer}>
            <div style={style_addressCopy}>
              <div>{value_addressCopy !== undefined ? value_addressCopy : (<span className="propValueMissing">{this.props.locStrings.restaurantitem_addresscopy_1012676}</span>)}</div>
            </div>
          
          </div>
          
          <div className='actionFont elButtonReviews' style={style_buttonReviews_outer}>
            <Button style={style_buttonReviews}  color="accent" onClick={this.onClick_elButtonReviews} >
              {this.props.locStrings.restaurantitem_button_813725}
            </Button>
          
          </div>
          
          <div className='elRectangleSpacer' style={style_rectangleSpacer_outer}>
            <div style={style_rectangleSpacer} />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
