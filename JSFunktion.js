class RealEstate {
    constructor(type, totalArea, livingArea, usefulArea, totalRooms, livingRooms, floor, totalFloors, street, buildingNumber, apartmentNumber, salePrice, rentPrice, description, status, ownerSurname, ownerName, ownerPatronymic, ownerContactInfo) {
        this.type = type;
        this.totalArea = totalArea;
        this.livingArea = livingArea;
        this.usefulArea = usefulArea;
        this.totalRooms = totalRooms;
        this.livingRooms = livingRooms;
        this.floor = floor;
        this.totalFloors = totalFloors;
        this.street = street;
        this.buildingNumber = buildingNumber;
        this.apartmentNumber = apartmentNumber;
        this.salePrice = salePrice;
        this.rentPrice = rentPrice;
        this.description = description;
        this.status = status;
        this.ownerSurname = ownerSurname;
        this.ownerName = ownerName;
        this.ownerPatronymic = ownerPatronymic;
        this.ownerContactInfo = ownerContactInfo;
    }

    getInfo() {
        console.log(`Real estate: ${this.type}, Address: ${this.street} ${this.buildingNumber}, Apartment: ${this.apartmentNumber}`);
        console.log(`Total area: ${this.totalArea} sq.m, Living area: ${this.livingArea} sq.m, Useful area: ${this.usefulArea} sq.m`);
        console.log(`Total rooms: ${this.totalRooms}, Living rooms: ${this.livingRooms}, Floor: ${this.floor} out of ${this.totalFloors}`);
        console.log(`Sale price: ${this.salePrice} UAH, Rent price: ${this.rentPrice} UAH`);
        console.log(`Description: ${this.description}, Status: ${this.status}`);
        console.log(`Owner: ${this.ownerSurname} ${this.ownerName} ${this.ownerPatronymic}, Contact: ${this.ownerContactInfo}`);
    }

    setSalePrice(sp) { this.salePrice = sp; }
    setRentPrice(rp) { this.rentPrice = rp; }
    setDescription(d) { this.description = d; }
}

class Client {
    constructor() {
        this.surname = prompt("Enter surname:");
        this.name = prompt("Enter name:");
        this.patronymic = prompt("Enter patronymic:");
        this.phone = prompt("Enter phone number:");
        this.email = prompt("Enter email:");
        this.address = prompt("Enter address:");
        this.needs = prompt("Enter needs:");
        this.history = prompt("Enter cooperation history:");
    }

    getInfo() {
        console.log(`Client: ${this.surname} ${this.name} ${this.patronymic}`);
        console.log(`Phone: ${this.phone}, Email: ${this.email}, Address: ${this.address}`);
        console.log(`Needs: ${this.needs}, History: ${this.history}`);
    }

    setPhone(ph) { this.phone = ph; }
    setEmail(e) { this.email = e; }
    setNeeds(ne) { this.needs = ne; }
}

class Realtor {
    constructor(surname, name, patronymic, phone, email, specialization, experience, dealsCount, feedback, buildingImage) {
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.phone = phone;
        this.email = email;
        this.specialization = specialization;
        this.experience = experience;
        this.dealsCount = dealsCount;
        this.feedback = feedback;
        this.buildingImage = buildingImage; // Store the image file
    }

    getInfo() {
        console.log(`Realtor: ${this.surname} ${this.name} ${this.patronymic}`);
        console.log(`Phone: ${this.phone}, Email: ${this.email}`);
        console.log(`Specialization: ${this.specialization}, Experience: ${this.experience} years, Number of deals: ${this.dealsCount}`);
        console.log(`Feedback: ${this.feedback}`);
        // You can process/display the image here if needed
    }

    setPhone(ph) { this.phone = ph; }
    setEmail(e) { this.email = e; }
    setFeedback(f) { this.feedback = f; }
}

class Deal {
    constructor(dealType, realEstate, client, realtor, date, amount, conditions) {
        this.dealType = dealType;
        this.realEstate = realEstate;
        this.client = client;
        this.realtor = realtor;
        this.date = date;
        this.amount = amount;
        this.conditions = conditions;
    }

