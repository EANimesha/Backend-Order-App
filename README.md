# Product Ordering Backend

This project was developed with Node JS (v 17) and Express. 

Database is Mongo Db Atlas

## Todo

### [x] As a user I need to search for products by giving product names.

### [ ] As a user I need to select a product category and view related products.

End point : http://localhost:5000/products/?category={Category_name}

Ex:

- request: http://localhost:5000/products/?category=CAKE
- response: 
        ```
        [
            {
                "_id": "62304df82fbb50db377f2c23",
                "name": "Butter Cake",
                "category": "CAKE",
                "price": "1000 LKR",
                "quantity": "100 KG",
                "image": "https://kemmyrecipes.net/wp-content/uploads/2020/08/Yellow-Butter-Cake.jpg",
                "producerdetails": [
                    {
                        "_id": "623176e6cb2a7a1a413170c0",
                        "name": "Cake Shop",
                        "address": "Jaffna,Sri Lanka",
                        "pid": "P002"
                    }
                ]
            }
        ]
        ```
<!-- - [ ] As a user I need to select a product and view its details.
- [ ] As a user I need to create new carts
- [ ] As a user I need to select products and add them to the relevant cart.
- [ ] As a user I need to view my carts.
- [ ] As a user I need to remove products from my carts.
- [ ] As a user I need to select a cart and view its details
- [ ] As a user I need to close unnecessary carts. -->

