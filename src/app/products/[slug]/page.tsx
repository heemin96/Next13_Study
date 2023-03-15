import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

function page({ params }: Props) {
  if (params.slug === "nothing") {
    notFound();
  }
  return <div>{params.slug} 제품 설명 페이지</div>;
}

export default page;

export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({ slug: product }));
}
