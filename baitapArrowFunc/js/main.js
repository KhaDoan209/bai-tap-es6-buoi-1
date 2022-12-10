const colors = [
   'pallet',
   'viridian',
   'pewter',
   'cerulean',
   'vermillion',
   'lavender',
   'celadon',
   'saffron',
   'fuschia',
   'cinnabar',
];

const changeColor = (color) => {
   document.querySelector('.house').className = `house ${color}`;
};

const colorList = () => {
   let content = '';
   colors.map((item) => {
      return (content += `<button class="color-button ${item}" onclick="changeColor('${item}')")"></button>`);
   });
   document.querySelector('.color-controls').innerHTML = content;
};
colorList();
