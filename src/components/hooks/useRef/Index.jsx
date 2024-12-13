import React, { useRef} from 'react'

const Index = () => {
  const username=useRef(null)
  const password=useRef(null)
//   console.log(username);
//   console.log(password);
  

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username.current.value);
        console.log(password.current.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input ref={username} type="text" name="username" id="username" placeholder='uername'/>
                <input ref={password} type="text" name="password" id="text" placeholder='text'  />
                <button type='submit'>submit</button>
            </form>
            <h1 className='text-teal-900'>hello</h1>
          
        </>
    )
}

export default Index