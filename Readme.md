# 💳 RazorPay Payment Gateway Integration

A full-stack application demonstrating RazorPay payment gateway integration with React frontend and Express backend.

## 🚀 Tech Stack

### Frontend
- React (Vite)
- RazorPay Checkout

### Backend
- Express.js
- MongoDB with Mongoose
- RazorPay Node SDK

## ⚙️ Prerequisites

- Node.js (v14 or above)
- MongoDB installed locally or MongoDB Atlas account
- RazorPay account with API keys

## 🛠️ Environment Variables

Create `.env` file in the backend directory:

```env
PORT=4000
RAZORPAY_KEY_ID=<your_razorpay_key_id>
RAZORPAY_KEY_SECRET=<your_razorpay_secret_key>
MONGO_URI=<your_mongodb_connection_string>
```

## 🏃‍♂️ Getting Started

### Backend Setup

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm run dev 
   ```

The backend server will run on `http://localhost:4000`

### Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend application will be available at `http://localhost:5173`

## 📌 Important Notes

- Make sure both frontend and backend servers are running simultaneously
- Ensure all environment variables are properly set before starting the servers
- For testing, use RazorPay test mode credentials
- Check RazorPay documentation for test card numbers and UPI IDs

## 🔒 Security

- Never commit your `.env` file
- Always use environment variables for sensitive data
- Keep your RazorPay API keys secure


## 🙏 Acknowledgments

- [RazorPay Documentation](https://razorpay.com/docs/)
- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
