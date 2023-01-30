function helloWorld() {
  alert('hello world!!');
}

window.addEventListener('load', () => {
  document.getElementById('hello-button').addEventListener('click', helloWorld);
});
