/* eslint-disable default-case */
import React, {useState} from "react"
import activityCardStyling from "../Utils/activityCardStyling"

const ActivityCard= (props) => {
    
    const timeframeData = props.data.timeframes
    const selectedTimeframeData = timeframeData[props.timeframe]

    const [menuIsHovered, setMenuIsHovered] = useState(false);

    function handleMouseEvent(event) {
        setMenuIsHovered(prevState => !prevState)
    }

    const {cardColor, imageName}=activityCardStyling(props.data.title);
    
    return(

        <section style={{backgroundColor: cardColor}} className="card">
            <img src={`./images/icon-${imageName}.svg`} alt="" className="card--image"/>
            <div className="card--body" style={{backgroundColor: menuIsHovered && "var(--neutral-dark-blue)"}}>
                <div className="card--header flex flex-align-center">
                    <h2 className="fs-500 fw-500">{props.data.title}</h2>
                    <a href="#" onMouseEnter={handleMouseEvent} onMouseLeave={handleMouseEvent}>
                        <span className="sr-only">Menu</span>
                        <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg" className="card--header-menu-icon" alt="more details">
                            <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fillRule="evenodd"/>
                        </svg>
                    </a>
                </div>
                <div className="card--data flex flex-align-center">
                    <p className="fs-700 fw-300">{selectedTimeframeData.current}hrs</p>
                    <p className="fs-300 fw-400 text-blue">
                        {props.timeframe === "daily"
                            ? "Yesterday"
                            : props.timeframe === "weekly"
                                ? "Last week"
                                : "Last month"
                        } - {selectedTimeframeData.previous}hrs
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ActivityCard
