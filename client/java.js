document.onload = onloadfunction();

function onloadfunction() {
  console.log("Loaded!");
  const promise = fetch("http://localhost:3000/hello")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((res) => {
      const resTwo = JSON.stringify(res);
      $("#response").text(resTwo);
    });
  console.log(promise);
}

var userName = $("name").val();
var Intrests = $("intrests").val();

// const testImport = () => {
//   console.log("test import");
// };
// export default testImport;
