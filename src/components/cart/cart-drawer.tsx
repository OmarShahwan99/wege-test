"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { Minus, Plus, ShoppingCart, Trash, X } from "lucide-react";
import { Separator } from "../ui/separator";
// import CartCounter from "./cart-counter";
// import DeleteFromCart from "./delete-from-cart";
import { cn } from "@/lib/utils";
import AppEmpty from "../ui/app-empty";
import Image from "next/image";
import { useCartStore } from "@/store/cart-store";

const CartDrawer = () => {
  const { items, removeItem, increase, decrease } = useCartStore();
  const count = items.length;

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleDelete = (id: number) => {
    removeItem(id);
  };

  const handleIncrease = (id: number) => {
    increase(id);
  };
  const handleDecrease = (id: number) => {
    decrease(id);
  };

  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <Button size="sm" variant="ghost" className="relative ">
          {count > 0 && (
            <span
              className={cn(
                "absolute top-0 w-4 h-4 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs left-0"
              )}
            >
              {count}
            </span>
          )}
          <ShoppingCart className="size-5" />
          <span className="hidden md:block">Cart</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-white max-w-md!">
        <DrawerHeader>
          <div className="flex justify-between">
            <div className="flex gap-2 text-primary">
              <ShoppingCart className="fill-primary" />
              <span className="text-xl">{count} Items</span>
            </div>
            <DrawerClose>
              <Button size="icon" variant="ghost">
                <X />
              </Button>
            </DrawerClose>
          </div>
        </DrawerHeader>
        <Separator />
        {count === 0 && (
          <AppEmpty
            title="No Cart Items Yet"
            description="Start Shopping to add new items to your cart!"
          />
        )}
        <div className="overflow-auto">
          {items.map((item) => {
            const productTotal = item.price * item.quantity;
            return (
              <div
                key={item.id}
                className="p-5 border-b flex justify-between items-center"
              >
                <div className="flex items-center gap-2">
                  <div className="flex flex-col w-9.5 gap-0.5 items-center rounded-full bg-[#f5f5f5]  overflow-hidden">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => handleIncrease(item.id)}
                    >
                      <Plus />
                    </Button>

                    <span className="text-sm">{item.quantity}</span>

                    <Button
                      size="icon"
                      variant="ghost"
                      disabled={item.quantity <= 1}
                      onClick={() => handleDecrease(item.id)}
                    >
                      <Minus />
                    </Button>
                  </div>
                  <Image
                    width={70}
                    height={70}
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <div className="space-y-1">
                    <h2 className="font-semibold">{item.title}</h2>

                    <div>
                      <span className="text-primary font-bold">
                        {item.price.toLocaleString("en-US")}${" "}
                      </span>
                      <span className="text-primary font-bold">
                        × {item.quantity}{" "}
                      </span>
                      <h3 className="inline text-primary font-bold">
                        = {productTotal.toLocaleString("en-US")} $
                      </h3>
                    </div>
                  </div>
                </div>
                <Button
                  variant="link"
                  size="icon"
                  className="text-red-500"
                  onClick={() => handleDelete(item.id)}
                >
                  <Trash />
                </Button>
              </div>
            );
          })}
        </div>
        {count > 0 && (
          <DrawerFooter>
            <DrawerClose className="w-full">
              <Button className="w-full">
                Checkout ({totalPrice.toLocaleString("en-US")} $)
              </Button>
            </DrawerClose>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
