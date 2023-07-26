function showNavbarItems() {

    const icon = document.querySelector( 'i' );

    if ( icon.classList.contains( 'fa-ellipsis' ) ) {
        icon.classList.remove( 'fa-ellipsis' );
        icon.classList.add( 'fa-ellipsis-vertical' );
    } else if ( icon.classList.contains( 'fa-ellipsis-vertical' ) ) {
        icon.classList.remove( 'fa-ellipsis-vertical' );
        icon.classList.add( 'fa-ellipsis' );
    };

    const nav = document.querySelector( '.navbar-items' );

    if ( nav.classList.contains( 'show' ) ) {
        nav.classList.remove( 'show' );
    } else {
        nav.classList.add( 'show' );
    };
};

const navDropdown = document.querySelector( '.btn-dropdown' );
navDropdown.addEventListener( 'click', showNavbarItems )