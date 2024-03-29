/* eslint-disable no-unused-vars */
import { PopularResponse } from "@/app/types/types";

export interface ITitleProps {
  title: string;
}
export interface IDescriptionProps {
  description: string;
}
export interface IPricingProps {
  prise: number;
}
export type TSlierItemsProps = {
  slides: PopularResponse[0];
  current: number;
  setCurrent: (i: number) => void;
  setIsTouched: (value: boolean) => void;
};

export type IButtonsNavigate = {
  current: number;
  setCurrent: (i: number) => void;
  setIsTouched: (value: boolean) => void;
};

export interface IChangeCurrentSlide {
  (
    i: number,
    setCurrent: (i: number) => void,
    setIsTouched: (value: boolean) => void,
  ): void;
}

export interface ISliderNavigation {
  current: number;
  setCurrent: (i: number) => void;
  setIsTouched: (value: boolean) => void;
}