document.getElementById("id-ajax").addEventListener("click", makerequest);

// function makerequest() {
//   console.log("Button clicked");
//   const xhr = new XMLHttpRequest();
//   console.log("Before Open", xhr.readyState)
//   xhr.open("GET", "data.txt", true);
//   console.log("After Open", xhr.readyState)
//   xhr.onreadystatechange = () => {
//       console.log("Ready State", xhr.readyState)
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       if (xhr.status === 200) {
//         console.log(xhr);
//         console.log(xhr.responseText);
//       } else {
//         console.log("Error occured");
//       }
//     }
//   };
//   xhr.send();
// }

function makerequest() {
    console.log("Button clicked");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.txt", true);
    
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log(xhr)
        console.log(xhr.responseText)        
      } else {
        console.log("Error occured")
      }
    }

    xhr.send()
  }
