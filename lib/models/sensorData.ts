import mongoose from 'mongoose';

const sensorDataSchema = new mongoose.Schema({
  humidity: {
    type: Number,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  soilMoisture: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});


const SensorData = mongoose.models.SensorData ||  mongoose.model('SensorData', sensorDataSchema);

export default SensorData;
