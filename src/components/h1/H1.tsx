
export const MainTitle = () => {
    return (
            <svg width="100%" height="25%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <path id="textPath" d="M 80 45 q 150 150 300 0" />
            </defs>
            <text font-family="Epilogue, sans-serif" font-size="30px" font-weight="bold">
                <textPath href="#textPath" startOffset="20">
                Front-end Developer
                </textPath>
            </text>
        </svg>
    );
};