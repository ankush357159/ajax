document.getElementById("id-ajax").addEventListener("click", makerequest);

function makerequest() {
  console.log("Button clicked");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.txt", true);
  xhr.timeout = 2;

  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr);
      console.log(xhr.responseText);
    } else {
      console.log("Error occured");
    }
  };

  xhr.onprogress = (e) => {
    console.log(e.loaded);
    console.log(e.total);
  };

  xhr.onerror = () => {
    console.log("Error");
  };

  xhr.onloadstart = () => {
    console.log("Transaction started ..");
  };

  xhr.onloadend = () => {
    console.log("Transaction ended");
  };

  xhr.onabort = () => {
    console.log("Abort");
  };

  xhr.timeout = () => {
    console.log("Timeout");
  };

  xhr.send();
}
