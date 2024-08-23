import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faG,
    faUser,
    faGear,
    faBagShopping,
    faXmark,
    faLocationDot,
    faBell,
    faArrowRightFromBracket,
    faArrowsToDot,
    faHardDrive,
} from "@fortawesome/free-solid-svg-icons";

function Navigation() {
    return (
        <div className="bg-[#090909] text-white p-4 rounded-lg flex flex-col w-16 mt-2 ml-2">
            <FontAwesomeIcon icon={faHardDrive} className="text-3xl mb-16 bg-[#090909] hover:text-4xl transition-all" />
            <FontAwesomeIcon icon={faUser} className="mb-16 bg-[#090909] hover:text-4xl transition-all" />
            <FontAwesomeIcon icon={faGear} className="mb-16 bg-[#090909] hover:text-4xl transition-all" />
            <FontAwesomeIcon icon={faBagShopping} className="mb-16 bg-[#090909] hover:text-4xl transition-all" />
            <div className="relative w-8 h-8 rounded-full bg-white mb-16 flex items-center px-2 hover:rounded-lg transition-all">
                <FontAwesomeIcon icon={faArrowsToDot} className="text-[#525252] bg-transparent " />
            </div>
            <FontAwesomeIcon icon={faLocationDot} className="mb-16 bg-[#090909] hover:text-4xl transition-all" />
            <FontAwesomeIcon icon={faBell} className="mb-16 bg-[#090909] hover:text-4xl transition-all" />
            <FontAwesomeIcon icon={faArrowRightFromBracket} className="mb-16 bg-[#090909] hover:text-4xl transition-all" />
        </div>
    );
}

export default Navigation;