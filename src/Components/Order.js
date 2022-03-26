
import React,{ useState, useEffect} from 'react'
import { MDBIcon} from 'mdb-react-ui-kit';
import './order.css'
const Order = () => {

  const [users, setUsers] =useState([]);

  const getUsers= async ()=>{
    const response= await fetch('https://my-json-server.typicode.com/Ved-X/assignment/orders');
    // const data= await response.json();
    setUsers(await response.json());
    // console.log(data);
  }

 useEffect(() => {
   
   getUsers();
 }, [])
 
const [searchTerm, setSearchTerm]= useState('');

const [order,setOrder] = useState("ASC");

const sorting =(col) =>{
  if(order === "ASC"){
    const sorted= [...users].sort((a,b) =>
      a[col].toLowerCase() > b[col].toLowerCase() ? 1:-1
    );
    setUsers(sorted);
    setOrder("DSC")
  }
  if(order === "DSC"){
    const sorted= [...users].sort((a,b) =>
      a[col].toLowerCase() < b[col].toLowerCase() ? 1:-1
    );
    setUsers(sorted);
    setOrder("ASC")
  }
}

const handleChange =() =>{
  const event= document.querySelector('.status-bar');
  event.style.opacity=1;
  event.style.display="block";
 
}

  return (
    <div>
      <div className='bar-1 justify-between flex px-12 pr-16 py-2 w-full '>
      <div className=' w-44 text-xl font-bold text-emerald-300 border-b-2 border-b-emerald-300'>All Orders &nbsp; ({users.length})</div>
      <h4 className=' text-xs text-gray-400'>
      Showing 1-10 of {users.length} results
      </h4>
      </div>
      <hr className='h-4 w-11/12 ml-12 -mt-2 z-0'></hr>

     <div className=' flex justify-between px-12 pr-16 items-center w-full h-14'>
    
       {/* <div className='search-bar border-2  w-1/2 h-14'> */}
          <div className=" rounded hover:shadow-lg active:shadow-gray-400 w-80 flex justify-evenly items-center ">
            
            <div className="input-group rounded">
               <input type="search" className="form-control rounded"  onChange={event =>{setSearchTerm(event.target.value)}}  placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
               <span className="input-group-text border-0" id="search-addon">
                 <i className="fas fa-search"></i>
               </span>
             </div>          
           </div> 
        
       
        <div className='filter-bar border-gray-300 border-2 hover:shadow-lg w-24 h-10 pl-2 pt-2 rounded-lg'>
        <MDBIcon fas icon="align-left " size="lg" onClick={handleChange}/>
        <MDBIcon fas icon="arrows-alt-v" size="lg"/>
        <span className='ml-2'>Filter</span>  
          

           <div className='status-bar border-4 w-32 h-28 bg-gray-100 hidden'>
              <input type="checkbox" id="status" value="Completed" />Completed<br></br>
              <input type="checkbox" name="status" value="Prepared" />Prepared<br></br>
              <input type="checkbox" name="status" value="Delivered" />Delivered<br></br>

                <button className="bg-indigo-600 rounded w-28 text-white" onClick={()=> sorting("Delivered")} >Apply</button>
            </div> 
          </div>
          

     </div>
     

         <div className='user-data '>
              <table className='w-11/12 ml-12 text-center'>
              <thead className='border-2 h-12 bg-gray-100'>
              <tr className='uppercase text-base text-left ' >
              <th className='px-2'>orderid</th>
                <th className='px-8' onClick={()=> sorting("customer")}>Customer <MDBIcon fas icon="caret-down" /></th>
                <th >Address<MDBIcon fas icon="caret-down" /></th>
                <th>Product<MDBIcon fas icon="caret-down" /></th>
                <th onClick={()=> sorting("date")}>Date Order<MDBIcon fas icon="caret-down" /></th>
                <th onClick={()=> sorting("status")}>status<MDBIcon fas icon="caret-down" /></th>
              </tr>
              </thead>
             

               {
                 users.filter((val)=>{
                   if(searchTerm === "")
                   {
                     return val;
                   }else if(val.customer.toLowerCase().includes(searchTerm.toLowerCase())){
                     return val;
                   }
                   else if(val.status.toLowerCase().includes(searchTerm.toLowerCase())){
                     return val;
                   } else if(val.country.toLowerCase().includes(searchTerm.toLowerCase())){
                     return val;
                   }
                    else if(val.product_title.toLowerCase().includes(searchTerm.toLowerCase())){
                     return val;
                   }
                 }).map((users)=>{
                     return (
                       <tbody>
                       <tr className='text-black text-left '>
                        <td className='text-center'>{users.order_id}</td>
                        <td className='flex place-items-center px-3 py-3 '><div className='avatar'></div><span className='ml-4'>{users.customer}</span></td>
                        <td>{users.country}<br></br><span className='text-slate-500 text-base font-extralight'>{users.address}</span></td>
                        <td>{users.product_title}<br></br><span className='text-slate-500 text-base font-extralight'>{users.product_description}</span></td>
                        <td>{users.date}</td>
                        <td className='text-sm'><div id={users.status}>{users.status}</div></td>
                        </tr>
                       </tbody>
                      
                      
                     )
                 })
               }

             
                
              </table>
         </div>
    </div>
  )
}

export default Order