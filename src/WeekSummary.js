import React, { Component } from 'react';
import './App.css';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class WeekSummary extends Component {

  // Properties used by this component:
  // weekScore, weekStartDate, weekEndDate, visualStateIndex

  // --- Functions for component state index 0 (1 of 2) ---

  onClick_state0_elButton660615 = (ev) => {
    let newVal = this.props.dataSheetRow.key;
    this.props.appActions.updateDataSlot('(null)', newVal);

    // Go to screen 'WeekActivities'
    this.props.appActions.goToScreen('weekactivities', { transitionId: 'fadeIn' });

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

     let transformBackgroundColorByScore = (input) => {
       let color = "";
       switch(input) {
         case 0: color = 'rgb(235, 237, 240)'; break;
         case 1: color = "rgb(255, 238, 74)"; break;
         case 2: color = "rgb(255, 197, 1)"; break;
         case 3: color = "rgb(254, 150, 0)"; break;
         case 4: color = "rgb(255, 0, 28)"; break;
         default: color = 'rgb(235, 237, 240)';
       }
       return color;
     }

    const style_background_outer = {
        backgroundColor: transformBackgroundColorByScore(this.props.weekScore),
        pointerEvents: 'none',
     };
    let transformPropValue_text = (input) => {
      // This function modifies the value for property 'text'.
      // There is a variable named 'input' that provides the property value.
      //
      // Handy example code snippets
      //
      // Update current component’s State from 0 to n
      //
      // this.setState({visualStateIndexOverride: 1})
      //
      // Playing with Data slot values
      //
      // Get data slot value
      //
      // var exampleValue="";
      // exampleValue=this.props.appActions.dataSlots['ds_Example'];
      //
      // Update data slot value
      //
      // var exampleValue="foo";
      // this.props.appActions.updateDataSlot('ds_Example', exampleValue);

      var d = input.toDate();
      var d_month = d.getMonth() + 1;
      var d_date = d.getDate();
      var d_year = d.getFullYear();
      return d_month + "/" + d_date + "/" + d_year;
    }
    const style_text = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_text = transformPropValue_text(this.props.weekStartDate);

    const style_text_outer = {
        pointerEvents: 'none',
     };
    let transformPropValue_start_date = (input) => {
      // This function modifies the value for property 'text'.
      // There is a variable named 'input' that provides the property value.
      //
      // Handy example code snippets
      //
      // Update current component’s State from 0 to n
      //
      // this.setState({visualStateIndexOverride: 1})
      //
      // Playing with Data slot values
      //
      // Get data slot value
      //
      // var exampleValue="";
      // exampleValue=this.props.appActions.dataSlots['ds_Example'];
      //
      // Update data slot value
      //
      // var exampleValue="foo";
      // this.props.appActions.updateDataSlot('ds_Example', exampleValue);

      var d = input.toDate();
      var d_month = d.getMonth() + 1;
      var d_date = d.getDate();
      var d_year = d.getFullYear();
      return d_month + "/" + d_date + "/" + d_year;
    }
    const style_start_date = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_start_date = transformPropValue_start_date(this.props.weekEndDate);

    const style_start_date_outer = {
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
      <div className="WeekSummary" style={baseStyle}>
        <div className="background">
          <div className='state0_elBackground' style={style_background_outer}>
            <div style={style_background} />

          </div>

        </div>
        <div className="layoutFlow">
          <div className='headlineFont state0_elText1029876' style={style_text_outer}>
            <div style={style_text}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.listitemweeksdetails2_text_1029876}</span>)}</div>
            </div>

          </div>

          <div className='baseFont state0_elStart_date535680' style={style_start_date_outer}>
            <div style={style_start_date}>
              <div>{value_start_date !== undefined ? value_start_date : (<span className="propValueMissing">{this.props.locStrings.listitemweeksdetails2_textcopy_535680}</span>)}</div>
            </div>

          </div>

          <div className='actionFont state0_elButton660615' style={style_button_outer}>
            <Button style={style_button}  variant="flat" color="accent" onClick={this.onClick_state0_elButton660615} >
              {this.props.weekScore}
            </Button>

          </div>

          <div className='state0_elLine770531' style={style_line_outer}>
            <div style={style_line} />

          </div>

        </div>
      </div>
    )
  }

  // --- Functions for component state index 1 (2 of 2) ---

  onClick_state1_elButton660615 = (ev) => {
    let newVal = this.props.dataSheetRow.key;
    this.props.appActions.updateDataSlot('(null)', newVal);

    // Go to screen 'WeekActivities'
    this.props.appActions.goToScreen('weekactivities', { transitionId: 'fadeIn' });

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
    let transformPropValue_text = (input) => {
      // This function modifies the value for property 'text'.
      // There is a variable named 'input' that provides the property value.
      //
      // Handy example code snippets
      //
      // Update current component’s State from 0 to n
      //
      // this.setState({visualStateIndexOverride: 1})
      //
      // Playing with Data slot values
      //
      // Get data slot value
      //
      // var exampleValue="";
      // exampleValue=this.props.appActions.dataSlots['ds_Example'];
      //
      // Update data slot value
      //
      // var exampleValue="foo";
      // this.props.appActions.updateDataSlot('ds_Example', exampleValue);

      var d = input.toDate();
      var d_month = d.getMonth() + 1;
      var d_date = d.getDate();
      var d_year = d.getFullYear();
      return d_month + "/" + d_date + "/" + d_year;
    }
    const style_text = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_text = transformPropValue_text(this.props.weekStartDate);

    const style_text_outer = {
        pointerEvents: 'none',
     };
    let transformPropValue_start_date = (input) => {
      // This function modifies the value for property 'text'.
      // There is a variable named 'input' that provides the property value.
      //
      // Handy example code snippets
      //
      // Update current component’s State from 0 to n
      //
      // this.setState({visualStateIndexOverride: 1})
      //
      // Playing with Data slot values
      //
      // Get data slot value
      //
      // var exampleValue="";
      // exampleValue=this.props.appActions.dataSlots['ds_Example'];
      //
      // Update data slot value
      //
      // var exampleValue="foo";
      // this.props.appActions.updateDataSlot('ds_Example', exampleValue);

      var d = input.toDate();
      var d_month = d.getMonth() + 1;
      var d_date = d.getDate();
      var d_year = d.getFullYear();
      return d_month + "/" + d_date + "/" + d_year;
    }
    const style_start_date = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const value_start_date = transformPropValue_start_date(this.props.weekEndDate);

    const style_start_date_outer = {
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
      <div className="WeekSummary" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight state1_elBackground' style={style_background_outer}>
            <div style={style_background} />

          </div>

        </div>
        <div className="layoutFlow">
          <div className='headlineFont state1_elText1029876' style={style_text_outer}>
            <div style={style_text}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.listitemweeksdetails2_text_1029876}</span>)}</div>
            </div>

          </div>

          <div className='baseFont state1_elStart_date535680' style={style_start_date_outer}>
            <div style={style_start_date}>
              <div>{value_start_date !== undefined ? value_start_date : (<span className="propValueMissing">{this.props.locStrings.listitemweeksdetails2_textcopy_535680}</span>)}</div>
            </div>

          </div>

          <div className='actionFont state1_elButton660615' style={style_button_outer}>
            <Button style={style_button}  variant="flat" color="accent" onClick={this.onClick_state1_elButton660615} >
              {this.props.weekScore}
            </Button>

          </div>

          <div className='state1_elLine770531' style={style_line_outer}>
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
