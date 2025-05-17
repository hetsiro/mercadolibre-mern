import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import { useEffect } from "react"
import { startSettingActualProduct } from "../../store/mercadolibre/thunks"
import { Header, Loading, MainItem } from "../components"
import { ButtonItem } from "../components/ItemPage/ButtonItem"
import { Layout } from "../layout"

export const ItemPage = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startSettingActualProduct(id));
  }, [])

  return (
    <>
      <Loading />
      <Layout >
        <Header />
        <MainItem />
        <ButtonItem />
      </Layout>
    </>
  )
}
