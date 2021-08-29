import React from 'react';
import './App.css';
import Slider from './Components/Slider/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import TabNav from './Components/Navbar/TabNav';
import Tab from './Components/Navbar/Tab';
import Footer from './Components/Footer/Footer';
import HomeBody from './Components/HomeBody/HomeBody';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      selected: 'Home'
    }
  }

  setSelected = (tab) => {
    this.setState({selected: tab});
  }

  render() {
    return (
      <>
        <TabNav tabs={['Home','Camisetas','Buzos','Blog','Nosotras', 'FreeSoul']} selected={this.state.selected} setSelected={this.setSelected}>
          <Tab isSelected={this.state.selected === 'Home'}>
            <h1 className="titleMsg mt-5">¡Siéntete poderosa con nuestras prendas!</h1>
            <Slider />
            <h1 className="titleMsg mt-5">Nuestros Productos</h1>
            <HomeBody/>
            <Footer/>
          </Tab>
          <Tab isSelected={this.state.selected === 'Camisetas'}>
            <p>Camisetas</p>
            <Footer/>
          </Tab>
          <Tab isSelected={this.state.selected === 'Buzos'}>
            <p>Buzos</p>
            <Footer/>
          </Tab>
          <Tab isSelected={this.state.selected === 'Blog'}>
            <p>Blog</p>
            <Footer/>
          </Tab>
          <Tab isSelected={this.state.selected === 'Nosotras'}>
            <p>Nosotras</p>
            <Footer/>
          </Tab>
          <Tab isSelected={this.state.selected === 'FreeSoul'}>
            <p>FreeSoul</p>
            <Footer/>
          </Tab>
        </TabNav>
        
      </>
    );
  }

}

export default App;
