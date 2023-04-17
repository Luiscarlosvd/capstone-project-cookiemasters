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
    Name: 'Jordi Roca',
    subtitle: 'Pastry chef at El Celler de Can Roca restaurant',
    description: 'Spanish Chef, In 2014 he won the inaugural award for "Best Pastry Chef in the World" from Restaurant magazine.',
  },
  {
    image: 'img/jordi-roca-pic (2).jpeg',
    Name: 'Jordi Roca',
    subtitle: 'Pastry chef at El Celler de Can Roca restaurant',
    description: 'Spanish Chef, In 2014 he won the inaugural award for "Best Pastry Chef in the World" from Restaurant magazine.',
  },
  {
    image: 'img/jordi-roca-pic (2).jpeg',
    Name: 'Jordi Roca',
    subtitle: 'Pastry chef at El Celler de Can Roca restaurant',
    description: 'Spanish Chef, In 2014 he won the inaugural award for "Best Pastry Chef in the World" from Restaurant magazine.',
  },
  {
    image: 'img/jordi-roca-pic (2).jpeg',
    Name: 'Jordi Roca',
    subtitle: 'Pastry chef at El Celler de Can Roca restaurant',
    description: 'Spanish Chef, In 2014 he won the inaugural award for "Best Pastry Chef in the World" from Restaurant magazine.',
  },
  {
    image: 'img/jordi-roca-pic (2).jpeg',
    Name: 'Jordi Roca',
    subtitle: 'Pastry chef at El Celler de Can Roca restaurant',
    description: 'Spanish Chef, In 2014 he won the inaugural award for "Best Pastry Chef in the World" from Restaurant magazine.',
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
