import styled from "styled-components";

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
  const { name, hoverAction, size = "100px", margin = "10px", ...rest } = props;
  return <IconBox name={name} size={size} margin={margin} {...rest} />;
}
