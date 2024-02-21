import Cover from "../../Shared/Cover/Cover";
import orderfood from "../../../../public/assets/shop/order.jpg";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import FoodCart from "../../Shared/FoodCart/FoodCart";


const Order = () => {
  // const categories = ['dessert','pizza','soup','salad','drink']
  // const {category} = useParams();
  // const initialIndex = categories.indexOf(category)
    const [tabIndex,setTabIndex] = useState(0)
    const [menu] = useMenu();
   
    
    const dessert = menu.filter(item => item.category ==='dessert');
    const soup = menu.filter(item => item.category ==='soup');
    const salad = menu.filter(item => item.category ==='salad');
    const pizza = menu.filter(item => item.category ==='pizza');
    const offered = menu.filter(item =>item.category ==='offered')
    const drink = menu.filter(item =>item.category ==='drinks')
  return (
    <div className="mb-20">
      <Cover img={orderfood} title={"order Food"}></Cover>
     
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
         
          <Tab>Dessert</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Salad</Tab>
          <Tab>Drink</Tab>
        
        </TabList>
        <TabPanel>
          <OrderTab
                items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
    <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drink}></OrderTab>
        </TabPanel>
        
  
      </Tabs>
    
    </div>
  );
};

export default Order;
