// data for table list
const tableData = [
  ['Mon Sept 09 2024', 'Ronald Lane', 'San Francisco, CA'],
  ['Tue Sept 17 2024', 'Pier 3 East', 'San Francisco, CA'],
  ['Sat Oct 12 2024', 'View Lounge', 'San Francisco, CA'],
  ['Sat Nov 16 2024', 'Hyatt Agency', 'San Francisco, CA']
];

// generating shouw objects in non-mobile views, then add to html
const mainContainer = document.createElement('div');
mainContainer.classList.add('mt-30px', 'max_table');


const tableHeaderBox = document.createElement('div');
tableHeaderBox.classList.add('table_header_box', 'px-10px');

const headers = ['DATE', 'VENUE', 'LOCATION', ''];
headers.forEach(headerText => {
  const header = document.createElement('div');
  header.classList.add('table_header', 'four-half');
  header.textContent = headerText;
  tableHeaderBox.appendChild(header);
});

mainContainer.appendChild(tableHeaderBox);


tableData.forEach(data => {
  const tableList = document.createElement('div');
  tableList.classList.add('table_list', 'px-10px');


  data.forEach(itemText => {
    const listItem = document.createElement('div');
    listItem.classList.add('four-half');
    listItem.textContent = itemText;
    tableList.appendChild(listItem);
  });


  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('four-half', 'justify-end');

  // Create button
  const button = document.createElement('button');
  button.classList.add('content_btn');
  button.textContent = 'BUY TICKETS';


  buttonContainer.appendChild(button);
  tableList.appendChild(buttonContainer);


  mainContainer.appendChild(tableList);
});

const showsTitleNonMobil = document.getElementById("showsTitle")
showsTitleNonMobil.appendChild(mainContainer);

//code to generate the mobile shows

function createEventElement(eventData) {
  const [date, venue, location] = eventData;

  let eventDiv = document.createElement("div");
  eventDiv.classList.add("min_table_list");

  let dateDiv = document.createElement("div");
  dateDiv.classList.add("table_header");
  dateDiv.textContent = "DATE";
  eventDiv.appendChild(dateDiv);

  let dateValueDiv = document.createElement("div");
  dateValueDiv.classList.add("mt-10px", "text-gary");
  dateValueDiv.textContent = date;
  eventDiv.appendChild(dateValueDiv);

  let venueDiv = document.createElement("div");
  venueDiv.classList.add("table_header", "mt-15px");
  venueDiv.textContent = "VENUE";
  eventDiv.appendChild(venueDiv);

  let venueValueDiv = document.createElement("div");
  venueValueDiv.classList.add("mt-10px", "text-gary");
  venueValueDiv.textContent = venue;
  eventDiv.appendChild(venueValueDiv);

  let locationDiv = document.createElement("div");
  locationDiv.classList.add("table_header", "mt-15px");
  locationDiv.textContent = "LOCATION";
  eventDiv.appendChild(locationDiv);

  let locationValueDiv = document.createElement("div");
  locationValueDiv.classList.add("mt-10px", "text-gary");
  locationValueDiv.textContent = location;
  eventDiv.appendChild(locationValueDiv);

  let button = document.createElement("button");
  button.classList.add("content_btn", "mt-30px");
  button.textContent = "BUY TICKETS";
  eventDiv.appendChild(button);

  return eventDiv;
}

let container = document.createElement("div");


tableData.forEach(eventData => {
  let eventElement = createEventElement(eventData);
  container.appendChild(eventElement);
});

document.getElementById("showsMobile").appendChild(container);

