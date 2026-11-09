
require('dotenv').config();

const express = require('express');
const sequelize = require('./config/database');

const komikRoutes = require('./routes/komikRoutes');

const app = express();

// Middleware
app.use(express.json());

// Welcome route
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: '147 ORM Clean Architecture API is running'
    });
});

// Komik API routes
app.use('/api/komik', komikRoutes);

// Handle unknown routes
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route tidak ditemukan'
    });
});

// Connect database and start server
const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await sequelize.authenticate();

        console.log('PostgreSQL connected successfully!');

        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to database:', error.message);
        process.exit(1);
    }
};

startServer();
