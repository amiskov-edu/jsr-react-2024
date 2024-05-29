const page = document.documentElement;
const resizeDelay = 300;
let resizeTimeoutId = null;
let animationFrameTicking = false;

export function useScrollProgress(setProgress) {
    handleProgress();

    function handleProgress() {
        const scrolled = page.clientHeight + window.scrollY;
        const status = scrolled / page.scrollHeight;
        setProgress(Math.round(status * 100, 2));
    }

    document.addEventListener("scroll", (event) => {
        if (!animationFrameTicking) {
            window.requestAnimationFrame(() => {
                handleProgress();
                animationFrameTicking = false;
            });
            animationFrameTicking = true;
        }
    });

    window.addEventListener("resize", (event) => {
        clearTimeout(resizeTimeoutId);
        resizeTimeoutId = setTimeout(() => {
            handleProgress(window.scrollY);
        }, resizeDelay);
    });
}
