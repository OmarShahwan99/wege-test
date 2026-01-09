"use client";
import { useHydrated } from "@/hooks/use-hydrate";
import { useCartStore } from "@/store/cart-store";
import { Button } from "../ui/button";
import { ProductModel } from "@/types/product";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { MouseEvent } from "react";

const AddToCart = ({ id, title, price, thumbnail }: ProductModel) => {
  const hydrated = useHydrated();
  const { items, addItem, increase, decrease } = useCartStore();

  if (!hydrated) return null;

  const cartItem = items.find((i) => i.id === id);

  const handleAddToCart = (e: MouseEvent) => {
    e.stopPropagation();
    addItem({ id, title, price, thumbnail });
  };

  const handleIncrease = (e: MouseEvent) => {
    e.stopPropagation();
    increase(id);
  };
  const handleDecrease = (e: MouseEvent) => {
    e.stopPropagation();
    decrease(id);
  };
  return (
    <>
      {!cartItem ? (
        <Button size="icon" onClick={handleAddToCart}>
          <ShoppingCart />
        </Button>
      ) : (
        <div className="flex items-center gap-2">
          <Button size="icon" variant="outline" onClick={handleDecrease}>
            <Minus size={16} />
          </Button>

          <span className="min-w-6 text-center font-semibold">
            {cartItem.quantity}
          </span>

          <Button size="icon" variant="outline" onClick={handleIncrease}>
            <Plus size={16} />
          </Button>
        </div>
      )}
    </>
  );
};

export default AddToCart;
