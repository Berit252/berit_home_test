import { createRoot } from 'react-dom/client'
import './styles.css'
import styled from "styled-components"
import App from './App.jsx'
// import Header from './Header.jsx'

// const list = [ 'Portfolio', 'Installations', 'Interact' ]

const MyIcon = styled.img`
  position: 'absolute';
  height: 110px;
  padding: 30px;
`

function Overlay() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      {/* <a href="https://pmnd.rs/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        pmnd.rs
        <br />
        dev collective
      </a> */}
      <MyIcon src='/img/IMG_4526.PNG' />
      <div style={{ position: 'absolute', top: 40, left: 90, fontSize: '14px' }}>Welcome to <br />Berit's Web~</div>

      <p style={{ position: 'absolute', top: 90, left: 35, fontSize: '14px', color: 'white' }}>portals:</p>
      <a href='https://acrobat.adobe.com/id/urn:aaid:sc:EU:a7330bd5-86b9-4208-9cac-43ff4e0fe3b7' target="_blank" style={{ position: 'absolute', top: 135, left: 35, fontSize: '14px' }}><li><u>Portfolio</u></li></a>
      <a target="_blank" style={{ position: 'absolute', top: 165, left: 35, fontSize: '14px' }}><li><u>Images & Text</u></li></a>
      <a target="_blank" style={{ position: 'absolute', top: 195, left: 35, fontSize: '14px' }}><li><u>Videos</u></li></a>


      <div style={{ position: 'absolute', bottom: 20, left: 40, fontSize: '14px', color: '#ffffff99' }}>
        e: berittang252@gmail.com<br />
        qq: 2782825873<br />
        RedID: 374863042
      </div>
      <div style={{ position: 'absolute', bottom: 20, right: 40, fontSize: '12px' }}>@Berit Tang</div>
    </div>
  )
}





// const Link = styled.div`
//     position: fixed;
//     display: flex;
//     flex-direction: column;
//     top: 0;
//     left: 20%;
//     width: 70%;
//     height: 20%;

//     /* @media only screen and (max-width: 768px) {
//         width: 95%;
//     } */
// `
// const List = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     /* gap: 20px; */
//     list-style: none;

//     /* @media only screen and (max-width: 768px) {
//         display: none;
//     } */
// `
// const ListItem = styled.p`
//   justify-content: center;
//   cursor: pointer; 
// `

// function Header(){
//   return (
//       <Link>
//         <List>
//             <ListItem>Home</ListItem>
//             <ListItem>Studio</ListItem>
//             <ListItem>Works</ListItem>
//             <ListItem>Contact</ListItem>
//         </List>
//       </Link>
//     )
// }





const Container = styled.div`
  height: 100%;
  background: url("./img/WechatIMG1075.jpg");
  background-size: 110%;
  div::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    background: none;
  }
`

createRoot(document.getElementById('root')).render(
  <>
    <Container>
      <App />
      <Overlay />
    </Container>
  </>
)