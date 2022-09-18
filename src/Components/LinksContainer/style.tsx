import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.3em;
    margin: 2.5em auto;
    flex-wrap: wrap;    
`;

export const LinkBox = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 8.45em;
    height: 8.45em;
    /* border: 1px solid rgba(172, 162, 138, 1); */
    border-top: 1px solid rgba(172, 162, 138, 1); 
    border-radius: 1.3em;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
    background: #515151;
    position: relative;

    &:hover {
        background: #808080;
    }

    &:active {
        transform: scale(.9);
        box-shadow: inset 1px 1px 6px #000;
    }

    img {
        display: flex;
        justify-content: center;
        top: 2.3em;
        height: 2.4em;
        position: absolute;
    }

    span {
        text-align: center;
        font-size: 13.5px;
        line-height: 18px;
        margin-top: 6em;
        position: absolute;
        margin-left: 1em;
        margin-right: 1em;
    }
;`
