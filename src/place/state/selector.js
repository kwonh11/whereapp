import { createSelector } from 'reselect';

const getPlaceList = state => state.place.placeList;
const getCategoryCode = state => state.place.categoryCode;

export const makePlaceListWithCategoryCode = () => {
    return createSelector(
        [getPlaceList, getCategoryCode],
        (placeList, categoryCode) => {
            if (!categoryCode) return placeList;
            return placeList.filter(place => place.contenttypeid === categoryCode);
        }
    )
}