const getBy = (id) => {
   return document.getElementById(id);
};
const count = (...subjects) => {
   let count = 0;
   subjects.map(() => {
      count += 1;
   });
   return count;
};
const sum = (...subjects) => {
   let sum = 0;
   subjects.map((item) => {
      sum += Number(item);
   });
   return sum;
};
const calAverage1 = (average = 0) => {
   let math = getBy('inpToan').value;
   let physic = getBy('inpLy').value;
   let chem = getBy('inpHoa').value;
   average = sum(math, physic, chem) / count(math, physic, chem);
   getBy('tbKhoi1').innerHTML = average;
};
getBy('btnKhoi1').onclick = calAverage1;

const calAverage2 = (average = 0) => {
   let literature = getBy('inpVan').value;
   let history = getBy('inpSu').value;
   let geo = getBy('inpDia').value;
   let eng = getBy('inpEnglish').value;
   average =
      sum(literature, history, geo, eng) / count(literature, history, geo, eng);
   getBy('tbKhoi2').innerHTML = average;
};
getBy('btnKhoi2').onclick = calAverage2;
