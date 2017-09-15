import * as React from "react";
import Modal from "react-modal";
import * as Vendors from "../../../vendors";
import "./Home.scss";

interface IHomeProps { };

interface IHomeState {
    IMAGE_DATA: Vendors.Slider.ISliderItem[];
};

class Home extends React.Component<IHomeProps, IHomeState> {
    constructor() {
        super();
    }

    public componentWillMount(): void {
        const imageData: Vendors.Slider.ISliderItem[] = [];
        imageData.push({
            alt: "image1",
            src: `http://i3.lifevccdn.com/upload/indexbanner/banner-3894720c-a652-4e8d-8f32-ef13c512eea3.jpg`,
        });
        imageData.push({
            alt: "image2",
            src: `http://i4.lifevccdn.com/upload/indexbanner/banner-17a66bd6-24d5-4fd8-a033-91d4538a832b.jpg`,
        });
        imageData.push({
            alt: "image2",
            src: `http://i4.lifevccdn.com/upload/indexbanner/banner-beb4e125-a527-47c6-b5a9-4d5c3fc95b5d.jpg`,
        });

        this.setState({
            IMAGE_DATA: imageData,
        });
    }

    public render(): JSX.Element {
        return (
            <div>
                <div className="sliderContainer">
                    <Vendors.Slider
                        items={this.state.IMAGE_DATA}
                        speed={1.2}
                        delay={5}
                        pause={true}
                        autoplay={true}
                        dots={true}
                        arrows={true} />
                </div>
            </div>
        );
    }
}

export default Home;
