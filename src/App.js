import React from 'react';
import './App.css';
import Slider from './Components/Slider/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import TabNav from './Components/Navbar/TabNav';
import Tab from './Components/Navbar/Tab';


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
        <TabNav tabs={['Home','Camisetas','Buzos','Blog','Nosotras']} selected={this.state.selected} setSelected={this.setSelected}>
          <Tab isSelected={this.state.selected === 'Home'}>
            <h1 className="topMessage mt-5">¡Siéntete poderosa con nuestras prendas!</h1>
            <Slider />
            <p>Home</p>
          </Tab>
          <Tab isSelected={this.state.selected === 'Camisetas'}>
            <p>Camisetas</p>
          </Tab>
          <Tab isSelected={this.state.selected === 'Buzos'}>
            <p>Buzos</p>
          </Tab>
          <Tab isSelected={this.state.selected === 'Blog'}>
            <p>Blog</p>
          </Tab>
          <Tab isSelected={this.state.selected === 'Nosotras'}>
            <p>Nosotras</p>
          </Tab>
        </TabNav>
        
      </>
    );
  }

}

export default App;
