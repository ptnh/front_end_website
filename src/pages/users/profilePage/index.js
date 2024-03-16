import {meno} from "react";
import { useEffect, useState } from "react";
const ProfilePage = () => {
    const [isHovered, setIsHovered] = useState(false);
      
    const handleButton1Click = () => {
        // Xử lý khi nút 1 được click
        console.log('Button 1 clicked');
    };
      
    const handleButton2Click = () => {
        // Xử lý khi nút 2 được click
        console.log('Button 2 clicked');
    };  
    
    return (
        <div style={{ position: 'relative' }}>
            <a href="http://example.com" target="_blank" rel="noopener noreferrer">
                <img src="path/to/your/image.jpg"
                    alt="Description"
                    style={{ width: '100%', height: 'auto', filter: isHovered ? 'brightness(70%)' : 'brightness(100%)' }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
            </a>
            {isHovered && (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
                  <button onClick={handleButton1Click}>Button 1</button>
                  <button onClick={handleButton2Click}>Button 2</button>
                </div>
            )}
        </div>
    );
};
export default ProfilePage;