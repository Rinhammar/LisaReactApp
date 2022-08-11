export default function NavBar() {
    return <nav className="nav">
        <a href="/" className="site-title">
            <h1>Lisa Rinhammar</h1>
            <h2>React Components</h2> 
        </a>
        
        <ul>
            <li>
                <a href="/quiz-app">Quiz App</a>
            </li>
            <li>
                <a href="/budget-management-app">Budget Management App</a>
            </li>
        </ul>
    </nav>
}
