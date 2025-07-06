import React,{useState} from "react";
import axios from 'axios';
import './campaginForm.css'
import { useNavigate } from "react-router-dom";
function CampaignForm(){
const [formData,setFormData]=useState({
    name:'',
    budget:'',
    startDate:'',
    endDate:''
});
const handleChange=(e)=>{
    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    });

};
const handleSubmit=async(e)=>{
    e.preventDefault();
    await axios.post('http://localhost:5000/campaigns',formData);
    setFormData({name:'',budget:'',startDate:'',endDate:''})
    alert('campagin succesfully created!')

};
const navigate=useNavigate();
const goToTrack=()=>{
    navigate('/track')
}
return(
    <form onSubmit={handleSubmit}> 
        <input name="name" type="text" placeholder="Campaign Name" value={formData.name} onChange={handleChange} required/>
        <input name="budget" type="number" placeholder="Budget" value={formData.budget} onChange={handleChange} required/>
        <input name="startDate" type="date" placeholder="Start Date" value={formData.startDate} onChange={handleChange} required/>
        <input name="endDate" type="date" placeholder="End Date" value={formData.endDate} onChange={handleChange} required/>
        <button type="submit">submit</button>
        <button type='button' style={{ marginTop: "20px" }} onClick={goToTrack}>
        Track
      </button>
    </form>
)
}
export default CampaignForm;