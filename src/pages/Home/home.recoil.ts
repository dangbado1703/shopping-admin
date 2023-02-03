import { atomFamily, selector, selectorFamily } from "recoil";
import { productRecoil } from "../Products/products.recoil";

export const homeIniState = atomFamily({
  key: "homeRecoil",
  default: selectorFamily({
    key: "homeRecoil/default",
    get:
      (params) =>
      ({ get }) => {
        const data = get(productRecoil);
        if (params && typeof params === "number") {
          return params + data;
        }
        return null;
      },
  }),
});

// export const homeSelector = selector({
//   key: "homeSelector",
//   get: ({ get }) => {
//     const data = get(homeIniState);
//     return { id: 3 };
//   },
// });
