const UserCard = (props) => {

    const {name,Location} = props;

    return (
        <div className="user-card">

            <h1>Name : {name}</h1>
            <h2>Location : {Location}</h2>
            <h3>
                Email: vishad1710@gmail.com
            </h3>

        </div>
    );
}

export default UserCard;