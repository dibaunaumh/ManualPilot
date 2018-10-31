import React, { Component } from 'react';
import './App.css';
import WeekSummary from './WeekSummary';


export default class Week extends Component {

  // This component doesn't use any properties

  onClick_elList = (ev) => {
    let newVal = this.props.datasheet.key;
    this.props.appActions.updateDataSlot('ds_selectedWeekId', newVal);
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const dataSheet_weeks = this.props.appActions.getDataSheet('weeks');
    const style_background = {
        width: '100%',
        height: '100%',
     };
    const style_background_outer = {
        backgroundColor: '#f6f6f6',
        pointerEvents: 'none',
     };
    const style_list = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('weeks').items);
    
    const style_list_outer = {
        cursor: 'pointer',
     };
    
    return (
      <div className="Week" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow">
          <div className='hasNestedComps elList' style={style_list_outer}>
            <ul style={style_list} onClick={this.onClick_elList} >
              {items_list.map((row, index) => {
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <WeekSummary dataSheetId={'weeks'} dataSheetRow={row} weekScore={row.weekScore} weekStartDate={row.weekStartDate} weekEndDate={row.weekEndDate} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (<li key={row.key}>{itemComp}</li>)
              })}
            </ul>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
