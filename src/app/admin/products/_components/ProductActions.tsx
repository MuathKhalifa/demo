"use client";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import React, { useTransition } from "react";
import {
  deleteProduct,
  toggleProductAvailabilty,
} from "../../_actions/products";
import { useRouter } from "next/navigation";

export function ActiveToggleDropdownItem({
  id,
  isAvailableforPurchase,
}: {
  id: string;
  isAvailableforPurchase: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <DropdownMenuItem
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await toggleProductAvailabilty(id, !isAvailableforPurchase);
          router.refresh();
        });
      }}
    >
      {isAvailableforPurchase ? "Deactivate" : "Activate"}
    </DropdownMenuItem>
  );
}

//if the product has more than one order, than the delete button is always disabled
export function DeleteDropdownItem({
  id,
  disabled,
}: {
  id: string;
  disabled: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <DropdownMenuItem
      variant="destructive"
      disabled={disabled || isPending}
      onClick={() => {
        startTransition(async () => {
          await deleteProduct(id);
          router.refresh();
        });
      }}
    >
      Delete
    </DropdownMenuItem>
  );
}
