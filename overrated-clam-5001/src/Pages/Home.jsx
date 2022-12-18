import {useEffect} from 'react'
import TopSection from "../Components/TopSection/TopSection"
import Footer from '../Components/Footer/Footer'
import HomeServices from '../Components/Body/HomeServices';


const Home = () => {
  useEffect(() => {
    document.title = "Urban-Company"
  },[])
  return (
    <div>
      <TopSection />

      <HomeServices />
      
      <br />
      <Footer />
    </div>
  )
}

export default Home;