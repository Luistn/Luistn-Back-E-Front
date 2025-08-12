const pool = require('../db');

// GET todos os jogos
exports.getAll = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM game');
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar jogos' });
    }
};

// GET jogo por ID
exports.getById = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM game WHERE id = ?', [id]);
        if (rows.length === 0) return res.status(404).json({ error: 'Jogo não encontrado' });
        res.status(200).json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar jogo' });
    }
};

// POST criar novo jogo
exports.create = async (req, res) => {
    const { nome, tipo, ano } = req.body;
    if (!nome || !tipo || !ano) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }
    try {
        const [result] = await pool.query('INSERT INTO game (nome, tipo, ano) VALUES (?, ?, ?)', [nome, tipo, ano]);
        res.status(201).json({ id: result.insertId, nome, tipo, ano });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar jogo' });
    }
};

// PUT atualizar jogo
exports.update = async (req, res) => {
    const { id } = req.params;
    const { nome, tipo, ano } = req.body;
    if (!nome || !tipo || !ano) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }
    try {
        const [result] = await pool.query('UPDATE game SET nome = ?, tipo = ?, ano = ? WHERE id = ?', [nome, tipo, ano, id]);
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Jogo não encontrado' });
        res.status(200).json({ id, nome, tipo, ano });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar jogo' });
    }
};

// DELETE jogo
exports.remove = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM game WHERE id = ?', [id]);
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Jogo não encontrado' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: 'Erro ao excluir jogo' });
    }
};
