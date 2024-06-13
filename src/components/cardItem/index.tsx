import { Fragment } from "react";
import style from "./index.module.scss";
import Image from "next/image";

interface IProps {
  image: string;
  description: string;
  title: string;
  subTitle: string;
  width: number;
  height: number;
}

export default function CardItem({
  image,
  description,
  title,
  subTitle,
  width,
  height,
}: IProps) {
  return (
    <div className={style.cardContainer}>
      <Image src={image} alt={description} width={width} height={height} />
      <div className={style.cardInfo}>
        <p className={style.title}>{title}</p>
        <p>{subTitle}</p>
      </div>
    </div>
  );
}
