$(document).ready(function () {
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.header__list'),
        body = document.querySelector('body');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
        hamburger.classList.toggle('active');
        body.classList.toggle('lock');
    });



    const navLinks = document.querySelectorAll('.nav-link[data-goto]');
    if (navLinks.length > 0) {
        navLinks.forEach(menuLink => {
            menuLink.addEventListener('click', menuLinkClick)
        });

        function menuLinkClick(e) {
            const menuLink = e.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                let rect = gotoBlock.getBoundingClientRect();
                const gotoBlockValue = rect.top + scrollY - document.querySelector('header').offsetHeight;
                if (hamburger.classList.contains('active')) {
                    menu.classList.remove('active');
                    body.classList.remove('lock');
                    hamburger.classList.remove('active');
                }
                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: "smooth"
                });

                e.preventDefault();
            }
        }
    }

    $("input[name=phone").mask(" +38(099) 99-99-999");
    $('.modal__close').on('click', function() {
        $('.overlay, #thanks').fadeOut('slow');
    })
    $("form").submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input");
            $('.overlay, #thanks').fadeIn('slow');
            $("form").trigger("reset");
        });
        return false;
    });

})