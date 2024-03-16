import "./style.scss"

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import CartProduct from "../../../../component/cartProduct";

import { FaSearch } from "react-icons/fa";
import { FaShoppingCart, FaChevronRight} from "react-icons/fa";
import { CgPlayListSearch } from "react-icons/cg";

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
    <>
        <header>
            <div class="header_first">
                <div class="sectionleft">
                    <img src="slider_1.png" alt="Logo" width="160" height="50"></img>
                </div>
                <section class="component-search">
                    <input class="input-content-search" type="text" placeholder="Nhập từ khóa tìm kiếm" />
                    <button class="search-button">
                        <i class="fas fa-search"><FaSearch /></i>
                    </button>
                </section>
                <section class="component-login">
                    <Link to="/dang-ky" className="link-login">Đăng ký</Link>
                    <Link to="/dang-nhap" className="link-singin">Đăng nhập</Link>
                </section>
                <CartProduct />
            </div>
            
            <div class="header_second">
                <section class="component-catalog">
                    <div class="open-catalog"  onClick={toggleVisibility}>
                        <p class="title-icon"><CgPlayListSearch /></p>
                        <p class="title-content">DANH MỤC SẢN PHẨM</p>
                    </div>
                    
                    <div className={`option-catalog ${isVisible ? 'visible' : ''}`}   id="optionCatalog">
                        <div class="option-1">
                            <p class="option-icon"><FaChevronRight /></p>
                            <Link to="/dang-ky" className="option-content">Sofa</Link>
                        </div>
                        <div class="option-1">
                            <p class="option-icon"><FaChevronRight /></p>
                            <Link to="/dang-ky" className="option-content">Ghế</Link>
                        </div>
                        <div class="option-1">
                            <p class="option-icon"><FaChevronRight /></p>
                            <Link to="/dang-ky" className="option-content">Trang trí</Link>
                        </div>
                        <div class="option-1">
                            <p class="option-icon"><FaChevronRight /></p>
                            <Link to="/dang-ky" className="option-content">Kệ sách</Link>
                        </div>
                        <div class="option-1">
                            <p class="option-icon"><FaChevronRight /></p>
                            <Link to="/dang-ky" className="option-content">Bàn</Link>
                        </div>
                        <div class="option-1">
                            <p class="option-icon"><FaChevronRight /></p>
                            <Link to="/dang-ky" className="option-content">Tủ quần áo</Link>
                        </div>
                    </div>
                </section>
                <section class="component-menu">
                    <div class="has-menu">
                        <ul class="has-menu-level-1">
                            <li> <Link to="" className="has-a">Trang chủ</Link>
                                <span></span>
                            </li>
                            <li> <Link to="/gioi-thieu" className="has-a">Giới thiệu</Link>                     
                                <span></span>
                            </li>
                            <li><a class="has-a" href="#">Sản phẩm <i class="fa-solid fa-caret-down"></i></a>
                                <span></span>
                                <div class="sub-menu">
                                    <div class="sub-menu-level-1">
                                        <p class="sub-li"><Link to="/da" className="sub-a">Sofa</Link></p>
                                        <p class="sub-li"><Link to="" className="sub-a">Ghế</Link></p>
                                        <p class="sub-li"><Link to="" className="sub-a">Trang trí</Link></p>
                                        <p class="sub-li"><Link to="" className="sub-a">Kệ sách</Link></p>
                                        <p class="sub-li"><Link to="" className="sub-a">Bàn</Link></p>
                                    </div>
                                </div>
                            </li>
                            <li><a class="has-a" href="bai-bao">Tin tức</a>
                                <span></span>
                            </li>
                            <li><a class="has-a" href="lien-he">Liên hệ</a>
                                <span></span>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="component-hotline">
                    <p class="icon-hot"><CgPlayListSearch /></p>
                    <p class="text">Hotline:</p>
                    <p class="phone">19006750</p>
                </section>
            </div>
        </header>
       
    </>)
}

export default Header;