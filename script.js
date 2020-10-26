const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select a media strea, pass to video element, play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // catch errors here
    }
}

button.addEventListener('click', async() => {
    // Disable button
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
});

// On Load
selectMediaStream();