const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let ratings = []
// Use body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML files in the root directory
app.use(express.static(__dirname));

app.post('/submit', (req, res) => {
    const ratingData = {
        overallRating: req.body.overall_rating,
        cleanliness: req.body.cleanliness,
        capacity: req.body.capacity,
        accessibility: req.body.accessibility,
        comment: req.body.comment,
    };
    ratings.push(ratings)


    console.log("New Rating Submitted:", ratingData);
    res.send("Rating submitted successfully!");
});

app.get('/getRatings', (req, res) => {
    res.send(ratings)
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
