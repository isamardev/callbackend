const express = require("express");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const app = express();  
// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use(express.static('public'));
// Routes

const unitRouter = require('./routes/unitRoutes');
const productRouter = require('./routes/productRoutes');
const registerUser = require('./routes/regisrationRoutes');
const loginUser = require('./routes/loginRoutes');
const blogRouter = require('./routes/blogRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const auditRoutes = require('./routes/auditRoutes');



// Define API routes
app.use('/api/user', unitRouter);
app.use('/api/product', productRouter);
app.use('/api/registration', registerUser);
app.use('/api/login', loginUser);
app.use('/api/blog', blogRouter);
app.use('/api/call', reviewRouter);
app.use('/api/audit', auditRoutes);
app.use('/api/category', categoryRoutes);
// Serve static files
app.use('/images', express.static('./images'));
app.use('/uploads', express.static('./uploads'));
// For testing


app.get('/', (req, res) => {                
    res.json({ message: "Success" });
});
// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

