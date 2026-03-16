import Fragment from "../components/Fragment"
import brickWall from "../assets/images/brick-wall.png"

export default function ComingSoonPage() {
    return (
        <Fragment>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 832" preserveAspectRatio="none" id="background">
                <g filter="url(#filter0_n_706_1382)">
                    <rect width="100%" height="100%" fill="#C0F6C4" />
                </g>
                <defs>
                    <filter id="filter0_n_706_1382" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feTurbulence type="fractalNoise" baseFrequency="0.16949152946472168 0.16949152946472168" stitchTiles="stitch" numOctaves="3" result="noise" seed="914" />
                        <feComponentTransfer in="noise" result="coloredNoise1">
                            <feFuncR type="linear" slope="2" intercept="-0.5" />
                            <feFuncG type="linear" slope="2" intercept="-0.5" />
                            <feFuncB type="linear" slope="2" intercept="-0.5" />
                            <feFuncA type="discrete" tableValues="0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " />
                        </feComponentTransfer>
                        <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
                        <feComponentTransfer in="noise1Clipped" result="color1">
                            <feFuncA type="table" tableValues="0 0.2" />
                        </feComponentTransfer>
                        <feMerge result="effect1_noise_706_1382">
                            <feMergeNode in="shape" />
                            <feMergeNode in="color1" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>
            <div className="tittle">
                <h1>Comming Soon</h1>
            </div>

            <img src={brickWall} alt="" className="brick-wall" />
            <svg width="26" height="597" viewBox="0 0 26 597" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 2.5H18.5V594.5H7.5V2.5Z" fill="#1A5B1F" />
                <path d="M23.5 2.5V594.5H18.5V2.5H23.5ZM7.5 2.5V594.5H2.5V2.5H7.5Z" fill="#1A5B1F" />
                <path d="M7.5 2.5H18.5M7.5 2.5V594.5M7.5 2.5H2.5V594.5H7.5M18.5 2.5V594.5M18.5 2.5H23.5V594.5H18.5M18.5 594.5H7.5M4.97841 559.484L19.9784 570.484M4.97841 529.484L19.9784 540.484M4.97841 499.484L19.9784 510.484M4.97841 469.484L19.9784 480.484M4.97841 291.484L19.9784 302.484M5.97841 113.484L20.9784 124.484M4.97841 441.484L19.9784 452.484M4.97841 263.484L19.9784 274.484M5.97841 85.484L20.9784 96.484M4.97841 411.484L19.9784 422.484M4.97841 233.484L19.9784 244.484M5.97841 55.484L20.9784 66.484M4.97841 381.484L19.9784 392.484M4.97841 203.484L19.9784 214.484M5.97841 25.484L20.9784 36.484M4.97841 351.484L19.9784 362.484M4.97841 173.484L19.9784 184.484M4.97841 321.484L19.9784 332.484M4.97841 143.484L19.9784 154.484" stroke="black" stroke-width="5" />
            </svg>


        </Fragment>
    )
}