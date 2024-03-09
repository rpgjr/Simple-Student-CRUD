import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddStudent = () => {
  const navigate = useNavigate()
  const [students, setStudents] = useState({
    stud_name: "",
    stud_number: "",
    stud_year: "",
    stud_section: "",
  })

  const handleChange = (e) => {
    setStudents(prev=>({...prev, [e.target.name] : e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8800/students", students)
      navigate("/")
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className='mt-10 px-20'>
      <p className='text-3xl font-semibold mb-3'>Add New Students</p>
      <div className='border rounded-md bg-gray-50 px-10 py-10 grid grid-cols-4 gap-5'>
        <div className=''>
          <label className='block mb-1'>Name</label>
          <input type="text" name='stud_name' onChange={handleChange} required className='w-full border focus:outline-none focus:border-gray-400 px-3 py-2 rounded-md duration-300' placeholder='Full Name' />
        </div>
        <div className=''>
          <label className='block mb-1'>Student Number</label>
          <input type="text" name='stud_number' onChange={handleChange} required className='w-full border focus:outline-none focus:border-gray-400 px-3 py-2 rounded-md duration-300' placeholder='20**-******-TG-0' />
        </div>
        <div className=''>
          <label className='block mb-1'>Year</label>
          <select name='stud_year' onChange={handleChange} required className='w-full bg-white border focus:outline-none focus:border-gray-400 px-3 py-2 rounded-md duration-300'>
            <option value="" selected hidden>Please select one</option>
            <option value="1ST">1ST</option>
            <option value="2ND">2ND</option>
            <option value="3RD">3RD</option>
            <option value="4TH">4TH</option>
            <option value="5TH">5TH</option>
            <option value="IRREGULAR">IRREGULAR</option>
          </select>
        </div>
        <div className=''>
          <label className='block mb-1'>Section</label>
          <select name='stud_section' onChange={handleChange} required className='w-full bg-white border focus:outline-none focus:border-gray-400 px-3 py-2 rounded-md duration-300'>
            <option value="" selected hidden>Please select one</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="BLOCK SECTION">BLOCK SECTION</option>
            <option value="IRREGULAR">IRREGULAR</option>
          </select>
        </div>
        <div>
          <button onClick={handleClick} className='bg-green-400 text-slate-800 font-semibold px-7 py-2 rounded-md'>Save</button>
        </div>
      </div>
    </div>
  )
}

export default AddStudent