// const bigCont = document.querySelector(".big_container")
// fetch("https://jsonplaceholder.typicode.com/photos").
// then((response)=>{
//     if(!response.ok)
//         throw new Error("Error");
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
//     const album ={}
//     data.forEach(element => {
//         if(!album[element.albumId]){
//             album[element.albumId]=[]
//         }
//         album[element.albumId].push(element)
//     });
//     Object.keys().forEach
//     const container =document.createElement("div")
//     container.className="Album"
//     bigCont.append(container)
//     container.append(album.albumId)
//     console.log(album);
    
    
// })
// .catch((error) => {
//     console.error(error);
//   });

// fetch("https://jsonplaceholder.typicode.com/photos")
//   .then((response) => {
//     if (!response.ok) throw new Error("Error");
//     return response.json();
//   })
//   .then((data) => {
//     // Create a container to hold all album divs
//     const container = document.createElement("div");
//     container.style.display = "flex";
//     container.style.flexWrap = "wrap";
//     document.body.appendChild(container);

//     const albumIDs= data.map(())
//     console.log(albums);
    

// //     // Create a div for each albumId
//     Object.keys(albums).forEach((albumId) => {
//       const albumDiv = document.createElement("div");
//       albumDiv.style.border = "1px solid #ccc";
//       albumDiv.style.margin = "10px";
//       albumDiv.style.padding = "10px";
//       albumDiv.style.width = "200px";

//       // Add a heading for the album
//       const albumHeading = document.createElement("h3");
//       albumHeading.textContent = `Album ID: ${albumId}`;
//       albumDiv.appendChild(albumHeading);

//       // Add photos to the album div
//       albums[albumId].forEach((photo) => {
//         const photoDiv = document.createElement("div");
//         photoDiv.style.marginBottom = "5px";

//         // Add photo title
//         const photoTitle = document.createElement("p");
//         photoTitle.textContent = photo.title;
//         photoTitle.style.fontSize = "12px";
//         photoDiv.appendChild(photoTitle);

//         // Add photo thumbnail
//         const photoImg = document.createElement("img");
//         photoImg.src = photo.thumbnailUrl;
//         photoImg.alt = photo.title;
//         photoImg.style.width = "100%";
//         photoImg.style.borderRadius = "5px";
//         photoDiv.appendChild(photoImg);

//         albumDiv.appendChild(photoDiv);
//       });

//       container.appendChild(albumDiv);
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });



fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => {
    if (!response.ok) throw new Error("Error");
    return response.json();
  })
  .then((data) => {
    // Create a container to hold all album divs
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    document.body.appendChild(container);

    // Extract unique album IDs using map and filter
    const albumIds = data
      .map((photo) => photo.albumId)
      .filter((value, index, self) => self.indexOf(value) === index);
        console.log(albumIds);

    // Create a div for each unique albumId
    albumIds.map((albumId) => {
      const albumDiv = document.createElement("div");
      albumDiv.style.border = "1px solid #ccc";
      albumDiv.style.margin = "10px";
      albumDiv.style.padding = "10px";
      albumDiv.style.width = "200px";

      // Add a heading for the album
      const albumHeading = document.createElement("h3");
      albumHeading.textContent = `Album ID: ${albumId}`;
      albumDiv.appendChild(albumHeading);

      // Filter photos belonging to the current albumId
      const photos = data.filter((photo) => photo.albumId === albumId);

      // Add photos to the album div
      photos.map((photo) => {
        const photoDiv = document.createElement("div");
        photoDiv.style.marginBottom = "5px";

        // Add photo title
        const photoTitle = document.createElement("p");
        photoTitle.textContent = photo.title;
        photoTitle.style.fontSize = "12px";
        photoDiv.appendChild(photoTitle);

        // Add photo thumbnail
        const photoImg = document.createElement("img");
        photoImg.src = photo.thumbnailUrl;
        photoImg.alt = photo.title;
        photoImg.style.width = "100%";
        photoImg.style.borderRadius = "5px";
        photoDiv.appendChild(photoImg);

        albumDiv.appendChild(photoDiv);
      });

      container.appendChild(albumDiv);
      
    });
  })
  .catch((error) => {
    console.error(error);
  });
