//show sub menu items listeners
var subMenuItems = document.querySelectorAll('.nav__side-menu-nav .parent');
if (subMenuItems) {
    for (var i = 0; i < subMenuItems.length; i++) {
        subMenuItems[i].addEventListener('click', function () {
            this.nextSibling.nextSibling.classList.add('active');
        }, false);
    }
}

//close sub menu listeners
var subMenuControls = document.querySelectorAll('.nav__side-sub-menu-control');
if (subMenuControls) {
    for (var i = 0; i < subMenuControls.length; i++) {
        subMenuControls[i].addEventListener('click', function () {
            this.parentNode.parentNode.classList.remove('active');
        }, false);
    }
}

//show main menu listener
function menuHandlerControl(context) {
    var nextElement = context.nextSibling.nextSibling;
    context.classList.remove('active');
    if (!nextElement) {
        document.body.classList.remove('opened');
        context.previousSibling.previousSibling.classList.add('active');
        return true;
    }
    nextElement.classList.add('active');
    document.body.classList.add('opened');
}

//search process
function makeSearch() {
    document.querySelector('.nav__menu-btn .active').click();
    document.querySelector('.search-form__input').focus();
}