import { useState, useEffect } from "react";
import axios from "axios";

export default function useCategory() {
  const [categories, setCategories] = useState([]);
  const url = "https://e-commerce-website-et1l.onrender.com"
  // const url = "https://localhost:5000"
  //get cat
  const getCategories = async () => {
    try {
      const { data } = await axios.get(url+"/api/v1/category/get-category");
      setCategories(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}