    getInfo() {
        console.log(`Deal: ${this.dealType}, Amount: ${this.amount} UAH, Date: ${this.date}`);
        console.log(`Conditions: ${this.conditions}`);
        this.realEstate.getInfo();
        this.client.getInfo();
        this.realtor.getInfo();
    }

    setAmount(a) { this.amount = a; }
    setConditions(con) { this.conditions = con; }
}

class Task {
    constructor(description, realtor, client, status, deadline) {
        this.description = description;
        this.realtor = realtor;
        this.client = client;
        this.status = status;
        this.deadline = deadline;
    }

    getInfo() {
        console.log(`Task: ${this.description}, Status: ${this.status}, Deadline: ${this.deadline}`);
        this.realtor.getInfo();
        this.client.getInfo();
    }

    setStatus(s) { this.status = s; }
    setDeadline(dl) { this.deadline = dl; }
}

class Event {
    constructor(eventType, dateTime, location, participants, participantCount, description) {
        this.eventType = eventType;
        this.dateTime = dateTime;
        this.location = location;
        this.participants = participants.slice(0, participantCount);
        this.participantCount = participantCount;
        this.description = description;
    }

    getInfo() {
        console.log(`Event: ${this.eventType}, Location: ${this.location}, Date: ${this.dateTime}`);
        console.log(`Description: ${this.description}`);
        console.log(`Participants: ${this.participants.join(", ")}`);
    }

    setDescription(d) { this.description = d; }
}

class Report {
    constructor(reportType, period, reportData) {
        this.reportType = reportType;
        this.period = period;
        this.reportData = reportData;
    }

    getInfo() {
        console.log(`Report: ${this.reportType}, Period: ${this.period}`);
        console.log(`Report data: ${this.reportData}`);
    }

    setReportData(rd) { this.reportData = rd; }
}

function toggleRealtorForm() {
    const realtorForm = document.getElementById('realtorForm');
    realtorForm.style.display = 'block';

    // Hide other forms if needed
    document.getElementById('clientForm').style.display = 'none';
    document.getElementById('realEstateForm').style.display = 'none';  // Ensure real estate form is hidden
}

function toggleClientForm() {
    const clientForm = document.getElementById('clientForm');
    clientForm.style.display = 'block';

    // Hide other forms if needed
    document.getElementById('realtorForm').style.display = 'none';
    document.getElementById('realEstateForm').style.display = 'none';  // Ensure real estate form is hidden
}

// Example usage

let estate = new RealEstate("apartment", 100.5, 75.0, 90.0, 3, 2, 5, 10, "Main St", 123, 45, 100000.0, 1000.0, "Large apartment in the city center", "for sale", "Ivanov", "Ivan", "Ivanovich", "ivanov@example.com");
estate.getInfo();
console.log();

let now = new Date();
let deal = new Deal("purchase-sale", estate, client, realtor, now, 100000.0, "All documents are ready");
deal.getInfo();
console.log();

let task = new Task("Search for an apartment", realtor, client, "open", new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000));
task.getInfo();
console.log();

let participants = ["Sidorov S.S.", "Petrov P.P."];
let event = new Event("property showing", new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000), "Main St, 123", participants, 2, "Showing the apartment to the client");
event.getInfo();
console.log();

let report = new Report("sales report", "April 2024", "Deals: 5, Amount of deals: 500000");
// JavaScript

let realEstate, client, realtor;

function createRealEstate() {
    realEstate = new RealEstate(
        document.getElementById('realEstateType').value,
        parseFloat(document.getElementById('realEstateTotalArea').value),
        parseFloat(document.getElementById('realEstateLivingArea').value),
        parseFloat(document.getElementById('realEstateUsefulArea').value),
        parseInt(document.getElementById('realEstateTotalRooms').value),
        parseInt(document.getElementById('realEstateLivingRooms').value),
        parseInt(document.getElementById('realEstateFloor').value),
        parseInt(document.getElementById('realEstateTotalFloors').value),
        document.getElementById('realEstateStreet').value,
        parseInt(document.getElementById('realEstateBuildingNumber').value),
        parseInt(document.getElementById('realEstateApartmentNumber').value),
        parseFloat(document.getElementById('realEstateSalePrice').value),
        parseFloat(document.getElementById('realEstateRentPrice').value),
        document.getElementById('realEstateDescription').value,
        document.getElementById('realEstateStatus').value,
        document.getElementById('realEstateOwnerSurname').value,
        document.getElementById('realEstateOwnerName').value,
        document.getElementById('realEstateOwnerPatronymic').value,
        document.getElementById('realEstateOwnerContactInfo').value
    );
    displayOutput(realEstate);
}

