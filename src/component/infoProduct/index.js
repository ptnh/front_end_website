import './style.scss';

import { useEffect, useState } from "react";

import ViewProduct from "../viewProduct";
import { createApiCart } from "../../api";

import { FaEye, FaOpencart } from "react-icons/fa";

const InfoProduct = ({infoProducts, store}) => {
    // chọn số lượng
    const [slSpMua, setSlSpMua] = useState(0);

    const decrementQuantity = () => {
        if(slSpMua>0){
            setSlSpMua(slSpMua-1);
        }
    }
    const incrementQuantity = () => {
        if(slSpMua<10){
            setSlSpMua(slSpMua+1);
        }
    }

    const toggleAddProductInfo = (e) => {
        e.preventDefault();
        const addProduct = new FormData();
        addProduct.append('id_cart', 0);
        addProduct.append('id_owner', 1);
        addProduct.append('id_product', infoProducts.id_product);
        addProduct.append('name_product', infoProducts.name_product);
        addProduct.append('image_represent', infoProducts.price_product);
        addProduct.append('price_product', infoProducts.price_product);
        addProduct.append('quantity', 1);
        fetch(createApiCart, {
            method: 'POST',
            body: addProduct,
        })
            .then((response) => {
                if (response.ok) {
                    alert('ôk');
                } else {
                    alert('no');
                }
            })
            .catch((error) => console.error('Error deleting product:', error));
    };

    return <>
        <div class="detail-info-view-product-view-product">
            <h3 id="product-name" class="heading-view-product-view-product">{infoProducts.name_product}</h3>
            <div style={{display: 'flex'}}>
                <p class="trademark-product-view-product">Thương hiệu: {store} |</p>
                <p class="status-warehouse-view-product">Tình trạng: Còn hàng</p>
            </div>
                        
                <p id="price" class="price-bought-product-view-product">{infoProducts.price_product}đ</p>
                <p id="description" class="info-product-view-view-product">{infoProducts.describe_product}</p>
                <hr/>
                <p style={{margin: '10px 0px 10px 20px'}}>Màu sắc:</p>
                <section class="color-section-view-product">
                    <button class="color-box-view-product red" onclick="selectColor('red')"></button>
                    <button class="color-box-view-product green" onclick="selectColor('green')"></button>
                    <button class="color-box-view-product blue" onclick="selectColor('blue')"></button>
                    <button class="color-box-view-product orange" onclick="selectColor('orange')"></button>
                </section>
                <p style={{margin: '10px 0px 10px 20px'}}>Kích thước:</p>
                <div class="button-container-view-product">
                    <button class="small-button-view-product" onclick="changeSizeSmall(event)">Nhỏ</button>
                    <button class="large-button-view-product" onclick="changeSizeBig(event)">Lớn</button>
                </div>  
                    {/* <div class="selected-color">
                        <p>Color selected: <span id="selectedColor"></span></p>
                    </div> */}
                <section class="adjust-quantity-view-product">
                    <p class="text-quantity-view-product">Số lượng:</p>
                    <div class="quantity-control-view-product">
                        <button id="decrement-view-product" onClick={decrementQuantity}>-</button>
                        <span id="quantity-view-product">{slSpMua}</span>
                        <button id="increment-view-product" onClick={incrementQuantity}>+</button>
                    </div>
                </section>
                <input type="hidden" id="productid" name="productid" value="" />
                {/* <input type="hidden" id="productname" name="productname" value=" <php echo $spone['product_name']; ?>"> --> */}
                {/* <input type="hidden" id="selectedColor" name="selectedColor" value=""> --> */}
                <input type="hidden" id="selectedColor" name="selectedColor" value="" />
                <input type="hidden" id="selectedSize" name="selectedSize" value="" />
                <input type="hidden" id="quantity" name="quantity" value="1" />
                <input type="hidden" id="price_input" name="price" value="" />
                <button class="btn-add-product-in-cart-view-product" onClick={toggleAddProductInfo}>Thêm sản phẩm vào giỏ hàng</button>
        </div>      
    </>
}

export default InfoProduct;