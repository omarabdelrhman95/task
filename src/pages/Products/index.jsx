import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const dummyProducts = [
    {
      title: "ابل ايفون 13 128 جيجابايت - اخضر، بشريحتين",
      price: "32,999.00 جنيه",
    },
    {
      title: "ابل ايفون 13 128 جيجابايت - اخضر، بشريحتين",
      price: "32,999.00 جنيه",
    },
    {
      title: "ابل ايفون 13 128 جيجابايت - اخضر، بشريحتين",
      price: "32,999.00 جنيه",
    },
  ];

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://178.62.199.143/scrape", {
          url: "https://www.amazon.eg/",
          category: "iphone",
        });
        const data = await res.json();
        setLoading(false);
        setProducts(dummyProducts);
      } catch (err) {
        setLoading(false);
        setProducts(dummyProducts);
        console.log(err);
      }
      setLoading(false);
    })();
  }, []);

  if (loading) return <Loading />;

  return (
    <main className="main__page">
      <h1 className="page__title">Products</h1>
      <table className="main__table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, i) => (
            <tr key={i}>
              <td>{product?.title}</td>
              <td>{product?.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Products;
