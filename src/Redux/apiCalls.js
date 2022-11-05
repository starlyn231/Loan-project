import { loginFailure, loginStart, loginSuccess } from "./UserRedux";
import { publicRequest } from "../services/RequestMethods";
import { useNavigate } from "react-router-dom";

export const login = async (dispatch, user, navigate) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
