import { FC } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components";

const LinkSpan = styled(Link)`
    margin: auto 10px;
    text-align: center;
    text-decoration: none;
    color: red;
` ;


export const Menu: FC = () => {
    return <>
        <div>
        
                <LinkSpan to="home">Home</LinkSpan>
                
        
                <LinkSpan to="posts">Posts</LinkSpan>
                
        
                <LinkSpan to="pokemon">Pokemon of the day</LinkSpan>
                
        </div>
    </>
}