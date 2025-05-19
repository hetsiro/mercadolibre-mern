import { useDispatch } from "react-redux"
import { useParams } from "react-router"
import { useEffect } from "react"
import { startSettingActualProduct } from "../../store/mercadolibre/thunks"
import { Loading, MainItem } from "../components"
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
        <MainItem />
      </Layout>
    </>
  )
}
