import React, {PropTypes} from 'react';

const Nav = (props) => {  
    return (
 
<div className="row clearfix">
  <div className="header_nav">    
    <nav className="navbar">
      <div className="navbar-header_nav">
        <button type="button" onClick={()=>{onClickTogle()}} className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <div className="navbar-brand">
          <a className="logo" href="/">
          <img src="img/logo.png" alt="Union App" />
          </a>
          <a className="logo-text" href="/">DAT</a>
        </div>
      </div>
      <div className="navbar-collapse collapse" id="navbar-collapse" >
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#"><span className="icon-Table-Chart2"></span>FNA</a></li>
          <li className="dropdown">
            <a href="#"><span className="icon-Question-File"></span>Quotation</a>
            <div className="dropdown-content">
            <a href="">Text line 1</a>
            <a href="">Text line 2</a>
            <a href="">Text line 3</a>
            <a href="">Text line 4</a>
            <a href="">Text line 5</a>
            </div>
          </li>
          <li><a href=""><span className="icon-Table-Chart1"></span>Quotation No: 43629364</a></li>
          <li className="search-li">
            <form className="form-horizonal">
            <span className="icon-Search-File s-icon"></span>
            <input type="text" className="form-control s-input" placeholder="search" />
            </form>
          </li>
          <li className="dropdown1">
            <a href="" ><span className="icon-Settings-Window"></span> <span className="hidden-md hidden-sm hidden-lg">Settings</span></a>
            </li>
          <li><a href="./"><span className="icon-Exit-2"></span> <span className="hidden-md hidden-sm hidden-lg">Exit</span></a></li>
        </ul>
      </div>
    </nav>
  </div>
</div>  
    );
}

const onClickTogle = () => {
  const collapseBtn = document.getElementById('navbar-collapse');
  togleClass(collapseBtn, 'collapse');
}

const togleClass = (ele,cls) => {
  if(ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'))) {
    ele.classList.remove(cls);
  }else{
    ele.classList.add(cls);
  }
}     

export default Nav;  
