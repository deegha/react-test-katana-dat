import React, { Component } from 'react';


export default class TabView extends Component {
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
    document.getElementById(this.props.tabClass+id).classList.add("active-main-tab");
  }

  componentDidMount() {
    this.initializeTabs(this.state.activeMainTab)
  }

  componentDidUpdate(){
    this.initializeTabs(this.state.activeMainTab)
  }

  render(){
  
    const header = this.props.headers.map((header, key )=> {
      return (
        <div  key={key} 
              id={key} 
              className="single-tab" 
              onClick={()=>{this.props.tabChnage(key)}} >
              {header}
        </div>
      )
    });

    const tabs = this.props.headers.map((tab, id)=> {
      const tabId = this.props.tabClass+id
      return (
        <div className="tab-body main-tabs" id={tabId} key={id}>
            <this.props.tabBody tabId={tabId} />
        </div>
      )
    });

    return(
      <div className="tabView">
        <div className="tab-header-area">
          {header}
        </div>
        <div className="tab-body-area">
          {tabs}
        </div>
      </div>   
    )
  }
}


