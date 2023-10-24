
const Buttons = ({ num, setNum }) => {
    return (
        <div className="proj">

            <h1 className="number">{num}</h1>

            <div className="btn-holder">

                <button className="btn btn-1 opacity" onClick={() => {
                    if (num < 15) setNum(num + 1)
                }}><span>+</span></button>

                <button className="btn btn-1 opacity" onClick={() => {
                    if (num > 0) setNum(num - 1)
                }}><span>-</span></button>

                <button className="btn btn-1 opacity" onClick={() => {
                    setNum(0)
                }}><span>Reset</span></button>

                <button className="btn btn-1 opacity" onClick={() => {
                    setNum(num * 0 + 15)
                }}><span>Maximum</span></button>

                <button className="btn btn-1 opacity" onClick={() => {
                    if (num < 15) {
                        if (num + 5 < 15) {
                            setNum(num + 5)
                        } else {
                            setNum(15)
                        }
                    }
                }}><span>+5</span></button>

                <button className="btn btn-1 opacity" onClick={() => {
                    if (num > 0) {
                        if (num - 5 > 0) {
                            setNum(num - 5)
                        } else {
                            setNum(0)
                        }
                    }
                }}><span>-5</span></button>
            </div>


        </div>
    );
}

export default Buttons;
