import Link from "next/link";
import CartDrawer from "../cart/cart-drawer";

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className=" shadow bg-white">
        <div className="px-5 container mx-auto py-3 flex items-center justify-between">
          <Link href="/">
            <h2 className="text-primary font-semibold text-xl">Wege Test</h2>
          </Link>
          <CartDrawer />
        </div>
      </div>
    </header>
  );
};

export default Header;
