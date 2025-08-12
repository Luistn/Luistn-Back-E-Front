-- Criação do banco e tabela
CREATE DATABASE IF NOT EXISTS jogos;
USE jogos;

CREATE TABLE IF NOT EXISTS game (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    ano INT NOT NULL
);

-- Inserção de exemplos
INSERT INTO game (nome, tipo, ano) VALUES
('The Legend of Zelda', 'Aventura', 1986),
('Super Mario Bros', 'Plataforma', 1985);
