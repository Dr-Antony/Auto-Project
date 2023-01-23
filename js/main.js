

const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
    initRatings();
}

//Основная функция

function initRatings() {
    let ratingActive, ratingValue;
    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating);
    }
    //Инициализируем конкретный рейтинг
    function initRating(rating) {
        initRatingVars(rating);

        setRatingActiveWidth();

        if (rating.classList.contains('rating_set')) {
            setRating(rating);
        }

    }

    // Инициализация переменных
    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value');
    }
    //Изменяем ширину активных звезд 
    function setRatingActiveWidth(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }
    //Возможность указать оценку
    function setRating(rating) {
        const ratingItems = rating.querySelectorAll('.rating__item');
        for (let index = 0; index < ratingItems.length; index++) {
            const ratingItem = ratingItems[index];
            ratingItem.addEventListener("mousenter", function (e) {
                //обновление переменных
                initRatingVars(rating);
                //обновление активных звезд
                setRatingActiveWidth(ratingItem.value);
            });
            ratingItem.addEventListener("mouseleave", function (e) {
                //Обновление активных звёзд
                setRatingActiveWidth();
            });
            ratingItem.addEventListener("click", function (e) {
                //обновление переменных
                initRatingVars(rating);
                if (rating.dataset.ajax) {
                    //отправить на сервер
                    setRatingValue(ratingItem.value, rating);
                } else {
                    //отобразить указанную оценку
                    ratingValue.innerHtml = index + 1;
                    setRatingActiveWidth();
                }
            });
        }
    }
}
//////////////MIXITUP//////////////////////
$(function () {

    var mixer = mixitup('.blog__list');

    $('.blog__filter-btn').on('click', function () {
        $('.blog__filter-btn').removeClass('blog__filter-btn--active')
        $(this).addClass('blog__filter-btn--active')
    });

})


// $('.testimonials__slider').slick({
//     arrows: false,
//     dots: true,
//     appendDots: $('.testimonials__dots'),
//     waitForAnimate: false,
//     // responsive:
//     //   [
//     //     {
//     //       breakpoint: 700,
//     //       settings: {

//     //       },
//     //     },
//     //   ]
// })
// $('.testimonials__prev').on('click', function (e) {
//     e.preventDefault()
//     $('.testimonials__slider').slick('slickPrev')
// })
// $('.testimonials__next').on('click', function (e) {
//     e.preventDefault()
//     $('.testimonials__slider').slick('slickNext')
// })

$('.questions__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('questions__acc-link--active')) {
        $(this).removeClass('questions__acc-link--active')
        $(this).children('.questions__acc-text').slideUp()
    } else {
        $('.questions__acc-link').removeClass('questions__acc-link--active')
        $('.questions__acc-text').slideUp()
        $(this).addClass('questions__acc-link--active')
        $(this).children('.questions__acc-text').slideDown()
    }
})
