function App(){
    return (
        <div>
            <Tweet
                name="Drake Northington"
                username="DragonChild44"
                date={new Date().toDateString()}
                message="This app is pretty chill."
                />
            <Tweet
                name="Eros Northington"
                username="LoverBoi21"
                date={new Date().toDateString()}
                message="I am just here to vibe."
                />
            <Tweet
                name="Veronica Northington"
                username="QueenVee"
                date={new Date().toDateString()}
                message="Calling all the shots."
                />
        </div>
    );
}