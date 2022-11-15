

const activityCardStyling = (activity) => {

    let cardColor, imageName="";

    switch (activity) {
        case "Work": 
            cardColor="var(--primary-light-red)";
            imageName= "work";
            break;
        case "Play": 
            cardColor = "var(--primary-soft-blue";
            imageName= "play";
            break;
        case "Study":
            cardColor= "var(--primary-red)";
            imageName= "study";
            break;
        case "Exercise":
            cardColor= "var(--primary-lime-green)";
            imageName= "exercise";
            break;
        case "Social":
            cardColor = "var(--primary-violet)";
            imageName= "social";
            break;
        default:
            cardColor = "var(--primary-yellow)";
            imageName= "self-care";
            break;
    }
    return {cardColor, imageName}
}

export default activityCardStyling
