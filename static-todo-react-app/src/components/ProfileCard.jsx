
const ProfileCard = (props) => {
   
    const { name, age, bio } = props.profile;

       return (

        <div className="profile">
            <div>Name: {name}</div> 
            <div> Age: {age}</div>
            <div>Bio: {bio}</div>
        </div>

   );

};

export default ProfileCard;