
const Komik = require('../models/Komik');

// GET all comics
const getAllKomik = async () => {
    return await Komik.findAll();
};

// GET comic by ID
const getKomikById = async (id) => {
    return await Komik.findByPk(id);
};

// POST new comic
const createKomik = async (data) => {
    return await Komik.create(data);
};

// PUT update comic
const updateKomik = async (id, data) => {
    const komik = await Komik.findByPk(id);

    if (!komik) return null;

    return await komik.update(data);
};

// DELETE comic
const deleteKomik = async (id) => {
    const komik = await Komik.findByPk(id);

    if (!komik) return null;

    await komik.destroy();

    return komik;
};

module.exports = {
    getAllKomik,
    getKomikById,
    createKomik,
    updateKomik,
    deleteKomik
};
