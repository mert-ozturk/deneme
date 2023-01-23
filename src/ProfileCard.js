function ProfileCard({title,handle,image}){
   
    return (
        <div>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
            <img src={image}/>
        </div>
    )
}

export default ProfileCard;