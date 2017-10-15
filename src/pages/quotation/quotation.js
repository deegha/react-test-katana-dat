import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import * as productActions from  '../../actions/productsAction';
import * as localisationActions from  '../../actions/localisationAction';

import LocalisationEngine from '../../localisation/localisationEngine';
import  './quotation.css';

import UserInfo from './userInfo';

class Quotation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "activatedMainTab" : 0,
      "languagePack"     : LocalisationEngine.loadLanguage()
    }
    this.handleTabChange = this.handleTabChange.bind(this);
  } 
  
  componentDidMount() {     
    this.props.dispatch(productActions.productDetails(this.props.match.params.product));
    this.props.dispatch(localisationActions.localisationSetLangPack(this.state.languagePack));
  }

  handleTabChange (id) {
    this.setState({"activatedMainTab" : id})
  }
  
  render() {
    return (
      <div className="ContainerMain">
        <UserInfo tabChange={this.handleTabChange} 
                  activeMainTab={this.state.activatedMainTab}
                  languagePack={this.state.languagePack}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state); 
}

export default connect(mapStateToProps)(Quotation);  
