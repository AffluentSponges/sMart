import React from 'react';

import Header from './components/Header.jsx';
import CategoriesNav from './components/CategoriesNav.jsx';
import ItemElement from './components/ItemElement.jsx';
import ItemList from './components/ItemList.jsx';
import data from './data.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      currentCategory:'',
      items: []
    }
  }

  componentDidMount() {
    this.setState({items: data});
  }

  render() {
    console.log('render', this.state.items);
    return (
      <div>
        <Header />
        <CategoriesNav />
        <ItemList items={this.state.items}/>
        {this.props.children}
      </div>
    );
  }
}


export default App;
        // {this.state.itemList.map((item) =>
        //   <ItemElement />
        // )}