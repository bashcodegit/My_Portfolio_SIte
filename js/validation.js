
  jQuery('#contactForm').validate({

    rules:
    {
      name: "required",
      email:
      {
        required: true,
        email: true
      },
      phone:
      {
        required: true,
        digits: true
      },
    },
    messages:
    {
      name: "Please fill your name"
    }

  });
   