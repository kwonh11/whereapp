import styled from 'styled-components';
import { Divider } from '@material-ui/core';

const OverviewContainer = styled.div`
  width: 1000px;
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
`;

export default function Overview ({description}) {
    return (
        <OverviewContainer>
            <OverviewHeader>
                Overview
                <ShorterDivider />
            </OverviewHeader>
            <DescriptionWrap dangerouslySetInnerHTML={{__html: description }} />
        </OverviewContainer>
    );
}