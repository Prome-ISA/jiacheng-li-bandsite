
header.header (border-top green)

    div.header__container  (flex, bg-color mustard, align-items: center, padding)
        img .header__image
        h1  .header__title

    nav.top-nav
        ul.top-nav__list  (list-style: none, flex, justify-content: space-between, bg-color)
            li.top-nav__item * 5 
                a.top-nav__link (color: white, text-decoration: none)


section.hero  (bg-image: burritos, flex justify-content: center, align-items:center)
    h2.hero__slogan (border solid green, bg-color: white, font-weight:bold, padding: 0.5rem)



div (flex, column tablet=row)
    section.ingredients (width: 100% / tablet=75%, flex, flex-wrap)
        article.ingredient--highlighted (bg-color: green, color: white)
        
        article.ingredient (bg-color white, padding: 1rem, width: 50%, max-width: 25rem)
            img.ingredient__image (width: 100%)
            h3.ingredient__name
            p.ingredient__description
        



    aside.comments