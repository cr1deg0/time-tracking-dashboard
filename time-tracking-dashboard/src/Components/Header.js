import React from "react"
import UserCard from "./UserCard"
import TimeframeSelector from "./TimeframeSelector"

const Header = (props) => {
    return (
        <header>
            <UserCard />
            <TimeframeSelector props={props} />
        </header>
    )
}

export default Header