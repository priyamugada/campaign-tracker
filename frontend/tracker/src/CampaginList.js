import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './campaginList.css'

function CampaignList() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    const response = await axios.get('http://localhost:5000/campaigns');
    setCampaigns(response.data);
  };

  return (
    <div>
      <h2>All Campaigns</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Campaign Name</th>
            <th>Budget</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Impressions</th>
            <th>Clicks</th>
            <th>Conversions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((camp) => (
            <tr key={camp._id}>
              <td>{camp.name}</td>
              <td>{camp.budget}</td>
              <td>{camp.startDate}</td>
              <td>{camp.endDate}</td>
              <td>{camp.impression}</td>
              <td>{camp.clicks}</td>
              <td>{camp.conversions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CampaignList;
