import Message from '../models/Message.model.js';
import { z } from 'zod';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const submitContactForm = async (req, res) => {
    try {
        // 1. Validate Input
        const validatedData = contactSchema.parse(req.body);

        // 2. Save to DB
        const newMessage = await Message.create({
            ...validatedData,
            ipAddress: req.ip,
        });

        // 3. Log (or send email notification here)
        console.log(`New Message from ${validatedData.email}: ${validatedData.message.substring(0, 20)}...`);

        // 4. Respond
        res.status(201).json({
            success: true,
            message: 'Message sent successfully',
            data: { id: newMessage._id }
        });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                success: false,
                message: 'Validation Error',
                errors: error.errors
            });
        }
        console.error('Contact Error:', error);
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
};
