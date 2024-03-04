document.getElementById("upload_widget").addEventListener("click", function(){
    cloudinary.openUploadWidget({ 
        cloudName: "dzfsjokbo", 
        uploadPreset: "otoscopia"
    },
    function(error, result) { 
        if (!error && result && result.event === "success") {
            console.log('Upload realizado com sucesso:', result.info);
            // Adicione a lógica para exibir as miniaturas na página
            addThumbnail(result.info.url);
        }
    });
}, false);

function addThumbnail(imageUrl) {
    const gallery = document.getElementById('thumbnail-gallery');
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.classList.add('thumbnail');

    // Adiciona a nova miniatura à galeria
    gallery.appendChild(imgElement);
}
