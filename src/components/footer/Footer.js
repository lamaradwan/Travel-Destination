import { Nav, Navbar, Container} from 'react-bootstrap';
function Footer(){
    return(
        <>
        {/* <a href="https://www.linkedin.com/in/lama-radwan-37727916b/">LinkedIn Profile</a>
        <br/>
        <a href="https://www.facebook.com/lama.redwan.1">Facebook Profile</a>
        <p>Author By: Lama Radwan</p> */}
        <Navbar bg="dark" variant="dark">
    <Container>
   
    <Nav className="me-auto">
      <Nav.Link href="https://www.linkedin.com/in/lama-radwan-37727916b/">LinkedIn Profile</Nav.Link>
      <Nav.Link href="https://www.facebook.com/lama.redwan.1">Facebook Profile</Nav.Link>
      <Nav.Link href="#">Author By: Lama Radwan</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </>
    )
}
export default Footer;