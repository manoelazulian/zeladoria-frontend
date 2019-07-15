$(document).ready(() => {
  const code = new URLSearchParams(window.location.search).get('code');

  // fetch(`http://localhost:3000/moradias/${code}`)
  //   .then((response) => {
  //     return response.json()
  //   }).then((response) => {
  //     let moradia = response[0]
  //     $('#moradia').append(`<h4><b>${moradia.code} - ${moradia.type}</b></h4><div id="relatos"></div><br />`)
  //
  //     moradia.relatos.forEach((element) => {
  //       $('#relatos').append(`<p><b>${element.name}</b></p><p>${element.content}</p><br />`)
  //     });
  //   });

  fetch(`https://zeladoria-back.herokuapp.com/moradias/${code}`)
    .then((response) => {
      return response.json()
    }).then((response) => {
      let moradia = response[0]
      $('#moradia').append(`<h4><b>${moradia.code} - ${moradia.type}</b></h4><div id="relatos"></div>`)

      moradia.relatos.forEach((element) => {
        $('#relatos').append(`<p><b>${element.name}</b></p><p>${element.content}</p>`)
      });
    });

});
