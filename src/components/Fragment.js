import styled from "styled-components"

const Fragment = styled.body`
    width: 100dvw;
    height: 100vh;
    
    svg#background {
        z-index: -1;
        position: fixed;
        top: 0;
        left: 0;
    }

    .brick-wall {
        position: fixed;
        bottom: 0;
        left: 0;
    }

`

export default Fragment