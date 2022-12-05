import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { SocialBarStyled, List, Link } from "./SocialBar.styled";

const SocialBar = () => {
  return (
    <SocialBarStyled>
      <List>
        <Link>
          <FaTwitter />
        </Link>
      </List>
      <List>
        <Link>
          <FaFacebook />
        </Link>
      </List>
      <List>
        <Link>
          <FaLinkedin />
        </Link>
      </List>
    </SocialBarStyled>
  );
};

export default SocialBar;
