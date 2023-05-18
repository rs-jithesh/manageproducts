import Axios from 'axios'; 
import { useState } from 'react';

const AddProducts = () => {
  const [product, setProduct] = useState({});
  
  const setField = (key, value) => {
    if (product[key]) return;
    setProduct({...product, [key]: value});
  }

  const handleSubmit = (e) => {
    console.log(product);
    e.preventDefault();
    Axios.post("http://apitextile.eyeterp.com/product/addproduct", product).then((res) => {
      console.log(res);
    });
  }

  return (
    <div className='m-2 w-75'>
      <h2 className='m-2'>Add Products</h2>
      <form onSubmit={handleSubmit}>

        <div className='form-group'>
          <label className='ms-2' htmlFor="productName">Product Name</label>
          <input className="form-control m-2" type="text" name='productName' id='productName' placeholder='Enter product name' required
          onChange={(e) => setField("productName", e.target.value)}/>
        </div>

        <div className='form-group'>
          <label className='ms-2' htmlFor="description">Product Description</label>
          <textarea className="form-control m-2" name='description' id='description' placeholder='Enter description' required
          onChange={(e) => setField("description", e.target.value)}/>
        </div>

        <div className='form-group'>
          <label className='ms-2' htmlFor="description">Price</label>
          <input className="form-control m-2" type="number" name='price' placeholder='Enter product price' required
          onChange={(e) => setField("price", e.target.value)}/>
        </div>

        <div className='form-group'>
          <label className="ms-2" htmlFor="file">Product Image</label>
          <input className="form-control m-2" type="file" name='file' id='file' placeholder='Add image' required
          onChange={(e) => setField("file", e.target.value)}/>
        </div>

        <button className='btn btn-success ms-2 mt-2' type='submit'>Add Product</button>

      </form>
    </div>
  );
}


const ViewProducts = () => {

  const handleViewProducts = (e) => {
    e.preventDefault();
    Axios.get("http://apitextile.eyeterp.com/product/viewproduct").then((res) => {
      console.log(res);
    });
  }

  return (
    <div className='m-3'>
      <button className='btn btn-primary' onClick={handleViewProducts}>View Products</button>
    </div>
  );

}

const EditProduct = () => {

  const handleEditProduct = (e) => {
    e.preventDefault();
    Axios.put("http://apitextile.eyeterp.com/product/editproduct", {
      "productName" : "",
      "description": "",
      "price": "",
      "_id": "",
  }).then((res) => {
      console.log(res);
    });
  }

  return (
    <div className='m-3'>
      <button className='btn btn-warning' onClick={handleEditProduct}>Edit Product</button>
    </div>
  );

}

const DeleteProduct = () => {

  const handleDeleteProduct = (e) => {
    e.preventDefault();
    Axios.delete("http://apitextile.eyeterp.com/product/deleteproduct", {
      "_id": "",
  }).then((res) => {
      console.log(res);
    });
  }

  return (
    <div className='m-3'>
      <button className='btn btn-danger' onClick={handleDeleteProduct}>Delete Product</button>
    </div>
  );

}

const UpdateImageUrl = () => {

  const handleImageUrl = (e) => {
    e.preventDefault();
    Axios.put("http://apitextile.eyeterp.com/product/updateImageUrl", {
      "deleteUrl": "",
      "addUrl": "",
      "_id":""
  }).then((res) => {
      console.log(res);
    });
  }

  return (
    <div className='m-3'>
      <button className='btn btn-secondary' onClick={handleImageUrl}>Update Image URL</button>
    </div>
  );

}

const ViewProductById = () => {

  const handleProductById = (e) => {
    e.preventDefault();
    Axios.get("http://apitextile.eyeterp.com/product/productViewById", {
      "_id": "",
  }).then((res) => {
      console.log(res);
    });
  }

  return (
    <div className='m-3'>
      <button className='btn btn-info' onClick={handleProductById}>View Product By ID</button>
    </div>
  );

}


function App() {
  return (
    <>
    <AddProducts />
    <ViewProducts />
    <EditProduct />
    <DeleteProduct />
    <UpdateImageUrl />
    <ViewProductById />
    </>
  );
}

export default App;
