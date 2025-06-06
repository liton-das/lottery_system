// Select Dom Element 
let text_inp = document.querySelector('.text_inp')
let submit_btn = document.querySelector('.submit_btn')
let reset_btn = document.querySelector('.reset_btn')
let result_one = document.querySelector('.result_one')
let result_two = document.querySelector('.result_two')
let result_three = document.querySelector('.result_three')
let shuffled = document.querySelector('.shuffled')
let shuffle_start = document.querySelector('.shuffle_start')
let msg_text_parent = document.querySelector('.msg_text_parent')
const shuffleArray=(arr)=>{
    for (let i = arr.length -1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        // shuffled
        [arr[i],arr[j]] = [arr[j],arr[i]];
    }
    return arr
}
// success message function
let success_msg = document.querySelector('.success_msg')
let interVal;
// Event Listener
submit_btn.addEventListener('click', () => {
  let count = 0;

  // Get input, split by comma or space
  let nArr = text_inp.value.split(',').map(name => name.trim().toUpperCase());

  if (nArr.length < 4) {
    alert("Please enter at least 4 names.");
    return;
  }
  submit_btn.disabled=true
  submit_btn.style='background:gray'
  reset_btn.disabled=false
  reset_btn.style='background:red'
  interVal = setInterval(() => {
    let data=shuffleArray(nArr);
    shuffled.innerHTML=''
    for (const arr of data) {
      if(arr.length > 0){
        shuffle_start.innerHTML=`Shuffling Start.............`
        shuffle_start.style='color:green'
      }
      // shuffled 
      shuffled.innerHTML+=`<li>${arr}</li>`
      
      // result
      result_one.innerHTML=`${data[0]}`
      result_two.innerHTML=`${data[1]}`
      result_three.innerHTML=`${data[2]}`
      
    }
    count++;
    
    if (count === 20){
      clearInterval(interVal);
      shuffle_start.innerHTML='Shuffling Completed'
      //success Message
      success_msg.innerHTML=`প্রথম, দ্বিতীয় এবং তৃতীয় পুরস্কার গুলো স্যার এর কাছ থেকে নিয়ে নিবেন  😊😊😊 । দয়া করে কেউ আমার কাছে কোনো পুরস্কার চেয়ে  আমাকে লজ্জা দিবেন না 😃😃😃 ধন্যবাদ`
      success_msg.style='color:green'
      msg_text_parent.innerHTML=`পুরস্কার বিতরন করবে আমাদের প্রিয় শিক্ষক : নাহিদ হাসান `
      msg_text_parent.style='color:green;font-weight:600;font-size:18px'
    } 
  }, 500);
});
reset_btn.style='background:gray'
reset_btn.disabled=true
reset_btn.addEventListener('click',()=>{
clearInterval(interVal)
    text_inp.value=''
    success_msg.innerHTML=``
    msg_text_parent.innerHTML=``
    shuffled.innerHTML=``
    shuffle_start.innerHTML=``
    result_one.innerHTML=``
    result_two.innerHTML=``
    result_three.innerHTML=``
    submit_btn.disabled=false
    submit_btn.style='background:green'
    
    reset_btn.disabled=true
})

// Akib Hasan,Anik Deb,Azmayeet Hammad,Fabiha Nuva,Hira Akter,MD Sabbir Hossain,Meher Rouhi,Moshiur Hossain Pantho,Munsiun Hossain Bhuiyan,Niaj Mohammad Shakil,Rj Raj,Ruhul Amin,Srijon Ghosh,Taushif Tanim,জাহিদ হাসান