import React from "react"

const UserCard = () => {
    return(
        <div className="header--user-profile flex gap-1rem flex-align-center">
                <img 
                    src="./images/image-jeremy.png" 
                    alt="headshot"
                    className="headshot"
                />
                <h1 
                    className="fs-300 fw-300 text-blue"
                >
                    Report for <span className="fs-600 fw-300 text-white block">Jeremy Robson</span>
                </h1>
            </div>
    )
}

export default UserCard