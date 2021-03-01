// Задание функции
$(function () {
  //   задание переменной header c id header
  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.innerHeight();
  //   задание переменной introH значение height(высота) переменной intro
  //   позиция скролла
  let scrollPos = $(window).scrollTop();
  let nav = $("#nav");
  let navToggle = $("#navToggle");

  checkScroll(scrollPos, introH);

  $(window).on("scroll resize", function () {
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();
    checkScroll(scrollPos, introH);
  });

  function checkScroll(scrollPos, introH) {
    if (scrollPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }
  //   Добавление класса fixed  переменной header:  header.addClass("fixed");

  // в квадртных скобках прописывается атрибут
  $("[data-scroll]").on("click", function (event) {
    // отменяет стандратное поведение ссылки, т.к. нам нужны прикликании на ссылку, что бы скролила на необходимый блок
    event.preventDefault();
    let blockID = $(this).data("scroll");

    // отступ данного блока(эл-та) blockID от вверха
    let elementOffset = $(blockID).offset().top;

    $("html, block").animate(
      {
        scrollTop: elementOffset - 70,
      },
      700
    );
  });

  // селектор по id

  navToggle.on("click", function (event) {
    event.preventDefault();

    //  для удаление класс, в нашем случае это show
    nav.toggleClass("show");
  });

  //  слайдер
  let slider = $("#reviewsSlider");
  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
    dots: true,
  });
});
