import React from 'react';
import './App.css';
import Equipment from './equipment';
import { AiOutlineQuestionCircle, AiOutlineDatabase, AiFillWarning, AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications } from 'react-icons/md';
import { HiUserCircle, HiHome } from 'react-icons/hi';


class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <nav className="navbar nav-bg text-white">
          <span className="lab">LAB</span>
          <form className="searchbar">
            <AiOutlineSearch />
            <input type="text" placeholder="Search"></input>
          </form>
          <div >
            <AiOutlineQuestionCircle />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <MdNotifications />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <HiUserCircle />
          </div>

        </nav>
        <div className="sidenav">
          <span className="a"><HiHome /></span>
          <span className="a"><AiOutlineDatabase /></span>
          <span className="a"><AiFillWarning /></span>
        </div>
        <div className="main">
          <div><Equipment /></div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;