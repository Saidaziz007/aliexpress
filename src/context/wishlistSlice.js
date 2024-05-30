import { create } from "zustand";

export const wishlistSlice = create((set) => ({
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],

  toggleToWishes: (el) =>
    set((state) => {
      let updatedWishlist;
      const itemIndex = state.wishlist.findIndex((item) => item.id === el.id);

      if (itemIndex < 0) {
        updatedWishlist = [...state.wishlist, el];
      } else {
        updatedWishlist = state.wishlist.filter((item) => item.id !== el.id);
      }

      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

      return { wishlist: updatedWishlist };
    }),
}));
