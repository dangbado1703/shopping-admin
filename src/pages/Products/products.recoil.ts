import { atom, atomFamily, selectorFamily } from "recoil";

export const productRecoil = atom({
  key: "productRecoil",
  default: 2000,
});
