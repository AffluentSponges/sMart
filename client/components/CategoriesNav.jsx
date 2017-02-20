import React from 'react';
import { Link } from 'react-router';

const CategoryList = ({active, children, to, currentCategoryHandler}) => (
    <li>
      <Link to={to} onClick={()=>{console.log(children);currentCategoryHandler(children);}}>
            {children}
      </Link>
    </li>
)

class CategoriesNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul className="row">
          <h5>Categories</h5>
          <CategoryList to={'/fashion-accessories'} currentCategoryHandler={this.props.currentCategoryHandler}>fashion-accessories</CategoryList>
          <CategoryList to={'/home-garden'} currentCategoryHandler={this.props.currentCategoryHandler}>home-garden</CategoryList>
          <CategoryList to={'/electronics'} currentCategoryHandler={this.props.currentCategoryHandler}>electronics</CategoryList>
          <CategoryList to={'/baby-child'} currentCategoryHandler={this.props.currentCategoryHandler}>baby-child</CategoryList>
          <CategoryList to={'/cars-motors'} currentCategoryHandler={this.props.currentCategoryHandler}>cars-motors</CategoryList>
          <CategoryList to={'/sports-leisure-games'} currentCategoryHandler={this.props.currentCategoryHandler}>sports-leisure-games</CategoryList>
          <CategoryList to={'/movies-books-music'} currentCategoryHandler={this.props.currentCategoryHandler}>movies-books-music</CategoryList>
          <CategoryList to={'/other'} currentCategoryHandler={this.props.currentCategoryHandler}>other</CategoryList>
        </ul>
      </div>
    );
  }
}


export default CategoriesNav;


// Fashion and Accessories
// Home and Garden
// Electronics
// Baby and Child
// Cars and Motors
// Sports, Leisure and Games
// Movies, Books and Music
// Other