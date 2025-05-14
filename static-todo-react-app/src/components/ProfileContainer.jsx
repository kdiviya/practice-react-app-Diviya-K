import ProfileCard from "./ProfileCard";

const ProfileContainer = () => {

    const profileLists = [

        { name: "Alice", age: 30, bio: "An artist who loves painting"},
        { name: "Alex", age: 25, bio: "A software engineer who loves hiking"},
        { name: "Taylor", age: 35, bio: "An designer passionate about photography"}
        
    ];
    return (
        <div>

        { profileLists.map((profileList) => <ProfileCard profile = {profileList}/> )}

        </div>
    );
    
};

export default ProfileContainer;    

