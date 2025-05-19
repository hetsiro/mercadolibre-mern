import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startSearchingProducts } from "../../store/mercadolibre/thunks";
import { useSearchParams } from "react-router";
import { Header, MainSearch } from "../components";
import { Layout } from "../layout";

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
      <Layout>
        {/* <Header /> */}
        <MainSearch />
      </Layout>
    </>
  );
};
