import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/WriteAReviewScreen_elImage_200875.jpg';
import Rating from 'react-rating';
import StarOn from './StarOn';
import StarOff from './StarOff';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';


export default class WriteAReviewScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, ds_SlotUserName, ds_SlotUserEmail, ds_SlotUserPhoto, ds_SlotReviewRating, ds_selectedRestaurantName

  constructor(props) {
    super(props);
    
    this.state = {
      reviewerName: null,
      reviewerEmail: null,
      reviewTitle: '',
      reviewText: '',
    };
  }

  textInputChanged_reviewerName = (event) => {
    this.setState({reviewerName: event.target.value});
  }
  
  textInputChanged_reviewerEmail = (event) => {
    this.setState({reviewerEmail: event.target.value});
  }
  
  textInputChanged_reviewTitle = (event) => {
    this.setState({reviewTitle: event.target.value});
  }
  
  valueChanged_rating = (rating) => {
    this.setState({rating: rating});
    this.props.appActions.updateDataSlot("ds_SlotReviewRating", rating);
  }
  
  textAreaChanged_reviewText = (event) => {
    this.setState({reviewText: event.target.value});
  }
  
  onClick_elSendButton = (ev) => {
    this.sendData_sendButton_to_reviews();
  
    // Go to screen 'WeekActivities'
    this.props.appActions.goToScreen('weekactivities', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton = (ev) => {
    // Go to screen 'WeekActivities'
    this.props.appActions.goToScreen('weekactivities', { transitionId: 'fadeIn' });
  
  }
  
  
  sendData_sendButton_to_reviews = () => {
    const dataSheet = this.props.appActions.getDataSheet('reviews');
  
    let row = this.props.dataSheetRow || {
    };
    row = { ...row, 
      userID: this.props.ds_SlotUserID,
      reviewSubject: this.state.reviewTitle,
      reviewerName: this.state.reviewerName,
      reviewRating: this.props.ds_SlotReviewRating,
      restaurantID: this.props.ds_selectedRestaurantId,
      reviewText: this.state.reviewText,
      reviewerProfilePicUrl: this.props.ds_SlotUserPhoto,
    };
  
    const transformData = (input) => {
        // This function modifies the value saved to the data sheet.
      //input.reviewerName = "Jane TestPerson";
      //input.reviewSubject = "Test review";
      //input.reviewRating=2;
      input.reviewDate=Date.now();
      return input;
    }
    row = transformData(row);
  
    if (this.props.dataSheetId === dataSheet.id) {
      this.props.appActions.updateInDataSheet('reviews', row);
    } else {
      this.props.appActions.addToDataSheet('reviews', row);
    }
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
    let transformPropValue_title = (input) => {
      // This function modifies the value for property 'text'.
      // There is a variable named 'input' that provides the property value.
      
      input="New review for "+input;
      return input;
    }
    const style_title = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_title = transformPropValue_title(this.props.ds_selectedRestaurantName);
    
    const style_title_outer = {
        pointerEvents: 'none',
     };
    const style_image = {
        backgroundImage: 'url('+(this.props.ds_SlotUserPhoto || img_elImage)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'contain',
     };
    const style_image_outer = {
        pointerEvents: 'none',
     };
    const style_reviewerName = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    if (this.state.reviewerName == null) {
        this.state.reviewerName = this.props.ds_SlotUserName;
    }
    const value_reviewerName = this.state.reviewerName;
    
    const style_reviewerEmail = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    if (this.state.reviewerEmail == null) {
        this.state.reviewerEmail = this.props.ds_SlotUserEmail;
    }
    const value_reviewerEmail = this.state.reviewerEmail;
    
    const style_reviewTitle = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    let transformPropValue_rating_value = (input) => {
      // This function modifies the value for property 'value'.
      // There is a variable named 'input' that provides the property value.
      
      return input;
    }
    const style_reviewText = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const style_sendButton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_sendButton_outer = {
        cursor: 'pointer',
     };
    const style_button = {
        display: 'block',
        color: '#feffff',
        textAlign: 'center',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        cursor: 'pointer',
     };
    
    return (
      <div className="AppScreen WriteAReviewScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='headlineFont elTitle' style={style_title_outer}>
            <div style={style_title}>
              <div>{value_title !== undefined ? value_title : (<span className="propValueMissing">{this.props.locStrings.writeareview_text2_254570}</span>)}</div>
            </div>
          
          </div>
          
          <div className='elImage' style={style_image_outer}>
            <div style={style_image} />
          
          </div>
          
          <div className='baseFont elReviewerName'>
            <input style={style_reviewerName} type="text" placeholder={this.props.locStrings.addreview_reviewtextcopy_367397} onChange={this.textInputChanged_reviewerName} value={value_reviewerName !== undefined ? value_reviewerName : ''}  />
          
          </div>
          
          <div className='baseFont elReviewerEmail'>
            <input style={style_reviewerEmail} type="text" placeholder={this.props.locStrings.addreview_field_786827} onChange={this.textInputChanged_reviewerEmail} value={value_reviewerEmail !== undefined ? value_reviewerEmail : ''}  />
          
          </div>
          
          <div className='baseFont elReviewTitle'>
            <input style={style_reviewTitle} type="text" placeholder={this.props.locStrings.addreview_reviewtextcopy2_313895} onChange={this.textInputChanged_reviewTitle} value={this.state.reviewTitle}  />
          
          </div>
          
          <div className='elRating'>
            <div>
              <Rating readonly={false} start={0} stop={5} initialRating={parseInt(transformPropValue_rating_value(this.props.ds_SlotReviewRating))} onChange={this.valueChanged_rating} fullSymbol={<StarOn locStrings={this.props.locStrings} />} emptySymbol={<StarOff locStrings={this.props.locStrings} />} />
            </div>
          
          </div>
          
          <div className='baseFont elReviewText'>
            <textarea style={style_reviewText}  placeholder={this.props.locStrings.writeareview_textarea_652563} onChange={this.textAreaChanged_reviewText} value={this.state.reviewText}  />
          
          </div>
          
          <div className='actionFont elSendButton' style={style_sendButton_outer}>
            <Button style={style_sendButton}  color="accent" onClick={this.onClick_elSendButton} >
              {this.props.locStrings.addreview_button_596452}
            </Button>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Write a Review</div></Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <button className='actionFont elButton' style={style_button}  onClick={this.onClick_elButton} >
              {this.props.locStrings.writeareview_button_160588}
            </button>
          </div>
        </div>
      </div>
    )
  }
  

}
