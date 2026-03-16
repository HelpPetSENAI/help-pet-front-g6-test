import styled from "styled-components"

const Fragment = styled.body`
    display: flex;
    width: 100dvw;
    height: 100vh;
    
    svg#background {
        z-index: -1;
        position: fixed;
        top: 0;
        left: 0;
    }

    .tittle {
        position: fixed;
        top: 50%;
        left: 50%;


        transform: translateY(-50%) translateX(-50%);
    }

    .tittle h1 {
        font-size: 120px;
        font-family: var(--logo-font);

        color: var(--clr-green-500);
        -webkit-text-stroke: 9px #000;
    }

    .brick-wall {
        position: fixed;
        bottom: 0;
        left: 0;
    }

`

export default Fragment