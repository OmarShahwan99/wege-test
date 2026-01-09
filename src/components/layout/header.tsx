import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header>
      <div className=" shadow bg-white">
        <div className="container mx-auto py-3 flex items-center justify-between">
          <Link href="/">
            <h2 className="text-primary font-semibold text-xl">Wege Test</h2>
          </Link>
          <Button variant="ghost">
            <ShoppingCart />
            Your Cart
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
