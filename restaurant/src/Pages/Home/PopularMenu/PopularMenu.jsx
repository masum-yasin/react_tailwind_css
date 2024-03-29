
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category ==='popular')
    // const [menu,setMenu] = useState([]);
    //     useEffect(()=>{
    //         fetch('menu.json')
    //         .then(res =>res.json())
    //         .then(data =>{
    //             const popularItems = data.filter(item =>item.category ==='popular')
    //             setMenu( popularItems)})
    //     },[])

    return (
       <section className='mb-16'>
            <SectionTitle   
             subHeading={"popular Items"}
            heading={"From Our Menu"}
            >
        </SectionTitle>  

        <div className='grid md:grid-cols-2 gap-4'>
            {
               popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
            }
        </div>
      <div className='text-center my-5'>
      <button className="btn btn-outline btn-warning text-white mt-5 border-0 border-b-4">View Full Menu</button>
      </div>
            </section>
      
    );
};

export default PopularMenu;