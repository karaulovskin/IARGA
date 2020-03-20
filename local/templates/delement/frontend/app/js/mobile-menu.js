export default class MobileMenu {
    menu = '[data-mobile-menu]';
    menuList = '[data-mobile-menu-list]';
    subMenuButton = '[data-sub-mobile-menu-button]';
    buttonClose = '[data-mobile-menu-close]';
    buttonBack = '[data-mobile-menu-back]';

    constructor() {
        this.events();
    }

    openMenu() {
        if (!$(this.menu).hasClass('is-active')) {
            $(this.menu).addClass('is-active');
        }
    }

    closeMenu() {
        let self = this;
        if ($(this.menu).hasClass('is-active')) {
            $(this.menu).removeClass('is-active');
            setTimeout(function() {
                self.closeCatalog();
            }, 800);
        }
    }

    openCatalog($this) {
        let self = this;
        let $item = $this.closest($('.mobile-menu__item'));
        if(!$(this.menuList).hasClass('is-hide')) {
            $(this.menuList).addClass('is-hide');
            $item.addClass('is-active');
            setTimeout(function() {
                $(self.buttonBack).addClass('is-active');
            }, 400);
        }
    }

    closeCatalog() {
        if($(this.menuList).hasClass('is-hide')) {
            $('.mobile-menu__item').removeClass('is-active');
            $(this.menuList).removeClass('is-hide');
            $(this.buttonBack).removeClass('is-active');
        }
    }

    events() {
        let self = this;

        $(document).on('click', '.burger', function() {
            self.openMenu();
        });
        $(document).on('click', this.buttonClose, function() {
            self.closeMenu();
        });
        $(document).on('click', this.subMenuButton, function() {
            self.openCatalog($(this));
        });
        $(document).on('click', this.buttonBack, function() {
            self.closeCatalog();
        });
    }
}