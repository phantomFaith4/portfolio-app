import "./topbar.scss"
import {Mail,GitHub} from '@material-ui/icons'; 

export default function Topbar({menuOpen,setMenuOpen}) {
    return ( 
        <div className={"topbar " + (menuOpen && "active")}> 
            <div className="wrapper">
                <div className="left"> 
                    <a href="#intro" className="logo">ekOS</a>  
                    <div className="itemContainer">
                        <GitHub className="icon"/> 
                        <span><a className="gitLink" href="https://github.com/phantomFaith4" target="_blank" rel="noopener noreferrer">Ernad's GitHub</a></span> 
                    </div> 
                    <div className="itemContainer">  
                        <Mail className="icon"/>
                        <span>ernad.karahasanovic@gmail.com</span>
                    </div> 
                </div>  
                <div className="right"> 
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>  
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
