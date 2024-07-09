import React from "react";
import BottomDetail from "./footerBottomDetail";

const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <BottomDetail 
                list={['About Us', 'Services', 'Our Team', 'Partners']} 
            />
            
            <BottomDetail 
                list={['Company', 'Contact', 'Client', 'Employment']} 
            />

            <BottomDetail 
                list={['Enquiries', 'Prices', 'Warranty', 'Customer Service']} 
            />
        </div>
    )
}

export default FooterBottom