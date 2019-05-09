function setFileURL(eventdata) {
  //creates the URL for the sent wav file
  let objectURL = URL.createObjectURL(eventdata);
  console.log("Objecturl:" + objectURL.toString());
  finishedmusic();
  playsong(objectURL);
}
function sendFiles(id) {
  //send information av what fractal to generate and listen to

  let fractalopt, iteropt, data, groundnote;
  if (id !== "canv1play") {
    fractalopt = getOption("selectFractal2");
    iteropt = getOption("selectIter1");
    data = getOption("selectScale2");
    groundnote = getOption("selectNote2");
  } else {
    fractalopt = getOption("selectFractal1");
    iteropt = getOption("selectIter1");
    data = getOption("selectScale1");
    groundnote = getOption("selectNote1");
  }

  let value = findFractalInSelect(fractalopt);

  if (value === "") {
    alert("You have not selected a fractal to play.");
    return;
  }

  console.log(iteropt.value);
  if (iteropt.value === "Select iteration") {
    alert("You have not selected an iteration.");
    return;
  }

  let scale = groundnote.value + " " + data.value;

  console.log("Skalan: " + data.value);

  let msg = toJson(0, scale, value, "play", iteropt.value);
  console.log("Musikmeddelandet:" + msg);

  sendMessage(msg);
}

function playsong(src) {
  //play the song
  console.log(src);
  const audio = new Audio(src);
  audio.play();
}
