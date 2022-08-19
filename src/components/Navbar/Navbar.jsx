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
        </div>
    )
       
}

export default Navbar;