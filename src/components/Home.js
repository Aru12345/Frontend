import styled from "styled-components";
function Home(){
    return( 
        <HomeContainer>
    
        <h3>View the latest fashion trends,show off your styles and much more....</h3>
       <img src="https://assets.vogue.com/photos/5c86c8c29914d62d7ceb129a/master/w_2560%2Cc_limit/00-VW-top-f19-models.jpg" />
       
       
       </HomeContainer>
    )
}
export default Home; 
const HomeContainer =styled.div`
display: flex;
justify-content: center;
  height: 100%;
& img{
    width:710px;
    height:590px;
    padding:3% 0% 0% 0%;
}
& h3{
    width:70%;
    justify-content: center;
    justify-content: center;
    font-family:monospace;
    color:white;
    font-size:320%;
    padding:7%
}


`