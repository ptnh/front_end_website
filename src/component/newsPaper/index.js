import './style.scss';

import { useEffect, useState } from "react";

import { SlCalender } from "react-icons/sl";
import { FaEye, FaOpencart, FaChevronRight} from "react-icons/fa";

const NewsPaper = () => {
    return <>
        <div className="newspaper">  
            <img className="img-main" src="background.jpg"/>    
            <div className="time-paper" style={{fontWeight:'bold'}}>
                <div className="day" style={{marginRight:'30px'}}>
                <SlCalender style={{marginRight:'5px', cursor:'pointer'}}/>
                    1/1/1111
                </div>
                <div className="actor" style={{cursor:'pointer'}}>
                    Đăng bởi: Danh Danh
                </div>
            </div>
            <div className="content-paper">
                <h4 className="title-paper">Tên bài báo</h4>
                <p className="paragraph">Đối ha ha ha ha ha ha Đối ha ha ha ha ha haĐối ha ha ha ha ha haĐối ha ha ha ha ha havv</p>
            </div>
        </div>
    </>  
}

export default NewsPaper;