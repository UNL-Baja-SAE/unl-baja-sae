function renderImages(images) {
    const container = document.getElementById('bootstrap-image-gallery'); // Make sure this ID exists in your HTML
    container.innerHTML = ''; // Clear existing content
    if(images.length == 0){
        const div = document.createElement('div');
        div.textContent = "Whoops! No images found as of right now, try coming back later!"
        div.classList.add("text-center","p-4","col-12","my-5");
        container.appendChild(div);
    }
    images.forEach(img => {
        // Create the HTML structure for each image
        const link = document.createElement('a');
        const imgElement = document.createElement('img');
        const imageUrl = `https://images.husker-baja.org/${img.file_key}`
        link.classList.add('col', 'g-item')
        link.setAttribute('data-src', imageUrl)
        imgElement.setAttribute('loading', "lazy")
        // NOTE: Replace 'YOUR_R2_PUBLIC_URL' with your actual bucket URL
        imgElement.src = imageUrl;
        imgElement.alt = `Image from ${img.category}`;
        imgElement.classList.add("w-100", "mb-3"); // Keeping your Bootstrap styling
        link.appendChild(imgElement)
        container.appendChild(link);
    });
    window.lightGallery(container, {
        licenseKey:"GPLv3",
        selector: '.g-item',
        plugins: [
            lgZoom,
            lgThumbnail
        ],
        preload: 2, // Preloads the next 2 images and the previous 1 image invisibly
        speed: 400, // Speeds up the transition slightly to feel more responsive
        mode: 'lg-fade'
    });
}



async function loadImages(category) {
    const cacheKey = `gallery_${category}`;

    // 1. Check if we already have the data in browser storage
    const cachedData = sessionStorage.getItem(cacheKey);

    if (cachedData) {
        console.log("Loading from browser storage...");
        return renderImages(JSON.parse(cachedData));
    }

    // 2. If not, fetch it from your Worker
    // Note the use of the versioning 'v' to bust the cache when needed
    var images;
    try{
        const response = await fetch(`https://husker-baja.org/api/images?category=${category}&v=2`);
        const data = await response.json();
    
    // 3. Save it to storage for next time
        sessionStorage.setItem(cacheKey, JSON.stringify(data));
        images = data

    }catch{
        images=[]
    }
    renderImages(images)
}

function openGallery(category) {
    const selection = document.getElementById('selection-page');
    const container = document.getElementById('image-gallery-main');
    selection.classList.add("d-none");
    container.classList.remove("d-none");
    loadImages(category)
}

function goBack(){
    const selection = document.getElementById('selection-page');
    const container = document.getElementById('image-gallery-main');
    const gallery = document.getElementById('bootstrap-image-gallery'); // Make sure this ID exists in your HTML

    gallery.innerHTML = '';
    selection.classList.remove("d-none");
    container.classList.add("d-none");
}
// Usage


// EVENT LISTENERS
document.querySelectorAll('.year-btn').forEach(btn => {
    btn.addEventListener('click', () => openGallery(btn.dataset.year));
});

document.getElementById("goBack").addEventListener('click',goBack)