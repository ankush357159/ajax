document.getElementById("id-ajax").addEventListener("click", makerequest);

function makerequest() {
  console.log("Button clicked");
  const xhr1 = new XMLHttpRequest();
  const xhr2 = new XMLHttpRequest();
  xhr1.open("GET", "data.txt", true);
  xhr2.open("GET", "data.json", true);

  xhr1.onload = () => {
    if (xhr1.status === 200) {
      console.log("XHR object",xhr1);
      console.log("Response text",xhr1.responseText);

      const doc = document.getElementById("h2-id")

      // console.log("Status text",xhr.statusText);
      // console.log("response",xhr.response);
      // console.log("Response URL" ,xhr.responseURL);
      // console.log("With credentials",xhr.withCredentials);
      // console.log(xhr.getResponseHeader("LAST-MOdified"));
      // console.log(xhr.getAllResponseHeaders());

      doc.innerHTML = xhr1.response
      

    } else {
      console.log("Error occured");
    }
  };



  xhr2.onload = () => {
    if (xhr2.status === 200) {
      console.log("XHR2 object", xhr2)

      const docName = document.getElementById("prod-name")
      const docPrice = document.getElementById("prod-price")
      const docRating = document.getElementById("prod-rating")
      const docDescription = document.getElementById("prod-description")

      const data = JSON.parse(xhr2.response)
      console.log(data)
      // console.log(data.name)
      // console.log(data.price)
      // console.log(data.rating)
      // console.log(data.description)
      docName.innerHTML = data.name
      docPrice.innerHTML = data.price
      docRating.innerHTML = data.rating
      docDescription.innerHTML = data.description
      
      
    }
  }

 

 

  xhr1.send();
  xhr2.send();
}
