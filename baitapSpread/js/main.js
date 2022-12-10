const hoverMe = () => {
   let content = document.querySelector('.heading').innerHTML;
   let letter = [...content];
   let contentChar = '';
   letter.map((item) => {
      if (item != '') {
         contentChar += `<span>${item}</span>`;
      }
   });
   document.querySelector('.heading').innerHTML = contentChar;
};

hoverMe();
