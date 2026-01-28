import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import contactRoutes from './routes/contact.routes.js';

const app = express();

// Security Middleware
app.use(helmet());
app.use(cors()); // Configure origins in production

// Logging
app.use(morgan('dev'));

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Body Parsing
app.use(express.json());

// Routes
app.use('/api/v1', contactRoutes);

// Health Check
app.get('/', (req, res) => {
    res.json({ message: 'Portfolio API v1 Running' });
});

// Error Handling Logic
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Server Error' });
});

export default app;
