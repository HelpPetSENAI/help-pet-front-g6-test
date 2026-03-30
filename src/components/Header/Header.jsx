import { StyledHeader } from "./HeaderStyles";
import back from "../../assets/icons/Back-arrow.svg";
import logo from "../../assets/icons/Logo.svg";

function Header() {
    return (
        <StyledHeader>
            <img src={back} alt="Back" class="back"/>
            <img src={logo} alt="Logo" class="logo"/>
        </StyledHeader>
    )
}

export default Header