
import styled from "styled-components";
export const Stylednav = styled.nav `
display: flex;
width: 100%;
text-decoration: none;



ul{
	justify-content: space-around;
	list-style-type: none;
}


a{
	text-decoration: none;
	color: inherit;

}

/* h1{
	color: green;
	&:hover{
		color: blue;
	}
} */
`

export const Navi = styled.nav`
font-weight: 500;
/* display: flex; */
/* align-items: center; */
/* justify-content: space-between; */
margin-bottom: 40px;

@media(max-width: ${({theme}) => theme.mobile }){
	flex-direction: column;
	
}
`
 export const Li = styled.li`
 
display: flex;
font-size: 1.3vw;
  list-style-type: none;
align-items: center;
justify-content: space-between;
/* margin-bottom: 40px; */
  textDecoration: none,;
    color: white,;
    fontSize: 20px,;
    margin-left: 20px;
   

@media(max-width: ${({theme}) => theme.mobile }){
/* flex-direction: column; */

}
 }`

  export const Ul = styled.ul`
display: flex;
/* /* justify-content: space-around; */
align-items: center;
width: 100%; 

/* justify-content: space-between; */
/* margin-bottom: 40px; */

@media(max-width: ${({theme}) => theme.mobile }){
flex-direction: column;

font-size: 1rem;
}

 `
 

 export const Logo = styled.img`
 @media(max-width: ${({theme}) => theme.mobile }){
margin-bottom: 40px;


}

 `
