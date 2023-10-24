
const Home = ({text, setText}) => {
    return (
        <div>
            <h1>{text}</h1>
            <button onClick={() => {
                setText("Sultan");
            }}>Channge</button>
        </div>
    );
}

export default Home;
