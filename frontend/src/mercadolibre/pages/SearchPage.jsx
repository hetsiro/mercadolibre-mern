import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startSearchingProducts } from "../../store/mercadolibre/thunks";
import { useSearchParams } from "react-router";
import { MainSearch } from "../components";
import { LayoutUp } from "../layout";

export const SearchPage = () => {

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const query = searchParams.get('q');
  const queryPage = parseInt(searchParams.get('page')) || 1;

  useEffect(() => {
    dispatch(startSearchingProducts(query, queryPage));
  }, [query])

  return (
    <>
      <LayoutUp>
        <MainSearch />
      </LayoutUp>
    </>
  );
};
