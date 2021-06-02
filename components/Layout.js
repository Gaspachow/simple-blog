import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

function Header() {

    return(
  <Navbar variant="light" expand="lg" style={{backgroundColor: 'grey'}}>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/">All Posts</Nav.Link>
        <Nav.Link href="/createPost">Create Post</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
}


// To be defined

function Footer() {

  return(
    <></>
  )
}


function Layout({children}) {
  return(
    <>
    <div style={{minHeight: "calc(100vh - 60px)"}}>
      <Header/>
      {children}
    </div>
      <Footer/>
    </>
  )
}


export default Layout