import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class ListItemWeeksDetails extends Component {

  // Properties used by this component:
  // restaurantName, restaurantAddress, restaurantOpeningHours, dataSheetRow, visualStateIndex

  // --- Functions for component state index 0 (1 of 2) --- 
  
  onClick_state0_elButton450243 = (ev) => {
    let newVal = this.props.dataSheetRow.key;
    this.props.appActions.updateDataSlot('ds_selectedRestaurantId', newVal);
  
    this.setState({visualStateIndexOverride: 1})
  
  }
  
  
  renderState0() {
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
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_text = this.props.restaurantName;
    
    const style_text_outer = {
        pointerEvents: 'none',
     };
    const style_textCopy = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_textCopy = this.props.restaurantAddress;
    
    const style_textCopy_outer = {
        pointerEvents: 'none',
     };
    const style_textCopy3 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_textCopy3 = this.props.dataSheetRow ? this.props.dataSheetRow.key : '';
    
    const style_textCopy3_outer = {
        pointerEvents: 'none',
     };
    const style_textCopy2 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_textCopy2 = this.props.restaurantOpeningHours;
    
    const style_textCopy2_outer = {
        pointerEvents: 'none',
     };
    const style_button = {
        display: 'block',
        color: '#424242',
        textAlign: 'center',
     };
    const style_button_outer = {
        cursor: 'pointer',
     };
    const style_line = {
        borderTop: '1px solid rgba(0, 0, 0, 0.3024)',
     };
    const style_line_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="ListItemWeeksDetails" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight state0_elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow">
          <div className='headlineFont state0_elText282255' style={style_text_outer}>
            <div style={style_text}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.listitemrestaurant2_text_282255}</span>)}</div>
            </div>
          
          </div>
          
          <div className='baseFont state0_elTextCopy152426' style={style_textCopy_outer}>
            <div style={style_textCopy}>
              <div>{value_textCopy !== undefined ? value_textCopy : (<span className="propValueMissing">{this.props.locStrings.listitemrestaurant2_textcopy_152426}</span>)}</div>
            </div>
          
          </div>
          
          <div className='baseFont state0_elTextCopy3785607' style={style_textCopy3_outer}>
            <div style={style_textCopy3}>
              <div>{value_textCopy3 !== undefined ? value_textCopy3 : (<span className="propValueMissing">{this.props.locStrings.listitemrestaurant2_textcopy3_785607}</span>)}</div>
            </div>
          
          </div>
          
          <div className="flowRow flowRow_ListItemWeeksDetails_state0_elTextCopy2917188_917188">
          <div className='baseFont state0_elTextCopy2917188' style={style_textCopy2_outer}>
            <div style={style_textCopy2}>
              <div>{value_textCopy2 !== undefined ? value_textCopy2 : (<span className="propValueMissing">{this.props.locStrings.listitemrestaurant2_textcopy2_917188}</span>)}</div>
            </div>
          
          </div>
          
          </div>
          <div className='actionFont state0_elButton450243' style={style_button_outer}>
            <Button style={style_button}  variant="flat" color="accent" onClick={this.onClick_state0_elButton450243} >
              {this.props.locStrings.listitemrestaurant2_button_450243}
            </Button>
          
          </div>
          
          <div className='state0_elLine868599' style={style_line_outer}>
            <div style={style_line} />
          
          </div>
          
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 2) --- 
  
  onClick_state1_elButton450243 = (ev) => {
    let newVal = this.props.dataSheetRow.key;
    this.props.appActions.updateDataSlot('ds_selectedRestaurantId', newVal);
  
    this.setState({visualStateIndexOverride: 1})
  
  }
  
  
  renderState1() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_background = {
        width: '100%',
        height: '100%',
     };
    const style_background_outer = {
        backgroundColor: 'rgba(79, 79, 79, 0.2675)',
        pointerEvents: 'none',
     };
    const style_text = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_text = this.props.restaurantName;
    
    const style_text_outer = {
        pointerEvents: 'none',
     };
    const style_textCopy = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_textCopy = this.props.restaurantAddress;
    
    const style_textCopy_outer = {
        pointerEvents: 'none',
     };
    const style_textCopy3 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_textCopy3 = this.props.dataSheetRow ? this.props.dataSheetRow.key : '';
    
    const style_textCopy3_outer = {
        pointerEvents: 'none',
     };
    const style_textCopy2 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_textCopy2 = this.props.restaurantOpeningHours;
    
    const style_textCopy2_outer = {
        pointerEvents: 'none',
     };
    const style_button = {
        display: 'block',
        color: '#424242',
        textAlign: 'center',
     };
    const style_button_outer = {
        cursor: 'pointer',
     };
    const style_line = {
        borderTop: '1px solid rgba(0, 0, 0, 0.3024)',
     };
    const style_line_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="ListItemWeeksDetails" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight state1_elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow">
          <div className='headlineFont state1_elText282255' style={style_text_outer}>
            <div style={style_text}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.listitemrestaurant2_text_282255}</span>)}</div>
            </div>
          
          </div>
          
          <div className='baseFont state1_elTextCopy152426' style={style_textCopy_outer}>
            <div style={style_textCopy}>
              <div>{value_textCopy !== undefined ? value_textCopy : (<span className="propValueMissing">{this.props.locStrings.listitemrestaurant2_textcopy_152426}</span>)}</div>
            </div>
          
          </div>
          
          <div className='baseFont state1_elTextCopy3785607' style={style_textCopy3_outer}>
            <div style={style_textCopy3}>
              <div>{value_textCopy3 !== undefined ? value_textCopy3 : (<span className="propValueMissing">{this.props.locStrings.listitemrestaurant2_textcopy3_785607}</span>)}</div>
            </div>
          
          </div>
          
          <div className="flowRow flowRow_ListItemWeeksDetails_state1_elTextCopy2917188_917188">
          <div className='baseFont state1_elTextCopy2917188' style={style_textCopy2_outer}>
            <div style={style_textCopy2}>
              <div>{value_textCopy2 !== undefined ? value_textCopy2 : (<span className="propValueMissing">{this.props.locStrings.listitemrestaurant2_textcopy2_917188}</span>)}</div>
            </div>
          
          </div>
          
          </div>
          <div className='actionFont state1_elButton450243' style={style_button_outer}>
            <Button style={style_button}  variant="flat" color="accent" onClick={this.onClick_state1_elButton450243} >
              {this.props.locStrings.listitemrestaurant2_button_450243}
            </Button>
          
          </div>
          
          <div className='state1_elLine868599' style={style_line_outer}>
            <div style={style_line} />
          
          </div>
          
        </div>
      </div>
    )
  }
  
  
  render() {
    switch (parseInt((this.state && this.state.visualStateIndexOverride !== undefined) ? this.state.visualStateIndexOverride : this.props.visualStateIndex, 10)) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
    }
  }
  

}
