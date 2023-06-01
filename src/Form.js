import React,{useState,useEffect} from "react"

const Form=()=>{
    const data={name:"",email:"",password:""};
    const[inputData,setInputData]=useState(data)
    const[flag,setFlag]=useState(false)
    const handleData=(e)=>{
   
   setInputData({...inputData,[e.target.name]:e.target.value})
    }
    console.log(inputData)
    useEffect(()=>{
           console.log("Registered")
    },[flag])
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password){
            alert(`${inputData.name}  All fields are Mandatory `)
        }else{
               setFlag(true)
        }
    }
    return(
        <>
        <pre>{(flag)?<h2 className="ui-define">
            Hello {inputData.name},You've Registered Successful</h2>: ""}</pre> 
        <form className='container' onSubmit={handleSubmit}>
    <div className='header'>
      <h1>Register Form</h1>
    </div>
    <div>
      <input type="text" placeholder='Enter Your Name' name='name'
       value={inputData.name} onChange={handleData}/>
    </div>
    <div>
      <input type="text" placeholder='Enter Your Email' name='email'
       value={inputData.email} onChange={handleData}/>
    </div>
    <div>
      <input type="password" placeholder='Enter Your Password' name='password'
       value={inputData.password} onChange={handleData}/>
    </div>
    <div>
        <button type="submit">Submit</button>
    </div>
  </form>
    </>

    )
}

export default Form;