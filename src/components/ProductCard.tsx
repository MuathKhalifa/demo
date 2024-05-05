import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { formatCurrency } from "@/lib/formatter";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

type ProductCardProp = {
  name: string;
  priceInCents: number;
  description: string;
  id: string;
  imagePath: string;
};
function ProductCard({
  name,
  priceInCents,
  description,
  id,
  imagePath,
}: ProductCardProp) {
  return (
    <Card className="flex overflow-hidden flex-col">
      <div className="relative w-full h-auto aspect-video">
        <Image src={imagePath} fill alt={name} />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardTitle>{formatCurrency(priceInCents / 100)}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="line-clamp-4">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild size="lg" className="w-full">
          <Link href={`/products/${id}/purchase`}>Purchase</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function ProductCardSkeleton() {
  return (
    <Card className="flex overflow-hidden flex-col animate-pulse">
      <div className="relative w-full h-auto aspect-video" />
      <CardHeader>
        <CardTitle>
          <div className="w-3/4 h-6 rounded-full bg-gray-300" />
        </CardTitle>
        <CardDescription>
          <div className="w-1/2 h-4 rounded-full bg-gray-300" />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="w-full h-4 rounded-full bg-gray-300 my-1" />
        <div className="w-full h-4 rounded-full bg-gray-300 my-1" />
        <div className="w-full h-4 rounded-full bg-gray-300 my-1" />
      </CardContent>
      <CardFooter>
        <Button asChild size="lg" className="w-full"></Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
