// Function to open resume in a new tab without force downloading
function openResume() {
    window.open('/Brandons-Portfolio/assets/Brandon_Yang_Resume.pdf', '_blank');
}


//concatenated form for images
// try to get the full view of the image to show in the modal
const images = [
    { src: "/Brandons-Portfolio/assets/sti-img.png", alt: "sti-img" },
    { src: "/Brandons-Portfolio/assets/porsche-img.png", alt: "porsche-img" },
    { src: "/Brandons-Portfolio/assets/boston-img.png", alt: "boston-img" },
    { src: "/Brandons-Portfolio/assets/steel-img.png", alt: "steelstacks-img" },
    { src: "/Brandons-Portfolio/assets/hotelb-img.png", alt: "hotel-b-img" },
    { src: "/Brandons-Portfolio/assets/sti-front-img.png", alt: "sti-wheel-img" },
    { src: "/Brandons-Portfolio/assets/sti-head-img.png", alt: "sti-headlight-img" },
    { src: "/Brandons-Portfolio/assets/cam-head-img.png", alt: "camaro-img" },
    { src: "/Brandons-Portfolio/assets/mu-img.png", alt: "moravian-uni-img" }
];

const gallery = document.getElementById("image-gallery");
images.forEach(image => {
    const div = document.createElement("div");
    div.className = "col-6 col-md-4";
    div.innerHTML = `<img src="${image.src}" alt="${image.alt}" class="img-fluid gallery-image">`;
    gallery.appendChild(div);
});

//photography modal
$(document).ready(function () {
    $('.gallery-image').click(function () {
        const src = $(this).attr('src');
        $('#modalImage').attr('src', src);
        $('#imageModal').modal('show');
    });
});

