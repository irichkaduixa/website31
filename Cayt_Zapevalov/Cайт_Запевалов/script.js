document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const navigation = document.querySelector(".navigation")

  mobileMenuToggle.addEventListener("click", function () {
    this.classList.toggle("active")
    navigation.classList.toggle("active")
  })

  // Shrink header on scroll
  const header = document.querySelector(".header")
  let lastScrollTop = 0

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (scrollTop > lastScrollTop) {
      header.style.height = "50px"
    } else {
      header.style.height = "60px"
    }
    lastScrollTop = scrollTop
  })

  // Featured properties data
  const properties = [
    {
      image:
        "https://stroy-podskazka.ru/images/article/croppedtop/718-400/2019/11/dizajn-3-komnatnoj-kvartiry-v-panelnom-dome-1.jpg",
      title: "3-комнатная квартира в центре",
      price: "4 500 000 руб.",
      description: "Просторная квартира с отличным расположением",
    },
    {
      image:
        "https://stroy-podskazka.ru/images/article/croppedtop/718-400/2020/05/vse-o-kottedzhah-v-stile-haj-tek.jpg",
      title: "Современный коттедж",
      price: "8 000 000 руб.",
      description: "Стильный загородный дом со всеми удобствами",
    },
    {
      image:
        "https://stroy-podskazka.ru/images/article/croppedtop/718-400/2017/12/dizajn-dvuhkomnatnoj-kvartiry-ploshchadyu-70-kv-m-16.jpg",
      title: "2-комнатная квартира в спальном районе",
      price: "3 200 000 руб.",
      description: "Уютная квартира в тихом районе города",
    },
  ]

  // Dynamically create property cards
  const propertyCardsContainer = document.querySelector(".property-cards")

  if (propertyCardsContainer) {
    properties.forEach((property, index) => {
      const propertyCard = document.createElement("div")
      propertyCard.classList.add("property-card", "fade-in")
      propertyCard.style.animationDelay = `${index * 0.2}s`

      propertyCard.innerHTML = `
                <img src="${property.image}" alt="${property.title}">
                <div class="property-card-content">
                    <h4>${property.title}</h4>
                    <p>${property.description}</p>
                    <p><strong>${property.price}</strong></p>
                    <a href="#" class="btn-secondary">Подробнее</a>
                </div>
            `

      propertyCardsContainer.appendChild(propertyCard)
    })
  }
})

