// Function to download the resume
function downloadResume() {
    const link = document.createElement('a');
    link.href = '/assets/BrandonY_Resume.pdf';
    link.download = 'BrandonY_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

//concatenated form for images
const images = [
    { src: "/assets/sti-img.png", alt: "sti-img" },
    { src: "/assets/porsche-img.png", alt: "porsche-img" },
    { src: "/assets/boston-img.png", alt: "boston-img" },
    { src: "/assets/steel-img.png", alt: "steelstacks-img" },
    { src: "/assets/hotelb-img.png", alt: "hotel-b-img" },
    { src: "/assets/sti-front-img.png", alt: "sti-wheel-img" },
    { src: "/assets/sti-head-img.png", alt: "sti-headlight-img" },
    { src: "/assets/cam-head-img.png", alt: "camaro-img" },
    { src: "/assets/mu-img.png", alt: "moravian-uni-img" }
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

