import React from 'react';
import './Search.css';

export default function Search(props) {
  const value = props.value;
  const handleChange = (e) => props.onChange(e.target.value);
  const handleSubmit = () => props.onSubmit(value);
  
  return (
    <>
    <div className="background">
      <input className="search clear-margin-top" type="text" placeholder="Search for movies or web series " value={value} onChange={handleChange} />
      <button className="btn btn-success clear-margin-top" onClick={handleSubmit}>Search</button>
    </div>
    <div class="bg"></div>
    </>
  )
}
