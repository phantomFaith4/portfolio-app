import "./works.scss" 
import { useState } from 'react';
export default function Works() {
    const [currentSlide,setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/globe.png",
            title: "Greenhouse Management App",
            desc:
              "Web App for remote controll of various options inside greenhouse.",
            img:
              "https://i.imgur.com/xF5hVL3.png",
            link:"https://greenhouse-fit-app.herokuapp.com/",
          },
          {
            id: "2",
            icon: "./assets/globe.png",
            title: "LoL Companion App", 
            desc:
              "Web app in which you can search summoners and their info.Champion info and builds etc...",
            img:
              "https://i.imgur.com/45xJTcV.png",
            link:"https://lol-companion-app.herokuapp.com/",
          },
          {
            id: "3",
            icon: "./assets/writing.png",
            title: "Simple CRUD App",
            desc:
              "Web app for built with MERN stack for  displaying data in table and doing CRUD operations.",
            img:
              "https://i.imgur.com/9RPKYoY.png",
            link:"https://simple-crud-app1.herokuapp.com/",
          },
          {
            id: "4", 
            icon: "./assets/writing.png",
            title: "Sorting App",
            desc:
              "Web App for visualization of sorting algorithms",
            img:
              "https://i.imgur.com/SwudFjy.png",
            link:"https://simplesortingapp.netlify.app/",
          },
    ];
    
    const handleClick = (way) => {
        way === "left"  
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2 ) 
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0 ) 
    }; 

    return ( 
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map(d=>(<div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2> 
                                <p>{d.desc}</p> 
                                <a href={d.link}  rel="noreferrer" target="_blank"><span>Project</span></a>
                            </div>
                        </div>   
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div> 
                </div>))}
            </div> 
            <img src="assets/down.png" alt="" className="arrow left" onClick={()=>handleClick("left")}/>
            <img src="assets/down.png" alt="" className="arrow right" onClick={()=>handleClick()}/>
        </div> 
    )
}
 