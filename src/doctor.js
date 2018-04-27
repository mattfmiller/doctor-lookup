class Doctor {
  constructor(data) {
    this.name = `Dr. ${data.profile.first_name} ${data.profile.last_name}, ${data.profile.title}`;

    if (data.practices[0].visit_address.street2 !== undefined) {
      this.address = `${data.practices[0].visit_address.street}<br>
      ${data.practices[0].visit_address.street2}<br>
      ${data.practices[0].visit_address.city}, ${data.practices[0].visit_address.state} ${data.practices[0].visit_address.zip}`;
    } else {
      this.address = `${data.practices[0].visit_address.street}<br>
      ${data.practices[0].visit_address.city}, ${data.practices[0].visit_address.state} ${data.practices[0].visit_address.zip}`;
    }

    this.phone = `Phone: ${data.practices[0].phones[0].number}`;

    if (data.practices[0].website !== undefined) {
      this.website = `Website: ${data.practices[0].website}`;
    } else {
      this.website = "Website: N/A";
    }

    if (data.practices[0].accepts_new_patients === true) {
      this.accepting = "Accepting new patients: Yes";
    } else {
      this.accepting = "Accepting new patients: No";
    }

    this.specialties = [];
  }

  populateSpecialties(data) {
    for (var i = 0; i < data.specialties.length; i++) {
      this.specialties.push(` ${data.specialties[i].actor}`);
    }
  }
}

export { Doctor };
