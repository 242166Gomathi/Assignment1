import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, TextField, Button, AppBar, Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', description: ''});
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        // Fetching the product data from an API
        const mockProducts = [
            {
                id: 1,
                name: 'Grocery',
                description: 'The best Grocery Stores in India',
                price: 150,
                image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/345344457/FA/TS/LD/181564626/grocery-products-500x500.webp',
                category: 'Grocery',
            },
            {
                id: 2,
                name: 'Mobile',
                description: 'The best Mobile Stores in India',
                 price: 35500,
                image: 'https://www.chimerarevo.com/wp-content/uploads/2020/06/smartphone-150-euro.jpg',
                category: 'Mobiles',
            },
            {
                id: 3,
                name: 'Fashion',
                description: 'Cool Ladies Bag in India',
                 price: 1650,
                image: 'https://tse3.mm.bing.net/th/id/OIP.d6a8ocCX79SGw3flbaoGTwHaHY?rs=1&pid=ImgDetMain',
                category: 'Fashion',
            },
        ];
        setProducts(mockProducts);
    }, []);

    const handleCategoryClick = (event, category) => {
        setAnchorEl(event.currentTarget);
        setSelectedCategory(category);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const addProduct = () => {
        setProducts([...products, newProduct]);
        setNewProduct({ name: '', description: '' });
    };

    return (
        <div style={{ backgroundColor: '#f2f2f2', minHeight: '100vh' }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        My Store
                    </Typography>
                    <IconButton color="inherit">
                        <SearchIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <ShoppingCartIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" style={{ padding: '20px' }}>
              
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <Typography variant="h6">Categories:</Typography>
                    <div>
                        <Button aria-controls="category-menu" aria-haspopup="true" onMouseEnter={(e) => handleCategoryClick(e, 'Grocery')}>
                            Grocery
                        </Button>
                        <Button aria-controls="category-menu" aria-haspopup="true" onMouseEnter={(e) => handleCategoryClick(e, 'Mobiles')}>
                            Mobiles
                        </Button>
                        <Button aria-controls="category-menu" aria-haspopup="true" onMouseEnter={(e) => handleCategoryClick(e, 'Fashion')}>
                            Fashion
                        </Button>
                    </div>
                    <Menu
                        id="category-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {selectedCategory === 'Grocery' &&
                            <MenuItem onClick={handleClose}>Grocery Products</MenuItem>
                        }
                        {selectedCategory === 'Mobiles' &&
                            <MenuItem onClick={handleClose}>Mobiles Products</MenuItem>
                        }
                        {selectedCategory === 'Fashion' &&
                            <MenuItem onClick={handleClose}>Fashion Products</MenuItem>
                        }
                    </Menu>
                </div>
                <Grid container spacing={3}>
                    {products.map((product) => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={product.image}
                                    alt={product.name}
                                />
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {product.description}
                                    </Typography>
                                    { <Typography variant="body1" fontWeight="bold">
                                        ${product.price}
                                    </Typography> }
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <br></br>
                <Typography variant="h6" align="center" gutterBottom>
                    Add New Product
                </Typography>
                <Grid container spacing={2} alignItems="center" justify="center">
                    <Grid item>
                        <TextField
                            label="Name"
                            variant="outlined"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Description"
                            variant="outlined"
                            value={newProduct.description}
                            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Price"
                            variant="outlined"
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={addProduct}>
                            Add Product
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Dashboard;
