import './style.scss';

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import ViewProduct from "../viewProduct";
import { createApiCart } from "../../api";

import { FaEye, FaOpencart } from "react-icons/fa";

const Product = ({idProduct, imgProduct, nameProduct, price, store}) => {
    const [isHovered, setIsHovered] = useState(false);

    // const [idViewProduct, setIdViewProduct] = useState(1);
    const [isShowMini, setShowMini] = useState(false);

    const toggleShowMini = (e) => {
        e.preventDefault();
        // setIdViewProduct(idProduct);
        // alert(idViewProduct);
        setShowMini(!isShowMini);
    };

    const toggleAddProduct = (e) => {
        e.preventDefault();
        const addProduct = new FormData();
        addProduct.append('id_cart', 0);
        addProduct.append('id_owner', 1);
        addProduct.append('id_product', idProduct);
        addProduct.append('name_product', nameProduct);
        addProduct.append('image_represent', imgProduct);
        addProduct.append('price_product', price);
        addProduct.append('quantity', 1);
        fetch(createApiCart, {
          method: 'POST',
          body: addProduct,
      })
        .then((response) => {
            if (response.ok) {
                // alert('ôk');
            } else {
                // alert('no');
            }
        })
        .catch((error) => console.error('Error deleting product:', error));   
    };

    return <>
    <ViewProduct idProduct={idProduct} imageUrl={imgProduct} isViewProduct={isShowMini} toggleViewProduct={toggleShowMini} store={store}/>
        <section id="product-follow-id" class="component-mini-advertiver-outstanding-products">
            <div class="mini-image-represent">
                <div class="mini-position-ticket"> 
                    <Link to="/san-pham" className="show-detail-product">        
                        <img src={`${imgProduct}`} class="mini-ticket-image" />
                        <span class="mini-hide">
                            <div class="mini-transform-buy">
                                <button onClick={toggleShowMini} class="mini-btn-view-product"><FaEye /></button>
                                <button  onClick={toggleAddProduct} class="mini-btn-view-more"><FaOpencart /></button>
                            </div>
                        </span>
                    </Link>
                </div>
            </div>
            <div class="mini-detail-info-represent">
                <div class="mini-name-product">{nameProduct}</div>
                <div class="mini-price-product">{price} <span class="mini-vnd">đ</span></div>
            </div>
        </section>    
    </>
}
export default Product;