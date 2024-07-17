import { useAppDispatch, useAppSelector } from "./hooks";
import { setUser, clearUser } from "../store/slices/userSlice";

export const useUser = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const login = (userData: { id: string; email: string; name: string }) => {
    dispatch(setUser(userData));
  };

  const logout = () => {
    dispatch(clearUser());
  };

  return { user, login, logout };
};
