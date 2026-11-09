
const komikService = require('../services/komikService');

// GET all comics
const getAllKomik = async (req, res) => {
    try {
        const data = await komikService.getAllKomik();

        res.status(200).json({
            success: true,
            message: 'Data komik berhasil diambil',
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// GET comic by ID
const getKomikById = async (req, res) => {
    try {
        const data = await komikService.getKomikById(req.params.id);

        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'Komik tidak ditemukan'
            });
        }

        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// POST create comic
const createKomik = async (req, res) => {
    try {
        const { title, description, author } = req.body;

        if (!title || !description || !author) {
            return res.status(400).json({
                success: false,
                message: 'Title, description, dan author wajib diisi'
            });
        }

        const data = await komikService.createKomik({
            title,
            description,
            author
        });

        res.status(201).json({
            success: true,
            message: 'Komik berhasil ditambahkan',
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// PUT update comic
const updateKomik = async (req, res) => {
    try {
        const { title, description, author } = req.body;

        if (!title || !description || !author) {
            return res.status(400).json({
                success: false,
                message: 'Title, description, dan author wajib diisi'
            });
        }

        const data = await komikService.updateKomik(
            req.params.id,
            { title, description, author }
        );

        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'Komik tidak ditemukan'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Komik berhasil diperbarui',
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// DELETE comic
const deleteKomik = async (req, res) => {
    try {
        const data = await komikService.deleteKomik(req.params.id);

        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'Komik tidak ditemukan'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Komik berhasil dihapus'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getAllKomik,
    getKomikById,
    createKomik,
    updateKomik,
    deleteKomik
};
