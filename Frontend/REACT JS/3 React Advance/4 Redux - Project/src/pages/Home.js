import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Product from '../components/Product';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const API_URL = `https://fakestoreapi.com/products`;

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12'>
      {loading ? (
        <Loader />
      ) : posts.length > 0 ? (
        posts.map((post) => (
          <Product key={post.id} post={post} />
        ))
      ) : (
        <div className='col-span-full text-center text-lg'>No Data Found</div>
      )}
    </div>
  );
};

export default Home;
