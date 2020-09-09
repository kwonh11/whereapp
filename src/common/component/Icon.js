import styled from "styled-components";
import dongaIcon from "../images/donga.png";
import googleIcon from "../images/google.png";
import haniIcon from "../images/hani.png";
import sbsIcon from "../images/sbs.png";
import segyeIcon from "../images/segye.png";

function getURL(iconName) {
  console.log(iconName);
  const match = {
    google: googleIcon,
    donga: dongaIcon,
    hani: haniIcon,
    sbs: sbsIcon,
    segye: segyeIcon,
  };
  return match[iconName];
}

const IconBox = styled.div`
  border: 1px solid;
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  margin: ${(props) => props.margin};
  background-image: url(${(props) => getURL(props.name)});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  &:hover {
  }
`;

export default function IconComponent(props) {
  // hover action 은 나중에 넣어서 애니메이션 구현
  const { name, hoverAction, size = "100px", margin = "10px", ...rest } = props;

  return <IconBox name={name} size={size} margin={margin} {...rest} />;
}
