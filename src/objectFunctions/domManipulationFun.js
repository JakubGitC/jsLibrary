/**
 * Adds a class to an element's class list.
 * @param {HTMLElement} element - The target element to which the class will be added.
 * @param {string} className - The name of the class to add.
 */
function myAddClass(element, className) {
  if (element && className) {
    element.classList.add(className);
  }
}

/**
 * Removes a class from an element's class list.
 * @param {HTMLElement} element - The target element from which the class will be removed.
 * @param {string} className - The name of the class to remove.
 */
function myRemoveClass(element, className) {
  if (element && className) {
    element.classList.remove(className);
  }
}

/**
 * Scrolls the page to bring the specified element into view.
 * @param {HTMLElement} element - The element to scroll into view.
 * @param {Object} [options={}] - Optional configuration for scroll behavior.
 * @param {boolean} [options.behavior='auto'] - Defines the transition behavior. Can be 'auto', 'smooth'.
 * @param {string} [options.block='start'] - Defines vertical alignment. Can be 'start', 'center', 'end', 'nearest'.
 * @param {string} [options.inline='nearest'] - Defines horizontal alignment. Can be 'start', 'center', 'end', 'nearest'.
 */
function myScrollToElement(element, options = {}) {
  if (element) {
    element.scrollIntoView(options);
  }
}

/**
 * Sets an attribute on an element.
 * @param {HTMLElement} element - The target element.
 * @param {string} attr - The name of the attribute to set.
 * @param {string} value - The value to set for the attribute.
 */
function mySetAttribute(element, attr, value) {
  if (element && attr) {
    element.setAttribute(attr, value);
  }
}

/**
 * Sets multiple inline styles on an element.
 * @param {HTMLElement} element - The target element.
 * @param {Object} styleObj - An object containing style properties and values to apply.
 */
function mySetStyle(element, styleObj) {
  if (element && styleObj && typeof styleObj === "object") {
    Object.assign(element.style, styleObj);
  }
}

/**
 * Gets the computed style value of a specific property on an element.
 * @param {HTMLElement} element - The target element.
 * @param {string} styleProp - The name of the style property to retrieve.
 * @returns {string|null} - The computed value of the style property or null if the element is not provided.
 */
function myGetStyle(element, styleProp) {
  return element
    ? window.getComputedStyle(element).getPropertyValue(styleProp)
    : null;
}

/**
 * Inserts a new element before a reference element in the DOM.
 * @param {HTMLElement} newElement - The element to insert.
 * @param {HTMLElement} referenceElement - The element before which the new element will be inserted.
 */
function myInsertBefore(newElement, referenceElement) {
  if (newElement && referenceElement && referenceElement.parentNode) {
    referenceElement.parentNode.insertBefore(newElement, referenceElement);
  }
}

/**
 * Wraps an element with a wrapper element.
 * @param {HTMLElement} element - The element to be wrapped.
 * @param {HTMLElement} wrapper - The wrapper element to wrap around the target element.
 */
function myWrapElement(element, wrapper) {
  if (element && wrapper) {
    element.parentNode.insertBefore(wrapper, element);
    wrapper.appendChild(element);
  }
}
module.exports = {
  myAddClass,
  myRemoveClass,
  myScrollToElement,
  mySetAttribute,
  mySetStyle,
  myGetStyle,
  myInsertBefore,
  myWrapElement,
};
