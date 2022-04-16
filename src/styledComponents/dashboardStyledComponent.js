import styled from "styled-components";

export const Title = styled.div.attrs(
    {   className:"title"   })`
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    padding: 28px;
    background-color: mediumseagreen;
    color: white;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    gap: 50px;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    `
export const IconContainer = styled.div.attrs(
{   className:"icon-container"   })`
.MuiSvgIcon-root{
  width: 2em !important;
  height: 2em !important;
}
`

export const HeaderText = styled.div.attrs(
{   className:"header-text"   })`
font-size: 30px;
`

export const Content = styled.div.attrs(
    {   className:"content"   })`
      margin: 150px 30px 30px 30px
  `
export const Footer = styled.div.attrs(
    {   className:"footer"   })`
    position: fixed;
    padding: 20px;
    background-color: mediumseagreen;
    width: 100%;
    bottom: 0;
    color: white;
  `
