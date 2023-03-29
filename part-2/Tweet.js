function Tweet({ date, message, name, username }){
    return (
        <div className="tweet">
            <span> {name} </span>
            <span classname="username"> <b>{username} </b></span>
            <br></br>
            <span classname="date">{date}</span>
            <p classname="message">{message}</p>
        </div>
    );
}