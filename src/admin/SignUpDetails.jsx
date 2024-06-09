import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const SignUpDetails = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (
      !username ||
      !name ||
      !gender ||
      !age ||
      !contact ||
      !email ||
      !address
    ) {
      setError("All fields are required!");
      return;
    }

    if (contact.length != 10) {
      setError("Contact number must be exactly 10 digits");
      return;
    }
    try {
      const response = await fetch("http://localhost:8080/pms/admins", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, name, gender, age, address }),
      });
      // Handle form submission logic here
      console.log("Form submitted:", { username, name, gender, age, address });
      if (!response.ok) {
        throw new Error("Signup failed");
      }

      navigate("/login");
    } catch (error) {
      console.log("Signup failed: ", error);
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div
      className="absolute inset-0 bg-center bg-cover zoom-in opacity-80 backdrop-blur"
      style={{ backgroundImage: "url('PMS.jpeg')" }}
    >
      <h2 className="text-xl font-semibold mb-4">Sign Up Details</h2>
      <div className="flex items-center justify-center h-screen w-full max-w-md bg-glass">
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div>
            <label
              htmlFor="username"
              className=" flex text-white text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="flex text-white text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div>
            <label
              htmlFor="gender"
              className="flex text-white text-sm font-bold mb-2"
            >
              Gender
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="age"
              className="flex text-white text-sm font-bold mb-2"
            >
              Age
            </label>
            <input
              id="age"
              type="number"
              min={0}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div>
            <label
              htmlFor="contact"
              className="flex text-white text-sm font-bold mb-2"
            >
              Contact
            </label>
            <input
              id="contact"
              type="tel"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              pattern="[0-9]{10}"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="flex text-white text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="flex text-white text-sm font-bold mb-2"
            >
              Address
            </label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows="3"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md mb-2"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
          <div className="div">
            <span className="text-red-500">{error}</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpDetails;
