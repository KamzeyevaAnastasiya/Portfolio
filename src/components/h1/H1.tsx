
export const MainTitle = () => {
    return (
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <defs>
                <path id="textPath" d="M -30 -10 q 300 300 600 50" />
            </defs>
            <text font-family="Epilogue, sans-serif" font-size="50px" font-weight="500" color="#2D2C2C">
                <textPath href="#textPath" startOffset="120">
                Front-end Developer
                </textPath>
            </text>
        </svg>
    );
};