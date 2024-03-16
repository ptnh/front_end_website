import './style.scss';

import { useEffect, useState } from "react";

import NewsPaper from "../../../component/newsPaper";
import LinkPage from "../../../component/linkPage";

import { FaEye, FaOpencart } from "react-icons/fa";

const PaperPage = () => {
    return <>
        <LinkPage titlePage={'Tin tức'} linkPage={'Tin tức'}/>
        <section class="title-type-paper">
            <div class="content-type-paper">
                <span>SẢN PHẨM NỔI BẬT</span>
            </div>
        </section>
        <div className="list-papers">
            <NewsPaper className="area-paper" />
            <NewsPaper className="area-paper"/>
            <NewsPaper className="area-paper"/>                
        </div>
    </>
}

export default PaperPage;