function createClient() {
    client = new Client(
        document.getElementById('clientSurname').value,
        document.getElementById('clientName').value,
        document.getElementById('clientPatronymic').value,
        document.getElementById('clientPhone').value,
        document.getElementById('clientEmail').value,
        document.getElementById('clientAddress').value,
        document.getElementById('clientNeeds').value,
        document.getElementById('clientHistory').value
    );
    displayOutput(client);
}

function createRealtor() {
    const fileInput = document.getElementById('buildingImage');
    const selectedFile = fileInput.files[0]; // Get the selected file

    const realtor = new Realtor(
        document.getElementById('realtorSurname').value,
        document.getElementById('realtorName').value,
        document.getElementById('realtorPatronymic').value,
        document.getElementById('realtorPhone').value,
        document.getElementById('realtorEmail').value,
        document.getElementById('realtorSpecialization').value,
        parseInt(document.getElementById('realtorExperience').value),
        parseInt(document.getElementById('realtorDealsCount').value),
        document.getElementById('realtorFeedback').value,
        selectedFile  // Pass the selected file to Realtor constructor
    );
    displayOutput(realtor);
}

function toggleRealEstateForm() {
    const realEstateForm = document.getElementById('realEstateForm');
    realEstateForm.style.display = 'block';

    // Hide other forms if needed
    document.getElementById('clientForm').style.display = 'none';
    document.getElementById('realtorForm').style.display = 'none';
}

function toggleClientForm() {
    const clientForm = document.getElementById('clientForm');
    clientForm.style.display = 'block';

    // Hide other forms if needed
    document.getElementById('realEstateForm').style.display = 'none';
    document.getElementById('realtorForm').style.display = 'none';
}

function toggleRealtorForm() {
    const realtorForm = document.getElementById('realtorForm');
    realtorForm.style.display = 'block';

    // Hide other forms if needed
    document.getElementById('realEstateForm').style.display = 'none';
    document.getElementById('clientForm').style.display = 'none';
}


function displayOutput(obj) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear previous output
    let outputText = '';
    
    if (obj instanceof RealEstate) {
        outputText = `
            <h3>Real Estate Information:</h3>
            Type: ${obj.type}<br>
            Address: ${obj.street} ${obj.buildingNumber}, Apt. ${obj.apartmentNumber}<br>
            Total Area: ${obj.totalArea} sq.m<br>
            Sale Price: ${obj.salePrice} UAH<br>
            Description: ${obj.description}<br>
            Owner: ${obj.ownerSurname} ${obj.ownerName} ${obj.ownerPatronymic}<br>
            Contact: ${obj.ownerContactInfo}
        `;
    } else if (obj instanceof Client) {
        outputText = `
            <h3>Client Information:</h3>
            Name: ${obj.surname} ${obj.name} ${obj.patronymic}<br>
            Phone: ${obj.phone}<br>
            Email: ${obj.email}<br>
            Address: ${obj.address}<br>
            Needs: ${obj.needs}<br>
            History: ${obj.history}
        `;
    } else if (obj instanceof Realtor) {
        outputText = `
            <h3>Realtor Information:</h3>
            Name: ${obj.surname} ${obj.name} ${obj.patronymic}<br>
            Phone: ${obj.phone}<br>
            Email: ${obj.email}<br>
            Specialization: ${obj.specialization}<br>
            Experience: ${obj.experience} years<br>
            Deals Count: ${obj.dealsCount}<br>
            Feedback: ${obj.feedback}
        `;
    }

    outputDiv.innerHTML = outputText;
}
report.getInfo();
console.log();
