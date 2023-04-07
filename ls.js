

let detail = document.querySelector(".detail");
var bl = document.querySelector('#blank');

detail.addEventListener('click', ()=>{
    detail.style.display = 'none';
    bl.innerHTML = "<p class='hey'> एल. एस. कॉस्मेटिक स्टोर का उद्देश्य आपके त्वचा की देखभाल करना व आपको स्किन केयर प्रोडक्ट्स के विषय में अवगत कराना है , जिसके परिणाम स्वरूप आप अपने त्वचा को हानिकारक कारकों से सुरक्षित रख सके। <br> धन्यवाद;</p>";
 bl.addEventListener('click' , ()=>{
    bl.innerHTML = "";
    detail.style.display = 'block';
 })})
 var img = document.getElementById('img');

var slides=['ad2.jpg','ad3.jpg', 'ad4.jpg','ad5.jpg', 'ad6.jpg', 'ad1.jpg', 'ad8.webp','ad9.jpg', 'ad10.jpg', 'ad11.jpeg', 'ad7.jpeg'];

var Start=0;

function sliders(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img class ='slider animate__animated animate__fadeOutRight animate__delay-2s' src="+slides[Start-1]+">";
   
}
setInterval(sliders,5000);

