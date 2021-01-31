const sort = (numbers) => {
  return numbers.sort((x, y) => x - y);
}

const renderSort = () => {
  const grid = document.querySelector('.grid');
  const numbers = grid.children;

  // Remove old order 
  if (numbers.length) {
    Object.entries(numbers).forEach(([_, numberNode]) => {
      grid.removeChild(numberNode);
    });
  }

  const sortedOrder = sort([9, 8, 7, 6, 5, 4, 3, 2, 1]);

  // Add sorted order
  sortedOrder.forEach(number => {
    const stringifiedNbr = '' + number;
    const color = getData()[stringifiedNbr];
    const spanElement = element('span', { className: 'number' }, [stringifiedNbr]);
    const numberElement = element('div', { className: `row ${color}` }, [spanElement]);
    grid.appendChild(numberElement);
  })
}

// for testing purposes
exports.sort = sort