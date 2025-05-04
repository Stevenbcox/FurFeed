const { Pool } = require("pg");

// PostgreSQL connection configuration
const pool = new Pool({
  user: "stevencox",
  host: "localhost",
  database: "furfeed",
  password: "Password1",
  port: 5432,
});

const insertMockData = async () => {
  const client = await pool.connect();
  try {
    // Insert mock users
    await client.query(`
      INSERT INTO users (username, email, password_hash, profile_picture, bio)
      VALUES
        ('john_doe', 'john@example.com', 'hashedpassword1', 'https://example.com/john.jpg', 'Animal lover and wildlife enthusiast'),
        ('jane_doe', 'jane@example.com', 'hashedpassword2', 'https://example.com/jane.jpg', 'Pet owner and animal rights advocate'),
        ('alice_smith', 'alice@example.com', 'hashedpassword3', NULL, 'Professional wildlife photographer')
      ON CONFLICT (email) DO NOTHING;
    `);

    // Insert mock posts
    await client.query(`
      INSERT INTO posts (user_id, image_url, caption, tags)
      VALUES
        (1, 'https://example.com/post1.jpg', 'A majestic lion in the savannah', ARRAY['wildlife', 'lion', 'nature']),
        (2, 'https://example.com/post2.jpg', 'My dog enjoying the park!', ARRAY['pets', 'dog', 'park']),
        (3, 'https://example.com/post3.jpg', 'A rare sighting of a red panda', ARRAY['wildlife', 'redpanda', 'nature']),
        (1, 'https://example.com/post4.jpg', 'A flock of birds flying at sunset', ARRAY['birds', 'nature', 'sunset']),
        (2, 'https://example.com/post5.jpg', 'My cat loves to nap in the sun', ARRAY['pets', 'cat', 'relaxation'])
      ON CONFLICT DO NOTHING;
    `);

    // Insert mock comments
    await client.query(`
      INSERT INTO comments (post_id, user_id, text)
      VALUES
        (1, 2, 'Wow, the lion looks so powerful!'),
        (2, 1, 'Your dog is adorable! What breed is it?'),
        (3, 2, 'Red pandas are so cute! Great photo!'),
        (4, 3, 'This is such a peaceful scene. Love the birds!'),
        (5, 1, 'Your cat looks so relaxed. Cats are the best!')
      ON CONFLICT DO NOTHING;
    `);

    // Insert mock likes
    await client.query(`
      INSERT INTO likes (post_id, user_id)
      VALUES
        (1, 2),
        (2, 1),
        (3, 1),
        (3, 2),
        (4, 3),
        (5, 1),
        (5, 3)
      ON CONFLICT DO NOTHING;
    `);

    // Insert mock follows
    await client.query(`
      INSERT INTO follows (follower_id, following_id)
      VALUES
        (1, 2),
        (2, 1),
        (3, 1),
        (3, 2)
      ON CONFLICT DO NOTHING;
    `);

    console.log("Mock data inserted successfully!");
  } catch (err) {
    console.error("Error inserting mock data:", err);
  } finally {
    client.release();
  }
};

// Execute the function to insert mock data
insertMockData();