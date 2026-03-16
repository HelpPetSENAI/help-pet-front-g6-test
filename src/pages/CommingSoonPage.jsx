import Fragment from "../components/Fragment"

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

            <svg width="0" height="0" style={{ position: 'absolute', left: 0, top: 0, overflow: 'hidden' }} aria-hidden="true">
                <symbol id="light-brick" viewBox="0 0 130 65" preserveAspectRatio="none">
                    <path d="M127.012 3.5V61.4033H3.5V3.5H127.012Z" fill="#39C442" stroke="black" strokeWidth="7" strokeMiterlimit="10" />
                </symbol>

                <symbol id="dark-brick" viewBox="0 0 130 65" preserveAspectRatio="none">
                    <path d="M127.012 3.5V61.4033H3.5V3.5H127.012Z" fill="#257E2B" stroke="black" strokeWidth="7" strokeMiterlimit="10" />
                </symbol>
            </svg>

            <svg className="brick-wall" viewBox="0 0 910 130">
                <use href="#light-brick" x="0" y="90" width="130" height="60" />
                <use href="#light-brick" x="130" y="90" width="130" height="60" />
                <use href="#dark-brick" x="260" y="90" width="130" height="60" />
                <use href="#light-brick" x="390" y="90" width="130" height="60" />
                <use href="#light-brick" x="520" y="90" width="130" height="60" />
                <use href="#dark-brick" x="650" y="90" width="130" height="60" />
                <use href="#dark-brick" x="780" y="90" width="130" height="60" />
            </svg>

        </Fragment>
    )
}