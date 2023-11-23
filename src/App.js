import './App.css';
import Layout from './Components/Layout';
import HomePage from './Components/Home';
import AboutUs from './Components/About-Us';
import TrendingCampaigns from './Components/TrendingCampaigns';
import OurTeam from './Components/OurTeam';

function App (){
  return (
    <div className='App'>
      <Layout>
      <HomePage/>
      <AboutUs/>
      <TrendingCampaigns/>
      <OurTeam/>
      </Layout>
    </div>
  );
}

export default App;

