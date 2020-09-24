import IconBox from "../../common/component/Icon";

const corps = ["google", "donga", "hani", "sbs", "segye"];
export default function CorpCategory() {
  return (
    <React.Fragment>
      {corps.map((corp, index) => (
        <IconBox key={index} size="100px" margin="10px" name={corp} />
      ))}
    </React.Fragment>
  );
}
