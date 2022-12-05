import { NextPage } from "next";
import Layout from "../components/layout";

const Home: NextPage = () => {

  return <h1>VBD docs</h1>

}

Home.getLayout = page => (
  <Layout>
    { page }
  </Layout>
)

export default Home;