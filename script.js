document.addEventListener("DOMContentLoaded", () => {
  // 1. Irk Rehberi Filtreleme
  const filterButtons = document.querySelectorAll(".filter-btn");
  const breedCards = document.querySelectorAll(".breed-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const selectedCategory = button.getAttribute("data-filter");

      breedCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        if (selectedCategory === "all" || selectedCategory === cardCategory) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  // 2. Rastgele Kedi Bilgisi Üreteci (Tekrar etmeyen sıra)
  const catFacts = [
    "Kediler hayatlarının yaklaşık %70'ini uyuyarak geçirir; bu da 9 yaşındaki bir kedinin ortalama 6 yılını uyuduğu anlamına gelir.",
    "Her kedinin burun izi, tıpkı insanların parmak izi gibi tamamen benzersizdir.",
    "Kediler tatlı tadı algılayamazlar çünkü dillerinde tatlılık reseptörlerini kodlayan gen bulunmaz.",
    "Bir kedi mırladığında yayılan 25–150 Hz arasındaki titreşim frekansı, kemik ve doku iyileşmesini hızlandırabilir.",
    "Kediler köprücük kemikleri serbest olduğu için başlarının sığabildiği her boşluktan vücutlarını geçirebilirler.",
    "Kediler insanlara miyavlar; yetişkin kediler kendi aralarında iletişim kurarken miyavlamak yerine beden dili ve koku kullanır.",
    "Kedilerin kulaklarında 32 ayrı kas bulunur ve kulaklarını 180 derece döndürebilirler.",
    "Kediler kendi boylarının yaklaşık 6 katı yüksekliğe tek sıçrayışta zıplayabilirler.",
    "Kedilerin ön patilerinde genellikle 5, arka patilerinde ise 4 parmak bulunur.",
    "Kediler yüksekten düşerken vücutlarını hızla döndürüp ayakları üzerine inebilmelerini sağlayan doğrultma refleksine sahiptir."
  ];

  const factText = document.getElementById("factText");
  const newFactBtn = document.getElementById("newFactBtn");
  let lastIndex = 0;

  newFactBtn.addEventListener("click", () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * catFacts.length);
    } while (randomIndex === lastIndex && catFacts.length > 1);

    lastIndex = randomIndex;
    factText.style.opacity = "0";

    setTimeout(() => {
      factText.textContent = catFacts[randomIndex];
      factText.style.opacity = "1";
    }, 200);
  });
});