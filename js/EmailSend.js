function sendMail(contactForm) {
  emailjs
    .send("gmail", "jihane", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      informationrequest: contactForm.projectsummary.value,
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
      },
      function (error) {
        console.log("ERROR", error);
      }
    );
  return false;
}