import styled from 'styled-components';

const ButtonPrimary = styled.button`
padding: 16px 20px;
border-radius: 8px;
background: gray;
border: none;
box-shadow: 0px 20px 47px -21px black;
cursor: pointer;
transition: .2s all;
font-weight: 600;
`

const ButtonTwitter = styled.button`
padding: 10px;
border-radius: 50%;
background: #1DA1F2;
border: none;
box-shadow: 0px 20px 47px -21px black;
cursor: pointer;
transition: .2s all;
font-weight: 600;
color: white;
font-size: 22px;
display: flex;
justify-content: center;

&:hover {
    transform: translateY(-1px);
}
`

const ButtonGoogle = styled.button`
padding: 10px;
border-radius: 50%;
background: #ecedee;
border: none;
box-shadow: 0px 20px 47px -21px black;
cursor: pointer;
transition: .2s all;
font-weight: 600;
font-size: 22px;
display: flex;
justify-content: center;

&:hover {
    transform: translateY(-1px);
}
`

export {
    ButtonPrimary,
    ButtonTwitter,
    ButtonGoogle,
};