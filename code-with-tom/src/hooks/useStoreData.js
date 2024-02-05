import {useDispatch} from "react-redux";

export const useStoreData = (data, action) => {
    const dispatch = useDispatch();
    return dispatch(action(data));
}