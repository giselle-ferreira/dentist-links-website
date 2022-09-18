import styled from "styled-components";

export const Container = styled.div`
    height: 9em;
    background-color: #414042;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-radius: 0 0 1.4em 1.4em;
    box-shadow: -5px 15px 15px -17px #111;
    z-index: 0;
    position: relative;

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        bottom: 3.45em;

        h1 {                       
            font-size: 1.2em;
            font-weight: 400;
            text-align: center;
            margin-bottom: 0;
        }

        h2 {
            font-size: 1em;
            font-weight: 700;
            text-align: center;
            color: #cbcbcb;
            margin-bottom: .4em;
        }
    }

    img {
        position: absolute;
        z-index: 1;
        bottom: -.7em;
    }

    span {
        position: absolute;
        width: 86px;
        height: 86px;
        background-color: #414042;
        border-radius: 50%;
        box-shadow: 0px 15px 15px -15px #111;
        z-index: -2;
        bottom: -1.5em;
    }

    


`;