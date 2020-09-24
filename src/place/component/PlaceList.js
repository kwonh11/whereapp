import ViewTypeBtn from "../../common/component/ViewTypeBtn";
import ViewTypePage from "../../common/component/ViewTypePage";

export default function PlaceList({ place }) {
  console.log("PlaceList");
  console.log(place);
  return (
    <>
      <ViewTypeBtn />
      <ViewTypePage data={place} />
    </>
  );
}
