CREATE DATABASE IF NOT EXISTS animatchsearch_db;
USE animatchsearch_db;

CREATE TABLE pets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    species VARCHAR(50) NOT NULL,
    breed VARCHAR(100),
    image_url VARCHAR(500),
    age INT,
    gender VARCHAR(10),
    size VARCHAR(20),
    color VARCHAR(50),
    description TEXT,
    adoption_status VARCHAR(20) DEFAULT 'available',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Données de test
INSERT INTO pets (name, species, breed, image_url, age, gender, size, color, description) 
VALUES 
('Whiskers', 'cat', 'Persian', 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400', 2, 'male', 'medium', 'white', 'A friendly and playful cat looking for a loving home.'),
('Buddy', 'dog', 'Golden Retriever', 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400', 3, 'male', 'large', 'golden', 'An energetic and loyal companion who loves to play fetch.'),
('Luna', 'cat', 'Siamese', 'https://images.unsplash.com/photo-1573865552739-10c1d3a1f0cc?w=400', 1, 'female', 'small', 'cream', 'A sweet and gentle kitten with beautiful blue eyes.'),
('Max', 'dog', 'Labrador', 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400', 4, 'male', 'large', 'black', 'A well-trained dog who is great with kids and other pets.'),
('Fluffy', 'cat', 'Persian', 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400', 3, 'female', 'medium', 'white', 'A fluffy Persian cat with stunning eyes.'),
('Shadow', 'cat', 'Maine Coon', 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400', 3, 'male', 'large', 'gray', 'A majestic and fluffy cat with a gentle personality.'),
('Bella', 'dog', 'Beagle', 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=400', 2, 'female', 'medium', 'brown', 'A curious and friendly dog who loves adventures.'),
('Milo', 'cat', 'British Shorthair', 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400', 4, 'male', 'medium', 'blue-gray', 'A calm and dignified cat perfect for a quiet home.'),
('Rocky', 'dog', 'German Shepherd', 'https://images.unsplash.com/photo-1568572933382-74d440642117?w=400', 5, 'male', 'large', 'black and tan', 'A protective and loyal dog, great for families.'),
('Charlie', 'dog', 'Corgi', 'https://images.unsplash.com/photo-1612536172776-76d8e1911fe8?w=400', 2, 'male', 'small', 'orange', 'A playful and adorable Corgi with short legs and big ears.');