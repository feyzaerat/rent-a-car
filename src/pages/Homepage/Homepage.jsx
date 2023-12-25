import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  useEffect(() => {
    fetch("https://dummyjson.com/products")
	.then(response => response.json())
	.then(json => console.log(json))
	.catch(err => console.log(err));
	awaitFetch();
    }, []);

	const awaitFetch = async () => {
		let response = await fetch ("https://dummyjson.com/products");
		let json = await response.json();
		console.log(json);
	}
  

  return (
    <div>
      Homepage
      <br />
      {/* SPA'larda href attribute'ı kullanımı yanlıştır. */}
      <a href="/products">Ürünler Sayfası</a>
      <br />
      <Link to={"/products"}>Ürünler Sayfası</Link>
    </div>
  );
}
