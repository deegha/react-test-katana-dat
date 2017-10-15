import React, { Component } from 'react';


export default class Tabheader extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      "activeMainTab" : props.activeMainTab
    }
  }

  componentWillReceiveProps(nextProps){
     if(this.state.activeMainTab !== nextProps.activeMainTab)
      this.setState({activeMainTab:nextProps.activeMainTab});
  }

  initializeTabs(id) {
    const tabs = document.getElementsByClassName("active-main-tab");
    for (var inc = 0; inc < tabs.length; inc++) {
      tabs[inc].classList.remove('active-main-tab');
    }
    document.getElementById("main_tab_"+id).classList.add("active-main-tab");
  }

  componentDidMount() {
    this.initializeTabs(this.state.activeMainTab)
  }

  componentDidUpdate(){
    this.initializeTabs(this.state.activeMainTab)
  }

  render(){
  
    const header = this.props.headers.map((header, key )=>{
      return (
        <div key={key} id={key} className="single-tab" onClick={()=>{this.props.tabChnage(key)}} >{header}</div>
      )
    });

    const tabs = this.props.headers.map((tab, id)=>{
      const tabId = "main_tab_"+id
      return (
        <div className="tab-body main_tabs" id={tabId}>
            {tab}tab
        </div>
      )
    });

    return(
      <div>
        {header}
        {tabs}
      </div>   
    )
  }
}


