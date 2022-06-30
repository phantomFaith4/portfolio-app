import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/programming1.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There i'm </h2>
                    <h1>Ernad</h1>
                    <h3><span>Full Stack developer</span></h3>
                </div>
                <a href="#portofolio"> 
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>
        </div>
    )
}
