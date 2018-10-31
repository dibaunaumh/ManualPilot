import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/WeekActivitiesScreen_elImage_298929.jpg';
import ListItemReview from './ListItemReview';
import btn_icon_342806 from './images/btn_icon_342806.png';
import btn_icon_back_weekactivities from './images/btn_icon_back_weekactivities.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';


export default class WeekActivitiesScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, dataSheetRow

  onClick_elTextReviewsHeader = (ev) => {
    window.location = '';
  
  }
  
  
  onClick_elFab = (ev) => {
    let newVal = this.props.restaurantName;
    this.props.appActions.updateDataSlot('ds_selectedRestaurantName', newVal);
  
    // Go to screen 'LoginReview'
    this.props.appActions.goToScreen('loginreview', { transitionId: 'fadeIn' });
  
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
    
    const dataSheet_reviews = this.props.dataSheets['reviews'];
    const style_background = {
        width: '100%',
        height: '100%',
     };
    const style_background_outer = {
        backgroundColor: '#f6f6f6',
        pointerEvents: 'none',
     };
    const style_image = {
        backgroundImage: 'url('+(this.props.dataSheetRow.restaurantCoverImage || img_elImage)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_image_outer = {
        pointerEvents: 'none',
     };
    const style_restaurantName = {
        fontSize: 25.8,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_restaurantName = this.props.dataSheetRow ? this.props.dataSheetRow.restaurantName : '';
    
    const style_restaurantName_outer = {
        pointerEvents: 'none',
     };
    const style_restaurantAddress = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_restaurantAddress = this.props.dataSheetRow ? this.props.dataSheetRow.restaurantAddress : '';
    
    const style_restaurantAddress_outer = {
        pointerEvents: 'none',
     };
    const style_textOpeningHours = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_textOpeningHours = this.props.dataSheetRow ? this.props.dataSheetRow.restaurantOpeningHours : '';
    
    const style_textOpeningHours_outer = {
        pointerEvents: 'none',
     };
    const style_textDescription = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_textDescription = this.props.dataSheetRow ? this.props.dataSheetRow.restaurantDescription : '';
    
    const style_textDescription_outer = {
        pointerEvents: 'none',
     };
    const style_textRestaurantWWW = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_textRestaurantWWW = this.props.dataSheetRow ? this.props.dataSheetRow.restaurantWWW : '';
    
    const style_textRestaurantWWW_outer = {
        pointerEvents: 'none',
     };
    const style_line = {
        borderTop: '1px solid black',
     };
    const style_line_outer = {
        pointerEvents: 'none',
     };
    let transformPropValue_textReviewsHeader = (input) => {
      // This function modifies the value for property 'text'.
      // There is a variable named 'input' that provides the property value.
      return "Reviews for "+input;
    }
    const style_textReviewsHeader = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_textReviewsHeader = transformPropValue_textReviewsHeader(this.props.dataSheetRow ? this.props.dataSheetRow.restaurantName : '');
    
    const style_textReviewsHeader_outer = {
        cursor: 'pointer',
     };
    const style_list = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('reviews').items);
    
    const style_fab = {
        display: 'block',
        color: '(null)',
        textAlign: 'left',
        cursor: 'pointer',
     };
    
    return (
      <div className="AppScreen WeekActivitiesScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elImage' style={style_image_outer}>
            <div style={style_image} />
          
          </div>
          
          <div className='font-avenirNextRegular  elRestaurantName' style={style_restaurantName_outer}>
            <div style={style_restaurantName}>
              <div>{value_restaurantName !== undefined ? value_restaurantName : (<span className="propValueMissing">{this.props.locStrings.restaurantdetails_restaurantname_578163}</span>)}</div>
            </div>
          
          </div>
          
          <div className='baseFont elRestaurantAddress' style={style_restaurantAddress_outer}>
            <div style={style_restaurantAddress}>
              <div>{value_restaurantAddress !== undefined ? value_restaurantAddress : (<span className="propValueMissing">{this.props.locStrings.restaurantdetails_textopeninghourscopy_928206}</span>)}</div>
            </div>
          
          </div>
          
          <div className='baseFont elTextOpeningHours' style={style_textOpeningHours_outer}>
            <div style={style_textOpeningHours}>
              <div>{value_textOpeningHours !== undefined ? value_textOpeningHours : (<span className="propValueMissing">{this.props.locStrings.restaurantdetails_text2_739445}</span>)}</div>
            </div>
          
          </div>
          
          <div className='baseFont elTextDescription' style={style_textDescription_outer}>
            <div style={style_textDescription}>
              <div>{value_textDescription !== undefined ? value_textDescription : (<span className="propValueMissing">{this.props.locStrings.restaurantdetails_textcopy_429184}</span>)}</div>
            </div>
          
          </div>
          
          <div className='baseFont elTextRestaurantWWW' style={style_textRestaurantWWW_outer}>
            <div style={style_textRestaurantWWW}>
              <div>{value_textRestaurantWWW !== undefined ? value_textRestaurantWWW : (<span className="propValueMissing">{this.props.locStrings.restaurantdetails_textdescriptioncopy_421084}</span>)}</div>
            </div>
          
          </div>
          
          <div className='elLine' style={style_line_outer}>
            <div style={style_line} />
          
          </div>
          
          <div className='headlineFont elTextReviewsHeader' style={style_textReviewsHeader_outer}>
            <div style={style_textReviewsHeader} onClick={this.onClick_elTextReviewsHeader} >
              <div>{value_textReviewsHeader !== undefined ? value_textReviewsHeader : (<span className="propValueMissing">{this.props.locStrings.reviews_textblock_1033646}</span>)}</div>
            </div>
          
          </div>
          
          <div className='hasNestedComps elList'>
            <ul style={style_list}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <ListItemReview dataSheetId={'reviews'} dataSheetRow={row} reviewSubject={row.reviewSubject} reviewerName={row.reviewerName} reviewRating={row.reviewRating} reviewText={row.reviewText} reviewerProfilePicUrl={row.reviewerProfilePicUrl} reviewDate={row.reviewDate} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (<li key={row.key}>{itemComp}</li>)
              })}
            </ul>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">WeekActivities</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_weekactivities} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
        <div className="screenFgContainer">
          <div className="foreground">
            <Button className='actionFont elFab' style={style_fab}  variant="fab" color="accent" onClick={this.onClick_elFab} >
              <img src={btn_icon_342806} alt="" style={{width: '100%', marginTop: '4%'}} />
            </Button>
          </div>
        </div>
      </div>
    )
  }
  

}
