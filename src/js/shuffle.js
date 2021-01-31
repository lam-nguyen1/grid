const shuffle = numbers => {
  let remaining = numbers.length;
  let temp = -1;
  let idx = -1;

  while (remaining !== 0) {
    idx = Math.floor(Math.random() * Math.floor(remaining--));
    temp = numbers[remaining];
    numbers[remaining] = numbers[idx];
    numbers[idx] = temp;
  }

  return numbers;
}

const renderShuffle = () => {
  const grid = document.querySelector('.grid');
  const numbers = grid.children;

  // Remove old order 
  if (numbers.length) {
    Object.entries(numbers).forEach(([_, numberNode]) => {
      grid.removeChild(numberNode);
    });
  }

  const randOrder = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  // Add random order
  randOrder.forEach(number => {
    const stringifiedNbr = '' + number;
    const color = getData()[stringifiedNbr];
    const spanElement = element('span', { className: 'number' }, [stringifiedNbr]);
    const numberElement = element('div', { className: `row ${color}` }, [spanElement]);
    grid.appendChild(numberElement);
  })
}
