// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [clients, setClients] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    mobileNo: '',
    project: ''
  });
  console.log(formData,"formData")
  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/clients');
      setClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/clients', formData);
      fetchClients();
      setFormData({
        name: '',
        lastName: '',
        email: '',
        mobileNo: '',
        project: ''
      });
    } catch (error) {
      console.error('Error creating client:', error);
    }
  };

  return (
    <div className="flex justify-center  items-center h-screen bg-gray-100">
      <div className="bg-white p-8 w-screen rounded-lg shadow-lg flex">
        <div className="w-1/2 pr-4">
        <h1 className='text-2xl font-bold mb-4'>Clients</h1>
          <table className="w-full">
            <thead>
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Last Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Mobile No.</th>
                <th className="border px-4 py-2">Project</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{client.name}</td>
                  <td className="border px-4 py-2">{client.lastName}</td>
                  <td className="border px-4 py-2">{client.email}</td>
                  <td className="border px-4 py-2">{client.mobileNo}</td>
                  <td className="border px-4 py-2">{client.project}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-1/2 pl-4">
          <h1 className='text-2xl font-bold mb-4'>Create Client</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block mb-1">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mobileNo" className="block mb-1">Mobile No.</label>
              <input
                type="text"
                id="mobileNo"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="project" className="block mb-1">Project</label>
              <input
                type="text"
                id="project"
                name="project"
                value={formData.project}
                onChange={handleChange}
                placeholder="Enter your project name"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Create Client</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
