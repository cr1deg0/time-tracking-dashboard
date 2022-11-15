

const activityCardStyling = (activity) => {

    let cardColor, cardColorBackup, imageName="";
    let marginTop="-0.4em";

    switch (activity) {
        case "Work": 
            cardColor = "linear-gradient(180deg,var(--primary-light-red),80%,var(--neutral-dark-blue))";
            cardColorBackup="var(--primary-light-red)";
            imageName= "work";
            break;
        case "Play": 
            cardColor = "linear-gradient(180deg,var(--primary-soft-blue),80%,var(--neutral-dark-blue))";
            cardColorBackup = "var(--primary-soft-blue";
            imageName= "play";
            break;
        case "Study":
            cardColor = "linear-gradient(180deg,var(--primary-red),80%,var(--neutral-dark-blue))";
            cardColorBackup = "var(--primary-red)";
            imageName= "study";
            break;
        case "Exercise":
            cardColor = "linear-gradient(180deg,var(--primary-lime-green),80%,var(--neutral-dark-blue))";
            cardColorBackup = "var(--primary-lime-green)";
            marginTop="0.2em";
            imageName= "exercise";
            break;
        case "Social":
            cardColor = "linear-gradient(180deg,var(--primary-violet),80%,var(--neutral-dark-blue))";
            cardColorBackup = "var(--primary-violet)";
            imageName= "social";
            break;
        default:
            cardColor = "linear-gradient(180deg,var(--primary-yellow),80%,var(--neutral-dark-blue))";
            cardColorBackup = "var(--primary-yellow)";
            imageName= "self-care";
            break;
    }
    return {cardColor,cardColorBackup,marginTop,imageName}
}

export default activityCardStyling