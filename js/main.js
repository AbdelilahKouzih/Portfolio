let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



let sections=document.querySelectorAll('section')
let navLinks=document.querySelectorAll('header nav a')

window.onscroll=()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');


        if(top >= offset && top < offset + height){

            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            })
        }
    })

    let header =document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY >100)


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}



var typed = new Typed(".multiple-text",{
    strings: ["Full-stack Developer","Frontend Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

})

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Send the form data to Formspree
    // ...

    // Reset the form after submission
    this.reset();
  });

  document.getElementById("downloadBtn").addEventListener("click", function() {
    var fileURL = "C:\Users\Hp\Downloads\CV_Abdelilah(1).pdf"; // Remplacez par le chemin réel vers votre fichier CV

    var xhr = new XMLHttpRequest();
    xhr.open("GET", fileURL, true);
    xhr.responseType = "blob";

    xhr.onload = function() {
      if (xhr.status === 200) {
        var blob = xhr.response;
        var downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = "Abdelilah_CV.pdf"; // Remplacez par le nom souhaité du fichier à télécharger
        downloadLink.click();
      }
    };

    xhr.send();
  });

