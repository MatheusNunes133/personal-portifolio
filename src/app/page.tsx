import CardItem from "@/components/cardItem";
import Header from "@/components/header/";
import style from "./page.module.scss";
import Image from "next/image";

export default function App() {
  return (
    <>
      <Header />
      <section className={style.secondSectionContainer}>
        <section className={style.secondSection}>
          <div className={style.cardItensContainer}>
            <CardItem
              image="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
              description="Imagem Js"
              title="API Rest"
              subTitle="Desenvolvimento de APIs"
              width={60}
              height={60}
            />
            <CardItem
              image="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
              description="Imagem Js"
              title="API Rest"
              subTitle="Desenvolvimento de APIs"
              width={60}
              height={60}
            />
            <CardItem
              image="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
              description="Imagem Js"
              title="API Rest"
              subTitle="Desenvolvimento de APIs"
              width={60}
              height={60}
            />
            <CardItem
              image="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
              description="Imagem Js"
              title="API Rest"
              subTitle="Desenvolvimento de APIs"
              width={60}
              height={60}
            />
          </div>
        </section>

        <div className={style.wantToContainer}>
          <div className={style.wantTo}>
            <div className={style.firstCircle}>
              <div className={style.wantToArrow}>
                <Image
                  src="/assets/arrow-down.png"
                  alt="Seta para baixo"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <h2>Vamos trabalhar juntos e criar produtos incríveis?</h2>
            <button>Converse Comigo</button>
          </div>
        </div>
      </section>
    </>
  );
}
