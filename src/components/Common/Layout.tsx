import { FC } from "react";
import styled from "styled-components";
import { Menu } from "./Menu";


const Wrapper = styled.div`
width: 100%;
`;

const Content = styled.div`
    width:1024px;
    margin: 0 auto;
    background-color: red;
`;

interface IProps {
    children: React.ReactNode;
}


export const Layout:FC<IProps> = props => {
    return <Wrapper>
        <Menu/>
        <Content>
            {props.children}
        </Content>
    </Wrapper>
}