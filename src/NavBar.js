export default function NavBar() {
    return <nav className="nav">
        <a href="/" className="site-title">
            <h1>Lisa Rinhammar</h1>
            <h2>React Components</h2> 
        </a>
        
        <ul className="nav-items">
            <CustomLink href="/quiz-app">Quiz App</CustomLink>
            <CustomLink href="/budget-management-app">Budget Management App</CustomLink>
        </ul>
    </nav>
}

// Custom component called CustomLink - in order to add which page is active in the styling
function CustomLink({ href, children }) {       // Passing in href and children (children is whatever is inside the tag, the text in this case)
    const path = window.location.pathname
    return (
        <li>
            {/* If the path is equal to the href, it will change the className to "active", which will change the styling from App.css */}
            <a className={path === href ? "active" : ""} href={href}>{children}</a>
        </li>
    )
}