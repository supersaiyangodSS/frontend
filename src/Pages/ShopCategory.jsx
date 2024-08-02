import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const filteredProducts = all_product.filter((item) => {
    return props.category === item.category && (selectedSubcategory === 'all' || item.subcategory === selectedSubcategory);
  });

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing {filteredProducts.length} out of {all_product.length} products</span>
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      {props.category === 'men' && (
        <div className='shopcategory-container'>
        <div className="shopcategory-filters">
          <button onClick={() => handleSubcategoryClick('all')}>All</button>
          <button onClick={() => handleSubcategoryClick('jackets')}>Jackets</button>
          <button onClick={() => handleSubcategoryClick('jeans')}>Jeans</button>
          <button onClick={() => handleSubcategoryClick('tshirts')}>T-Shirts</button>
        </div>
        </div>
      )}
      <div className="shopcategory-products">
        {filteredProducts.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
