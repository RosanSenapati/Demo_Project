import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
export default function Home() {
  const {id} = useParams();
  return (
  
    <div className="container title bg-white"><span className='fs-1 text-dark'>Welcome Page {id}</span></div>
    
  )
}