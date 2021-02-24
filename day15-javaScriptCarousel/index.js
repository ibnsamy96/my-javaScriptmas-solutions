// javascript


const nextBtn = document.querySelector('.next')
const previousBtn = document.querySelector('.previous')

toggleEventListener(true)

const gallery = document.querySelector('.gallery')
const galleryImgsNumber = document.querySelectorAll('.gallery img').length

function computeTransformationValue() {
    const transformationAttribute = getComputedStyle(gallery).transform.split(',');
    return parseInt(transformationAttribute[transformationAttribute.length - 2])
}

function toggleEventListener(boolean) {
    if (boolean) {
        nextBtn.addEventListener('click', changeSlide)
        previousBtn.addEventListener('click', changeSlide)
    } else {
        nextBtn.removeEventListener('click', changeSlide)
        previousBtn.removeEventListener('click', changeSlide)
    }
}

function changeSlide() {

    toggleEventListener(false)

    let transformationValue = computeTransformationValue()

    if (this.classList[0] === 'next' && transformationValue > -220 * (galleryImgsNumber - 1)) {
        gallery.style.transform = `translateX(${transformationValue-220}px)`
        transformationValue = transformationValue - 220
    } else if (this.classList[0] === 'previous' && transformationValue < 0) {
        gallery.style.transform = `translateX(${transformationValue+220}px)`
        transformationValue = transformationValue + 220
    }

    if (transformationValue >= 0) {
        previousBtn.classList.add('disabledBTN')
    } else if (transformationValue <= -220 * (galleryImgsNumber - 1)) {
        nextBtn.classList.add('disabledBTN')
    } else {
        previousBtn.classList.remove('disabledBTN')
        nextBtn.classList.remove('disabledBTN')
    }

    setTimeout(() => {
        // to give the transition its time
        toggleEventListener(true)
    }, 500);

}