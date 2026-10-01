function toggleMenu() {
const nav = document.querySelector(".navbar nav");
nav.classList.toggle("active");
}

document.querySelectorAll(".navbar nav a").forEach(link => {
link.addEventListener("click", () => {
document.querySelector(".navbar nav").classList.remove("active");
});
});
/* ========================================
   HACKINTOUCH VIDEO
======================================== */

const videoScenes = document.querySelectorAll(".video-scene");
const videoProgress = document.getElementById("videoProgress");
const videoTime = document.getElementById("videoTime");

if (videoScenes.length > 0) {

    const totalDuration = 24;
    const sceneDuration = 4;

    let startTime = Date.now();

    function updateHackinTouchVideo() {

        const elapsed =
            ((Date.now() - startTime) / 1000) % totalDuration;

        const currentScene =
            Math.floor(elapsed / sceneDuration);

        videoScenes.forEach((scene, index) => {
            scene.classList.toggle(
                "active",
                index === currentScene
            );
        });

        const percentage =
            (elapsed / totalDuration) * 100;

        videoProgress.style.width =
            percentage + "%";

        const seconds = Math.floor(elapsed);

        const minutes =
            Math.floor(seconds / 60);

        const remainingSeconds =
            seconds % 60;

        videoTime.textContent =
            `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")} / 00:24`;

        requestAnimationFrame(updateHackinTouchVideo);
    }

    updateHackinTouchVideo();
}
