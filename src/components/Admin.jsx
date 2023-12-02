import { useGetAccountsQuery } from "../apiSlices/AdminSlice"


const Admin = () => {
 
  const {data, error, isLoading}=  useGetAccountsQuery()   //these objects are predefined in this hook
  console.log("data is : ", data)

    
    return (
        <div className='card'>
            <div className="container">
                <h2><b>Admin Component</b></h2>
                {
                    data && data.map((accounts)=>(
                        <p>{accounts.id}: {accounts.amount}</p>
                    ))
                }
                
                {/* <button onClick={()=>dispatch(increment())}>Increment</button> */}
            </div>
        </div>
      )
}

export default Admin