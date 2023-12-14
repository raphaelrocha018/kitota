export default function initModalVideo() {
    const modalVideo = document.querySelector('.modal-video')
    const btnClose = document.querySelector('.btn-close')
    const inicio = document.querySelector('.inicio')
    const video = document.querySelector('.modal-video iframe')
    // const btnVideo = document.querySelector('.video-btn')
    const html = document.documentElement
    const body = document.querySelector('body')
    // const mobile = window.matchMedia("(max-width: 720px)").matches

    // function openVideo() {
    //     modalVideo.classList.remove('off')
    //     inicio.classList.remove('play')
    // }

    function closeVideo() {
        html.classList.remove('stop-scrolling-html')
        body.classList.remove('stop-scrolling-body')
        body.classList.remove('compensate-scrollbar')

        modalVideo.classList.add('off')
        video.classList.add('off')
        inicio.classList.add('play')
    }

    btnClose.addEventListener('click', closeVideo)
    // btnVideo.addEventListener('click', openVideo)
}