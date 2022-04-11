import styled from "styled-components";
function Home(){
    return( 
        <HomeContainer>
    
        <h3>Come create your own fashion blog in this little space.</h3>
       <img src="https://img.pixers.pics/pho_wat(s3:700/FO/45/13/04/43/700_FO45130443_04abc5e825830593a7341f7055394129.jpg,700,324,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,274,jpg)/shower-curtains-group-of-fashion-cartoon-young-people-teenagers.jpg.jpg" />
       
       
       </HomeContainer>
    )
}
export default Home; 
const HomeContainer =styled.div`
display: flex;
justify-content: center;
  height: 100%;
& img{
    width:600px;
    height:500px;
    padding:3% 0% 0% 0%;
}
& h3{
    width:70%;
    text-align:center;
    font-family:monospace;
    color:black;
    font-size:300%;
    padding-left:15%;
}


`