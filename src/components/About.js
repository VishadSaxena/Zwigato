import UserCard from "./UserCard";
import UserCardClass from "./UserCardClass";

const About = () => {
    return(
        <div>
            <h1>
                This is a Food Delivery service provider company.
            </h1>
            <UserCard name={"Vishad (function)"} Location={"Lucknow(function)"}/>
            <UserCardClass name={"Vishad(class)"} location={"Lucknow(class)"}/>
        </div>
    );
} 

export default About;