const wbm = require("./index");

wbm
  .start({
    session: true
  })
  .then(async () => {
    const contacts = [
      //   { phone: "+919768971770", name: "Eddy IN", otp: 348934 },
      //   { phone: "+971542043579", name: "Eddy AE", otp: 934723 },
      //   { phone: "+447716538618", name: "Eddy UK", otp: 734823 },
      { phone: "+919819577318", name: "Eddy 1", otp: 134873 },
      { phone: "+919819577318", name: "Eddy 2", otp: 345674 },
      { phone: "+919819577318", name: "Eddy 3", otp: 445674 },
      { phone: "+919819577318", name: "Eddy 4", otp: 545674 },
      { phone: "+919819577318", name: "Eddy 5", otp: 645674 },
      { phone: "+919819577318", name: "Eddy 6", otp: 134873 },
      { phone: "+919819577318", name: "Eddy 7", otp: 345674 },
      { phone: "+919819577318", name: "Eddy 8", otp: 445674 },
      { phone: "+919819577318", name: "Eddy 9", otp: 545674 },
      { phone: "+919768971770", name: "Eddy 10", otp: 645674 },
    ];
    const message = `Hi {{name}}, welcome to whatsapp bot play now and win 1cr`;
    await wbm.send(contacts, message);
    // await wbm.end();
  })
  .catch((err) => console.log(err));
