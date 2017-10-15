import React from 'react';
import TabView from '../../components/tabview/tabview';
import TabBody from './tabbody';
import {connect} from 'react-redux'; 

const UserInfo = (props) => {
    const headers= ['mainLife', 'spouse', 'children'];

    return (  
      
      <div className="tabs-view col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div className="tab-title-area">  
            <div className="tab-title">
              {props.languagePack.MAIN_LIFE_PERSONAL_INFO}
            </div>
        </div> 
        <TabView  headers={headers} 
                  tabChnage={props.tabChange} 
                  activeMainTab={props.activeMainTab} 
                  tabClass="main_tab" 
                  tabBody = {TabBody}/>
      </div> 
   );
}


export default UserInfo; 