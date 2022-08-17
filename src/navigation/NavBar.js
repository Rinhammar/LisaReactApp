import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import navItems from './navItems';

export default function NavBar() {
    const navItemsNew = navItems.slice(1);      // Removing the first element from the navItems array without mutating the original array. This creates a new array. (Did this to not have a "Home" button, but still needed route it in NavCompRouting.js)
    
    return <nav className="nav">
        <Link to="/" className="site-title">
            <h1>Lisa Rinhammar</h1>
            <h2>React Components</h2> 
        </Link>
        
        <ul className="nav-items">
            {navItemsNew.map(navItemsNew => (<CustomLink to={navItemsNew.to}>{navItemsNew.name}</CustomLink> ))}
        </ul>
        
    </nav>
}

// Custom component called CustomLink - in order to add which page is active in the styling
function CustomLink({ to, children }) {       // Passing in to and children (children is whatever is inside the tag, the text in this case)
    const resolvedPath = useResolvedPath(to)        // Allows us to compare the current path we are on with a value (in this case, it's the "to" value)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })       // Determines which path is active. "end: true" makes sure that the whole url/path must match.
    return (
        <li>
            {/* If the current path is selected/active, it will change the styling of the class "active" */}
            <Link to={to} className={isActive ? "active" : ""}>
                {children}
            </Link>
        </li>
    )
}