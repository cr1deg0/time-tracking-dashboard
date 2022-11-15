import React, {useState} from 'react'
import propTypes from 'prop-types'

const TimeframeSelector = ({props}) => {

    const [timePeriod, setTimePeriod] = useState(props.defaultTimeframe)

    function handleTimeChange(event) {
        setTimePeriod(event.target.value)
        props.changeTimeframe(event.target.value)
    }
    return (
        <div role="radiogroup" className="time-selector flex" aria-label="Choose dashboard timeline">
                <input
                    type="radio"
                    id="daily"
                    name="time-selector"
                    value="daily"
                    checked={timePeriod === "daily"}
                    onChange={handleTimeChange}
                />
                <label 
                    htmlFor="daily" 
                    className="text-blue fw-300 fs-400"
                >
                    Daily
                </label>
                <input
                    type="radio"
                    id="weekly"
                    name="time-selector"
                    value="weekly"
                    checked={timePeriod === "weekly"}
                    onChange={handleTimeChange}
                />
                <label 
                    htmlFor="weekly" 
                    className="text-blue fw-300 fs-400"
                >
                    Weekly
                </label>
                <input
                    type="radio"
                    id="monthly"
                    name="time-selector"
                    value="monthly"
                    checked={timePeriod === "monthly"}
                    onChange={handleTimeChange}
                />
                <label 
                    htmlFor="monthly" 
                    className="text-blue fw-300 fs-400"
                >
                    Monthly
                </label>
            </div>
    )
}

TimeframeSelector.propTypes = {
    prop: propTypes.shape({
        changeTimeframe: propTypes.func,
        defaultTimeframe: propTypes.string
    })
}

export default TimeframeSelector