import React from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router';
import Search from './Search.jsx'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  handleItemClick(e, { name }) {
    // this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state
    return (
      <Menu>
        <Menu.Item as={Link} to='/'>SMart</Menu.Item>
        <Search items={this.props.items}/>
        <Menu.Item as={Link} to='/login' name='Log in' active={activeItem === 'jobs'} onClick={this.handleItemClick} />
        <Menu.Item name='Sell Your Stuff' active={activeItem === 'locations'} onClick={this.handleItemClick} />
      </Menu>      
    );
  }
}

export default Header;


// <Menu.Item as={Search}></Menu.Item>
       
// import React from 'react';
// import { Menu } from 'semantic-ui-react'
// import { Link } from 'react-router';

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }


//   render() {
//     return (
//       <nav className="navbar navbar-default">
//         <div className="container-fluid">
//           <div className="navbar-header">
//             <a className="navbar-brand" href="#">sMart</a>
//             <form className="navbar-form navbar-left" role="search">
//               <div className="form-group">
//                 <input type="text" className="form-control" placeholder="What are you looking for?" />
//               </div>
//               <button type="submit" className="btn btn-default">Search</button>
//             </form>              
//             <div className="navbar-right">
//             <Link to='login' type="button" className="btn btn-default navbar-btn">Log in</Link>
//             <button type="button" className="btn btn-default navbar-btn">Sell Your Stuff</button>
//             </div>
//           </div>
//         </div>
//       </nav>   
//     );
//   }
// }

// export default Header;

