import db from "@/db/db";
import { notFound } from "next/navigation";
import React from "react";
import Stripe from "stripe";

async function PurchasePage({ params: { id } }: { params: { id: string } }) {
  const product = await db.product.findUnique({
    where: {
      id,
    },
  });

  if (product == null) return notFound();
  return <div>Hi</div>;
}

export default PurchasePage;
