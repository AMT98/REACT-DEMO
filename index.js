import  Header  from "./Header"
const Body = () => {
    return (
    <body id= "mainContent">
            <h1>This is a website</h1>
            <ul>
                <li>I</li>
                <li>Love</li>
                <li>React</li>
        </ul>
    </body>
    )
}
const WebPage = () => {
    return (
        <main>
        <Header />
        <Body />
        <Footer />
        </main>
    )
}

const Footer = () => {
return (
    <footer id= "footer">
        <small>2022 Malla Development. All rights reserved.</small>
    </footer>
)
}


ReactDOM.render(<WebPage />, document.getElementById("root"))
// Import a function from a different js file and return it from a function that loads the entire webpage.
