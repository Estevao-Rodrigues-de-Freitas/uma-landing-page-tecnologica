// Digit Effect

const element = document.getElementById("type");

if (element) {
  const words = ["NÓS SOMOS O FUTURO"];
  let i = 0;
  let j = 0;
  let deleting = false;
  const speed = 100;

  function type() {
    const word = words[i];

    if (!deleting) {
      element.textContent = word.slice(0, j++);
      if (j > word.length) {
        deleting = true;
        setTimeout(type, 1200);
        return;
      }
    } else {
      element.textContent = word.slice(0, j--);
      if (j < 0) {
        deleting = false;
        i = (i + 1) % words.length;
        j = 0;
      }
    }

    setTimeout(type, deleting ? speed / 2 : speed);
  }

  type();
}
