import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.55em;
    margin: 2.5em auto;
    flex-wrap: wrap;
`;

export const LinkBox = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8.45em;
    height: 8.45em;
    border: 1px solid rgba(172, 162, 138, 1);
    border-radius: 1.3em;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
    background: #515151;

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
        align-items: center;
    }
;`
