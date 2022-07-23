import React, { useContext } from 'react'; 
import { ThreadContext } from '../components/contextItem.js'
import { RenderVerticalVoting } from '../components/votingComponent.js'; 
import styled from 'styled-components'; 
import {
    Title, 
} from '../global/styledComponents.js'; 
import RenderRIcon from '../asset/icons/r_icon.js'; 
import RenderPostFooter from './postFooter.js'; 
import RenderReplyTextArea from '../components/replyTextArea.js'; 

//This functional component renders the main body of the post. 
const RenderMainPost = props => {
    const { ...threadData } = useContext(ThreadContext); 
    return (
        <Container>
            <RenderVerticalVoting /> 
            <InnerCont>
                <Header>
                    <RenderRIcon image='' /> 
                    <Community>r/{threadData.community}</Community>
                    <AuthorInfo> &#x2022; Posted by <span>u/{threadData.authorName}</span></AuthorInfo>
                    <TimePosted>4 hours ago</TimePosted>
                </Header>
                <Title>{threadData.title}</Title>
                <MainPost>{threadData.textBody}</MainPost>
                <RenderPostFooter />
            </InnerCont>  
        </Container>
        )
} 

export default RenderMainPost; 

const Container = styled.div`
    display: grid; 
    grid-template-columns: 30px auto; 
    font-family: "Verdana"; 
    column-gap: 10px;
    background-color: #ffffff;
    padding-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
`

const InnerCont = styled.div`
    display: grid; 
    grid-template-rows: 23px auto auto 40px; 
`
const Header = styled.div`
    display: flex; 
    & > *{
        margin-top: auto;
        margin-bottom: auto;
        margin-right: 10px;
        color: #adadad; 
        font-size: 12px;
    }
`

const Community = styled.div`
    font-weight: bold; 
    color: #000000;
       
`
const AuthorInfo = styled.div`
    cursor: pointer; 
    & > span:hover{
        text-decoration: underline;
}
`
const TimePosted = styled.div`

`

const MainPost = styled.div`

`

const Gap = styled.div`
background-color: #d3d3d3; 
`