import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://prod.wepiggy.fortop.site/2021-12-31-fRq0UGtsrAvgEpqRR6y5kHigh.png" },
    { url: "https://prod.wepiggy.fortop.site/2021-12-30-fJYtmCu8I18qaByEuL6zciswy.png" },
    { url: "https://prod.wepiggy.fortop.site/2021-12-21-nQ7hOkynbdoxRGJkjSUDylcG1.png" },
    { url: "https://prod.wepiggy.fortop.site/2021-12-30-f3vTR3m1MB3DPIWNnsTKYEBZF.png" },
    { url: "images/5.jpg" },
    { url: "images/6.jpg" },
    { url: "images/7.jpg" },
];

const PictureSlider = () => {
    return (
        <div>
            <SimpleImageSlider
                width={1920}
                height={360}
                images={images}
                showBullets={true}
                showNavs={true}
            />
        </div>
    );
}

export default PictureSlider
