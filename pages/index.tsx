import type { NextPage } from 'next';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Listings from "../components/Listings";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Categories />
      <Listings />
    </div>
  )
}

export default Home
