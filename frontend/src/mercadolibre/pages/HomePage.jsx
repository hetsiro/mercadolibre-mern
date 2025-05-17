import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { disableLoading } from "../../store/mercadolibre/mercadolibreSlice";
import { MainHome } from "../components";
import { HomePage2 } from "./HomePage2";


export const HomePage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(disableLoading());
    }, 1000);
  }, [])

  return (
    <>
      <HomePage2 />
    </>
  );
};
