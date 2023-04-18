/* Featured Guests */

const guests = [
  {
    image: 'img/jordi-roca-pic (2).jpeg',
    Name: 'Jordi Roca',
    subtitle: 'Pastry chef at El Celler de Can Roca restaurant',
    description: 'Spanish Chef, In 2014 he won the inaugural award for "Best Pastry Chef in the World" from Restaurant magazine.',
  },
  {
    image: 'img/Kirsten-tibballs (4).jpg',
    Name: 'Kirsten Tibballs',
    subtitle: 'Founder of Savor Chocolate and Patisserie School',
    description: 'She was proclaimed "The queen of chocolate" by MasterChef and is one of the most famous and respected pastry chefs and chocolatiers.',
  },
  {
    image: 'img/maria-selyanina (2).jpg',
    Name: 'Maria Selyanina',
    subtitle: 'Chef and Founder of PastryCampus School',
    description: 'Maria is a teacher at her school and has always loved sweets and education, and through both she unleashes her talents.',
  },
  {
    image: 'img/oriol_balaguer (3).jpg',
    Name: 'Oriol Balaguer',
    subtitle: 'Award-winning pastry chef',
    description: 'He is one of the most renowned pastry chefs today. He has held the title of Best Pastry Chef in Spain for many years.',
  },
  {
    image: 'img/ernst-knam (2).jpg',
    Name: 'Ernst Knam',
    subtitle: 'Manager of l\'Antica Arte del Dolce',
    description: 'German pastry chef and chocolatier better known as "The king of chocolate".',
  },
  {
    image: 'img/paco-torreblanca (2).jpg',
    Name: 'Paco Torreblanca',
    subtitle: 'Pastry Master Craftsman of Europe.',
    description: 'Spanish pastry chef, one of the great masters of world pastry over the last three decades',
  },
];

const guestContainer = document.getElementById('guest-container');

guests.forEach((x) => {
  guestContainer.innerHTML += `
        <li class="individual-guest">
            <img src="${x.image}" alt="Guest image">
            <div class="description-guest">
                <h3>${x.Name}</h3>
                <h4>${x.subtitle}</h4>
                <div class="line-grey-bar"></div>
                <p class="paragraphs">${x.description}
                </p>
            </div>
        </li>
    `;
});
