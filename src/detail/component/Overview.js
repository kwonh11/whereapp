import styled from "styled-components";
import { Divider } from "@material-ui/core";
import device from "../../common/device";

const OverviewContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
const OverviewHeader = styled.div`
  width: 50%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.8rem;
  @media ${device.mobileL} {
    font-size: 1.2rem;
  }
`;
const ShorterDivider = styled(Divider)`
  width: 100%;
  margin: 30px 0 0 10px !important;
`;
const DescriptionWrap = styled.div`
  width: 100%;
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.6;
  word-break: keep-all;
  padding: 20px;
  text-align: center;
  @media ${device.mobileL} {
    font-size: 0.7rem;
  }
`;

export default function Overview({ description }) {
  return (
    <OverviewContainer>
      <OverviewHeader>
        Overview
        <ShorterDivider />
      </OverviewHeader>
      <DescriptionWrap dangerouslySetInnerHTML={{ __html: description }} />
    </OverviewContainer>
  );
}
