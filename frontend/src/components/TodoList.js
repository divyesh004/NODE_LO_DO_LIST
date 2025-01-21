// frontend/src/components/TodoList.js

import React, { useState } from "react";

const TodoList = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddToCart = () => {
    if (editingIndex !== null) {
      
      const updatedItems = items.map((item, index) =>
        index === editingIndex
          ? { ...item, imageUrl, price, productName, description }
          : item
      );
      setItems(updatedItems);
      setEditingIndex(null);
    } else {
      
      const newItem = { imageUrl, price, productName, description };
      setItems([...items, newItem]);
    }

 
    setImageUrl("");
    setPrice("");
    setProductName("");
    setDescription("");
  };

  const handleEdit = (index) => {
    const item = items[index];
    setImageUrl(item.imageUrl);
    setPrice(item.price);
    setProductName(item.productName);
    setDescription(item.description);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddToCart} className="button">
        {editingIndex !== null ? "Update Product" : "Add to Cart"}
      </button>

      <h2>Products</h2>
      {items.length === 0 ? (
        <p>No products to display.</p>
      ) : (
        items.map((item, index) => (
          <div className="product-card" key={index}>
            <img
              src={item.imageUrl}
              alt={item.productName}
              style={{ width: "100px" }}
            />
            <div className="product-info">
              <h3>{item.productName}</h3>
              <p>Price: ${item.price}</p>
              <p>{item.description}</p>
            </div>
            <div className="product-buttons">
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;
