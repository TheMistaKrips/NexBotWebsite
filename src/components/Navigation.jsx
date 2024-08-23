import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faGear,
    faBagShopping,
    faLocationDot,
    faBell,
    faArrowRightFromBracket,
    faArrowsToDot,
    faEthernet,
} from "@fortawesome/free-solid-svg-icons";

function Navigation() {
    return (
        <div className="bg-[#090909] text-white p-4 rounded-lg flex flex-col w-16 mt-2 ml-2 relative">
            <FontAwesomeIcon icon={faEthernet} className="text-3xl mb-auto bg-transparent hover:text-4xl transition-all hover:shadow-white hover:shadow-md " />
            <FontAwesomeIcon icon={faUser} className="mb-auto bg-transparent hover:text-4xl transition-all hover:shadow-white hover:shadow-md" />
            <FontAwesomeIcon icon={faGear} className="mb-auto bg-transparent hover:text-4xl transition-all hover:shadow-white hover:shadow-md" />
            <FontAwesomeIcon icon={faBagShopping} className="mb-auto bg-transparent hover:text-4xl transition-all hover:shadow-white hover:shadow-md" />
            <div className="relative w-8 h-8 rounded-full bg-white mb-auto flex items-center px-2 hover:rounded-lg transition-all hover:shadow-white hover:shadow-md">
                <FontAwesomeIcon icon={faArrowsToDot} className="text-[#525252] bg-transparent " />
            </div>
            <FontAwesomeIcon icon={faLocationDot} className="mb-auto bg-transparent hover:text-4xl transition-all hover:shadow-white hover:shadow-md" />
            <FontAwesomeIcon icon={faBell} className="mb-auto bg-transparent hover:text-4xl transition-all hover:shadow-white hover:shadow-md" />
            <FontAwesomeIcon icon={faArrowRightFromBracket} className="mb-auto bg-transparent hover:text-4xl transition-all hover:shadow-white hover:shadow-md" />
        </div>
    );
}

export default Navigation;