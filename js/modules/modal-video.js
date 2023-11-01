export default function initModalVideo() {
    const modalVideo = document.querySelector('.modal-video')
    const btnClose = document.querySelector('.btn-close')
    const inicio = document.querySelector('.inicio')
    const video = document.querySelector('.modal-video iframe')
    // const btnVideo = document.querySelector('.video-btn')

    // function openVideo() {
    //     modalVideo.classList.remove('off')
    //     inicio.classList.remove('play')
    // }

    function closeVideo() {
        modalVideo.classList.add('off')
        video.classList.add('off')
        inicio.classList.add('play')
    }

    btnClose.addEventListener('click', closeVideo)
    // btnVideo.addEventListener('click', openVideo)
}