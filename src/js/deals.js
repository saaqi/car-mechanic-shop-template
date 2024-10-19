/**
 * @file deals.js
 * @description This file sets up the alert boxes and deals slides for the webpage,
 *  generating HTML content dynamically based on predefined data.
 */

// Setup Alert Boxes

/**
 * @constant {Array<Object>} alertBoxesData
 * @description An array of objects representing the data for each alert box.
 * @property {string} body - The message to be displayed in the alert box.
 */
const alertBoxesData = [
  {
    body: `We are Open 7 days a week.`,
  },
  {
    body: `Both Appointments and Walkins are Welcome.`,
  },
  {
    body: `Special Discounts for Veterans & Military Personel, Students, and Senior Citizens.`,
  },
];

/**
 * @function generateAlertBoxHtml
 * @description Generates HTML for each alert box based on the alertBoxesData array.
 * @param {Array<Object>} boxesData - The array of alert box data.
 * @returns {Array<string>} An array of HTML strings for each alert box.
 */
const generateAlertBoxHtml = (boxesData) => {
  return boxesData.map((bx) => {
    const body = bx.body ? bx.body : ``; // Use the body if available, otherwise use an empty string
    return `<li>${body}</li>`; // Wrap the body in a list item
  });
};

/**
 * @constant {HTMLElement} alertBoxesElement
 * @description The DOM element where the alert boxes will be inserted.
 */
const alertBoxesElement = document.querySelector("#alert-boxes .card-body");

/**
 * @description If the alertBoxesElement exists, set its innerHTML to the generated alert boxes HTML.
 */
if (alertBoxesElement) alertBoxesElement.innerHTML = generateAlertBoxHtml(alertBoxesData).join("");

// Setup Deals Slides

/**
 * @constant {Array<Object>} dealsSlidesData
 * @description An array of objects representing the data for each deal slide.
 * @property {string} icon - The HTML string for the deal icon.
 * @property {string} title - The title of the deal.
 * @property {string} body - The description of the deal.
 */
const dealsSlidesData = [
  {
    icon: `<i class="icon bx bx-wind display-6"></i>`,
    title: `AC System Flush, Vacuum & Recharge Freon for $119.99!`,
    body: `Beat the heat with our top-notch service! Get an AC System Flush, Vacuum, and Recharge Freon for just $119.99.`,
  },
  {
    icon: `<i class="icon bx bxs-car-wash display-6"></i>`,
    title: `Synthetic Oil Change for just $49.99`,
    body: `Get your car running smoothly with our oil change specials! Synthetic oil change for $49.99. Quality service at great prices!`,
  },
  {
    icon: `<i class="icon bx bxs-car-wash display-6"></i>`,
    title: `Conventional Oil Change for just $18.99`,
    body: `Get your car running smoothly with our oil change specials! Conventional oil change for $18.99. Quality service at great prices!`,
  },
  {
    icon: `<i class="icon bx bx-stop-circle display-6"></i>`,
    title: `Brake Pads starting at just $79.99`,
    body: `Enhance your vehicle's safety with our limited-time brake pads deal! Expert replacements, special pricing. Act now, drive confidently!`,
  },
  {
    icon: `<i class="icon bx bx-color display-6"></i>`,
    title: `Wheel Alignment starting at just $49.99`,
    body: `Wheel alignment for $49.99 & up! Limited time offer. Improved handling and fuel efficiency. Visit us today!`,
  },
  {
    icon: `<i class="icon bx bxs-wrench display-6"></i>`,
    title: `Full Tune Up Starting from just $249.99`,
    body: `Tune up starting at just $249.99! Limited time offer. Optimize performance and reliability. Visit us today!`,
  },
  {
    icon: `<i class="icon bx bxs-color display-6"></i>`,
    title: `4 New Tires from $399.99 & Up`,
    body: `Get rolling with a fantastic deal! 4 new tires for $399.99 & free wheel alignment. Limited time offer. Visit us now!`,
  },
  {
    icon: `<i class="icon bx bxs-color display-6"></i>`,
    title: `4 Used Tires from $199.99 & Up`,
    body: `Get road-ready with our special deal! 4 used tires for $199.99 & free wheel alignment. Limited time offer. Visit us now!`,
  },
  {
    icon: `<i class="icon bx bxs-car-garage display-6"></i>`,
    title: `FREE Check Engine Light diagnostics.`,
    body: `Worried about your check engine light? Get a FREE diagnostic from our expert technicians and drive with confidence!`,
  },
  {
    icon: `<i class="icon bx bxs-car-garage display-6"></i>`,
    title: `Free Vehicle Inspection with any service.`,
    body: `Comprehensive vehicle inspection for FREE with any service! Limited time offer. Visit us today!`,
  },
];

/**
 * @function generateDealsSlidesHtml
 * @description Generates HTML for each deal slide based on the dealsSlidesData array.
 * @param {Array<Object>} slidesData - The array of deal slide data.
 * @returns {Array<string>} An array of HTML strings for each deal slide.
 */
const generateDealsSlidesHtml = (slidesData) => {
  return slidesData.map((sl) => {
    const output =
      `<li class="glide__slide h-auto">` +
        `<div class="ag-courses_item h-100 bg-primary p-3 text-light rounded">` +
          `<div class="ag-courses-item_bg"></div>` +
          `<div class="ag-courses-item_title fs-5 fw-medium mb-2">` +
            `<div>${sl.icon}</div>` +
            `<div>${sl.title}</div>` +
          `</div>` +
          `<div class="ag-course-body">${sl.body}</div>` +
        `</div>` +
      `</li>`;
    return output;
  });
};

/**
 * @constant {HTMLElement} dealsSlidesElement
 * @description The DOM element where the deals slides will be inserted.
 */
const dealsSlidesElement = document.getElementById("deals-slides");

/**
 * @description If the dealsSlidesElement exists, set its innerHTML to the generated deals slides HTML.
 */
if (dealsSlidesElement) dealsSlidesElement.innerHTML = generateDealsSlidesHtml(dealsSlidesData).join("");