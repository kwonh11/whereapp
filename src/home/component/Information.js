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
  @media ${device.mobileL} {
    font-size: 14px;
  }
`;

const comboStyle = {
  width: 150,
};

export default function Information(props) {
  const { address, regionCode, handleChangeRegionCode } = props;

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
    </InfoContainer>
  );
}
