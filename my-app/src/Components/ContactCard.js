import React, { useEffect, useState } from "react";

const ContactCard = () => {

    const[showAge, setShowage] = useState(false);

    return (
        <div className="contact-card">
	        <img src="https://via.placeholder.com/150" alt="profile" />
	        <div className="user-details">
		        <p>Name: Jenny Han</p>
		        <p>Email: Jenny.Han@notreal.com</p>
		        {showAge && <p>Age: 26</p>}
	        </div>
        </div>
    );
};

export default ContactCard;