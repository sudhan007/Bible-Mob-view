import React , { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BaseUrluser } from "../../components/config/dev";
import axios from "axios";
import TopbarHome from "../global/TopbarHome";
import biimg from './bi.jpeg'
import bi2 from './bi2.jpg'


const Home = () => {

  const [isSidebar, setIsSidebar] = useState(true);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [ alldata , setAlldata ] = useState()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [ data , setData ] = useState(2)

    let navigate = useNavigate()

    useEffect(()=>{
      document.getElementById('root').classList.add('specific-screen-style');

      start()
    },[])


    let start = async () =>{
      
            let responce = await axios({
                method : 'get',
                url : BaseUrluser+'/allbookcat',
            })
            .then((ree)=>{
                if(ree.data.status === true){
                    setAlldata(ree.data.data)
                    setData(2)
                }else{
                  setData(1)
                }
            })
            .catch((err)=>{
                setData(1)
                console.log(err)
            })
      }
 

    let ClicckedCat = (re)=>{
      navigate('book'+'/' + re._id + '/' + re._id)
    }
      
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

  return (
    // <>
    //   {
    //     data === 1 ?
    //     <>
    //     </>
    //   : 

    //   <div  className="">



    //     <div className="row"> 
    //       <div className="col-12" > 

    //         <div style={{ position : 'absolute' }} >
    //           <div style={{ position : 'fixed' , padding : '20px' , right : 0 }} className="d-flex justify-content-end" >
    //             <div style={{ marginRight : 20}} className="dropdown-container d-flex justify-content-end">
    //                 <button className="dropdown-button" onClick={toggleDropdown}>
    //                   Category
    //                 </button>
    //                 {isDropdownOpen && (
    //                   <div className="dropdown-menu">
    //                     {
    //                       alldata?.map((re, key)=>{
    //                         return (
    //                           <div onClick={()=>{ ClicckedCat(re) }} className="dropdown-item" >{re.catname}</div>
    //                         )
    //                       })
    //                     }
                      
    //                   </div>
    //                 )}
    //               </div>
    //             <p style={{ color : 'rgb(179 179 179)' , marginRight : 20 , paddingTop : 10 ,  }} >About Us</p>
    //             <p style={{ color : 'rgb(179 179 179)' , marginRight : 20  , paddingTop : 10}} >Contact Us</p>
                
    //           </div>
             
    //         </div>

    //           <div className="ddd" >
    //             <img style={{ width : '100%' }} src={biimg} alt="" />
    //           </div>

    //           <div className="ddvi" >
    //             <h2 className="my-4" style={{ textAlign : 'center' , fontWeight : '600' }} >Isaiah 6</h2>
    //             <p style={{ textAlign : 'center'  , fontSize : 21 , padding : 20 }} >The great vision of Isaiah. He saw the Lord on His throne, high and lifted up. 
    //               Isaiah realized his own uncleanness. He felt unworthy to serve the Lord. Don’t 
    //               we all feel that way at times? We should. Yet, God did not destroy Isaiah 
    //               for his humanity. God purified the prophet (as He does with us at salvation) 
    //               and called Isaiah to do a work for Him. A wonderful promise of a 
    //               remnant of God’s conquering people is given at the end of the chapter.</p>
    //           </div>




    //           <ul class="cards">
                  
    //               {
    //                 alldata?.map(( re , index )=>{
    //                   return( 

    //                     <li onClick={()=>{ ClicckedCat(re) }}>
    //                       <div class="card">
    //                         <img src={bi2} class="card__image" alt="" />
    //                         <div class="card__overlay">
    //                           <div class="card__header">              
    //                             <div class="card__header-text">
    //                               <h3 class="card__title">{re.catname}</h3>
    //                             </div>          
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </li> 
    //                   )
    //                 })
    //               }
    //             </ul> 
    //       </div>
    //     </div>

            





            
    //     </div>
        
    //   }
    //   </>

    <div >
      <p>sfgvsfogvc</p>
    </div>
  );
};

export default Home;
