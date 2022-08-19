import './index.css';

const Navbar = ()=> {
 
    return (
        <div className="Navbar">
            <ul className="Navbar__list">
            <a className="Navbar__list-link" href="#aboutme">ABOUT ME</a>
            <a className="Navbar__list-link" href="#lifepath">LIFE PATH</a>
            <a className="Navbar__list-link" href="https://github.com/robdgs" target="_blank">GITHUB</a>
            <a className="Navbar__list-link" href="#contactme">CONTACT ME</a>
          </ul>

          <div className="navbar" >
        <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>  
       
          <div className="menu-items">
            <li><a href="#">Home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">blogs</a></li>
            <li><a href="#">portfolio</a></li>
            <li><a href="#">contact</a></li>
          </div>
        </div>
      </div>
        </div>
        
    )
       
}

export default Navbar;