import Link from "next/link";
import React from "react";

const product = ["shirt", "pants", "skirt", "shoes"];

function page() {
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {product.map((product, index) => (
          <li key={index}>
            <Link href={`products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default page;
