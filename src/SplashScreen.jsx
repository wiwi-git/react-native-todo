import React, { useEffect } from "react";
import styled from "styled-components";
import icon from "../assets/icon.png";

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #778bdd;
    align-items: center;
    justify-content: center;
`;

const IconImageView = styled.Image.attrs({
    resizeMode: "contain"
})`
    width: 100px;
    height: 100px;
`;

export default () => {
    return (
        <Container>
            <IconImageView source={icon}></IconImageView>
        </Container>
    );
}