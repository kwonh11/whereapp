import styled from "styled-components";
import { Autocomplete } from "@material-ui/lab";
import regions from "../../common/RegionCodes";
import { TextField } from "@material-ui/core";
import device from "../../common/device";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
`;

const LocationSelectorWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
`;
const LocationInfoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 40px;
  word-break: keep-all;
  text-align: center;
  margin-top: 60px;
  @media ${device.mobileL} {
    font-size: 14px;
  }
`;
const WarningWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 80px;
  padding: 0 40px;
  color: red;
  font-size: 12px;
`;

const comboStyle = {
  width: 150,
};

export default function Information(props) {
  const { address, regionCode, handleChangeRegionCode, isHandledAddress } = props;

  return (
    <InfoContainer>
      <LocationSelectorWrap>
        <Autocomplete
          id="region"
          options={regions}
          getOptionLabel={(option) => option.name}
          style={comboStyle}
          renderInput={(params) => (
            <TextField {...params} label="지역 선택" variant="outlined" />
          )}
          value={regions.find((region) => region.code == regionCode)}
          onChange={handleChangeRegionCode}
        ></Autocomplete>
        &nbsp; TOP20 관광정보
      </LocationSelectorWrap>
      <LocationInfoWrap>{`현재 위치는 ${address} 입니다.`}</LocationInfoWrap>
      { !isHandledAddress 
        && address === "대한민국 서울특별시 종로구 세종로 1-56"
        && (
          <WarningWrap>
              기본 주소지가 사용됐습니다. <br/>
              브라우저의 위치이용 동의를 누르시거나 검색창에 주소를 직접 입력해주세요.
          </WarningWrap>
        )
      }
    </InfoContainer>
  );
}
