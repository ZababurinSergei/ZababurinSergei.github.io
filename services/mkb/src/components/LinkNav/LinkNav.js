import React, {useEffect} from 'react';
import './index.style.css';
import { Link } from "react-router-dom";

function LinkNav({ active, setActive, onClick, link, name, className = {} }) {
    return (
        <>
            <Link
                onClick={() => {
                    setActive(link)
                }}
                to={`${process.env.PUBLIC_URL}${link}`}
                className={`link__navigation ${className.link__navigation} ${link.endsWith(active) ? 'isActiveLink': ''}`}
            >
                { name }
            </Link>
        </>
    );
}

export default LinkNav;
