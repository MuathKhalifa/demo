"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatCurrency } from "@/lib/formatter";
import React, { useState } from "react";
import { addProduct } from "../../_actions/products";
import { useFormState, useFormStatus } from "react-dom";

function ProductForm() {
  const [error, action] = useFormState(addProduct, {});
  const [priceInCents, setPriceInCents] = useState<number>();
  return (
    <>
      <form action={action} className="space-y-8">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" required />
        </div>
        {error.name && <div className="text-destructive">{error.name}</div>}
        <div className="space-y-2">
          <Label htmlFor="name">Price In Cents</Label>
          <Input
            type="number"
            id="priceInCents"
            name="priceInCents"
            required
            value={priceInCents}
            onChange={(e) =>
              setPriceInCents(Number(e.target.value) || undefined)
            }
          />
          <div className="text-muted-foreground">
            {formatCurrency((priceInCents || 0) / 100)}
          </div>
          {error.priceInCents && (
            <div className="text-destructive">{error.priceInCents}</div>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Input type="text" id="description" name="description" required />
        </div>
        {error.description && (
          <div className="text-destructive">{error.description}</div>
        )}

        <div className="space-y-2">
          <Label htmlFor="file">File</Label>
          <Input type="file" id="file" name="file" required />
        </div>
        {error.file && <div className="text-destructive">{error.file}</div>}

        <div className="space-y-2">
          <Label htmlFor="image">Image</Label>
          <Input type="file" id="image" name="image" required />
        </div>
        {error.image && <div className="text-destructive">{error.image}</div>}

        <SubmitButton />
      </form>
    </>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      {pending ? "Saving..." : "Save"}
    </Button>
  );
}

export default ProductForm;
