import './style.scss';

import LinkPage from "../../../component/linkPage";
import Register from "../../../component/register";
import Login from "../../../component/login";

import { FaEye, FaOpencart } from "react-icons/fa";
import { useEffect, useState } from "react";

const AuthenticationPage = () => {
    const [isAuthen, setIsAuthen] = useState('login');
  
    const [DataUser, setDataUser] = useState([
        { account: 'nhanhanh', password: 'nhanhanh' },
    ]);

    return <>
        <LinkPage titlePage={'ĐĂNG KÝ'} linkPage={'Đăng ký'}/>
            {isAuthen === 'login' ? (
                <>
                    <Login DataUser={DataUser} />
                </>
            ) : (
                <>
                    <Register DataUser={DataUser}/>
                    {setIsAuthen('login')}
                </>
            )}
    </>
}

export default AuthenticationPage;