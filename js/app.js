const buttons = [...document.querySelectorAll('.btn')];

let index = 0;

function update() {
  buttons.forEach((b, i) => {
    b.classList.toggle('selected', i === index);
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    index = (index + 1) % buttons.length;
    update();
  }

  if (e.key === 'ArrowLeft') {
    index = (index - 1 + buttons.length) % buttons.length;
    update();
  }

  if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
    const id = buttons[index].dataset.id;
    console.log('open:', id);
  }

  if (e.key === 't') {
    document.body.classList.toggle('light');
  }
});

window.addEventListener('load', update);
