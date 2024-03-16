import './style.scss';

import { useEffect, useState } from "react";

import ViewProduct from "../viewProduct";

import { FaEye, FaOpencart } from "react-icons/fa";
const ChangeImage = ({imageUrl}) => {
    // thay đổi ảnh
    const [currentImage, setCurrentImage] = useState(imageUrl);
    const [currentDescription, setCurrentDescription] = useState('Description 1');
 
    const changeImageInfoProduct = (image, description) => {
        setCurrentImage(image);
        setCurrentDescription(description);
    };
 
    // cuộn ngang ảnh
    const [currentPositionPictureDetail, setCurrentPositionPictureDetail] = useState(0);
 
    const nextImagePictureSmall = () => {
        setCurrentPositionPictureDetail(currentPositionPictureDetail+110);
    };
     
    const previousImagePictureSmall = () => {
        setCurrentPositionPictureDetail(currentPositionPictureDetail-110)
    };

    return <>
        <div>
            <img id="product-image" src={currentImage} class="image-info-product-view-product" />
            <div class="image-container-view-product">
                <div class="image-slider-view-product">
                    <div class="image-slide" style={{display:`flex`, transform: `translateX(${currentPositionPictureDetail}px)`, transition: 'transform 0.3s ease-in-out' }}>
                        <img src="slider_1.png" alt="Image 1" class="small-image-view-product" onClick={() => changeImageInfoProduct('slider_1.png', 'Description 1')}/>
                        <img src="background.jpg" alt="Image 2" class="small-image-view-product" onClick={() => changeImageInfoProduct('slider_2.png', 'Description 1')}/>
                        <img src="slider_1.png" alt="Image 3" class="small-image-view-product" onClick={() => changeImageInfoProduct('slider_1.png', 'Description 1')}/>
                        <img src="background.jpg" alt="Image 4" class="small-image-view-product" onClick={() => changeImageInfoProduct('slider_2.png', 'Description 1')}/>
                        <img src="slider_1.png" alt="Image 5" class="small-image-view-product" onClick={() => changeImageInfoProduct('slider_1.png', 'Description 1')} />
                        <img src="background.jpg" alt="Image 6" class="small-image-view-product" onClick={() => changeImageInfoProduct('slider_2.png', 'Description 1')}/>
                    </div>
                </div>
                <button class="btn-prev-button-view-product" onClick={previousImagePictureSmall}><FaEye/></button>
                <button class="btn-next-button-view-product" onClick={nextImagePictureSmall}><FaEye/></button>
            </div>
        </div>                   
    </>
}
export default ChangeImage;