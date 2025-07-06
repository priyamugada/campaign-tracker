const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
  name: String,
  budget: String,
  startDate: String,
  endDate: String,
  impression: Number,
  clicks: Number,
  conversions: Number
});

module.exports = mongoose.model('Campaign', CampaignSchema);
