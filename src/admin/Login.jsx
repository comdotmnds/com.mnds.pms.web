import React from 'react'

function Login({ onSubmit }) {
   
  return (
    
    <div className="absolute inset-0 bg-center bg-cover zoom-in opacity-80 backdrop-blur"  style={{backgroundImage: "url('PMS.jpeg')"}}>
       
    <div className="flex items-center justify-center h-screen w-full max-w-md bg-glass">
        <form onSubmit={onSubmit} className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="flex text-white text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="username"
                    placeholder="Username"
                />
            </div>
            <div className="mb-6">
                <label className="flex text-white text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                />
            </div>
            <div className="flex items-center justify-center">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Sign In
                </button>
            </div>
            <a link =" " href="#" className="text-white hover:text-black font-semibold">
   
</a>
        </form>
        
    </div>
</div>
  )
}

export default Login