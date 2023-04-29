import {Fragment} from "react";
import {Slide} from "./Slide";
import {Slide1} from "./Slide1";

export function Main() {
    return (
        <Fragment>
            <Slide1/>
            <Slide title={"Как носить?"}
                   text={"Все просто! " +
                "Собирай одежду как конструктор и создавай " +
                "интересные образы на каждый день"}
                   backgroundColor={"black"} color={"white"}
                   img1={"logo.png"} img2={"logo.png"} img3={"logo.png"} img4={"logo.png"}/>
            <Slide
                title={"Как купить?"}
                text={`В магазине одежда представлена по модулям. 
            Ты можешь отправить понравившиеся вещи в "примерочную". В примерочной можно посмотерть,
            как вещи смотрятся вместе. Если понравился модуль - добавляй в корзину!`}
                backgroundColor={"white"} color={"black"}
                img1={"logo.png"} img2={"logo.png"} img3={"logo.png"} img4={"logo.png"}/>
        </Fragment>
    )
}