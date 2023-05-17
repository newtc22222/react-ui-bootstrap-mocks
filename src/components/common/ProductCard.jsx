import React from "react";
import { Card } from "react-bootstrap";

const ProductCard = ({ product, ...rest }) => {
  if (!product) {
    return <></>;
  }

  return (
    <Card>
      <Card.Img src={product.image} />
    </Card>
  );
};

export default ProductCard;
