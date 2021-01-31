const element = (tagName, props, children) => {
  const element = document.createElement(tagName);

  // Add properties to element
  if (props) {
    Object.entries(props).forEach(([key, value]) => {
      element[key] = value;
    });
  }

  // Add children to element
  if (children) {
    const childrenNodes = children.map((child) => {
      if (typeof child === 'string') {
        return document.createTextNode(child);
      }
  
      return child;
    });
    childrenNodes.forEach((child) => element.appendChild(child));
  }
  return element;
}

// for testing purposes
exports.element = element