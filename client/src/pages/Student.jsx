import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Student = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    const fetchAllStudents = async () => {
      try {
        const res = await axios.get("http://localhost:8800/students")
        setStudents(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchAllStudents()
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/students/" + id)
      window.location.reload()
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className='mt-10 px-20'>
      <div className='flex items-center justify-between mb-3'>
        <p className='text-3xl font-semibold'>Students Records</p>
        <button className='bg-green-400 text-slate-800 font-semibold px-3 py-2 rounded-md'><Link to='/add'>Add New Student</Link></button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead className='bg-slate-800 text-white'>
            <tr>
              <th>Number</th>
              <th>Full Name</th>
              <th>Year</th>
              <th>Section</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr>
                <th>{student.stud_number}</th>
                <td>{student.stud_name}</td>
                <td>{student.stud_year}</td>
                <td>{student.stud_section}</td>
                <td className='flex items-center'>
                  <p className='mx-1 text-blue-500 hover:underline cursor-pointer'><Link to={`/update/${student.stud_id}`}>Edit</Link></p>
                  <p className='mx-1 text-red-500 hover:underline cursor-pointer' onClick={() => handleDelete(student.stud_id)}>Delete</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Student