import * as React from "react";

export as namespace Slider;

export = Slider;

declare namespace Slider {
    export interface ISliderItem {
        src: string;
        alt: string;
    }

    export interface Props {
        items: ISliderItem[];
        speed: number;
        delay: number;
        pause: boolean;
        autoplay: boolean;
        dots: boolean;
        arrows: boolean;
    }
}

declare class Slider extends React.Component<Slider.Props, {}> {
}
