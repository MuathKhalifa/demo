import ProductCard, { ProductCardSkeleton } from "@/components/ProductCard";
import { Suspense } from "react";
import { ProductSuspense } from "../page";
import db from "@/db/db";

function getProducts() {
  return db.product.findMany({
    where: {
      isAvailableForPurchase: true,
    },
    orderBy: {
      name: "asc",
    },
  });
}

export default function productPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Suspense
        fallback={
          <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </>
        }
      >
        <ProductsSuspence />
      </Suspense>
    </div>
  );
}

async function ProductsSuspence() {
  const products = await getProducts();

  return products.map((product) => (
    <ProductCard key={product.id} {...product} />
  ));
}
