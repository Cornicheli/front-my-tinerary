//mongo me va a generar los id automaticamente, cada id de admin lo va necesitar para crear una ciudad. 
// 1st borro los id de aqui 
//2nd creo en el back to2 los admins
//3rd con los id q se generan de cada admin remplaxzo en las cities q tengo q crear ( remplazo admin 1 x el long code q me da mongo)
// 3rd bis, object id, en el ult video y en el pdf.
//4th yo eremplazo ese id, y ahi creo la ciudad/ itinerario whatever.e
export  let administrators = [

    {
      id: "admin1",
      name: "Eric",
      lastName: "Rodriguez",
      age: 23,
      email: "feric.rodriguez@gmail.com",
      password: "Chau6789",
      code: "hola1234",
      verified: true,
      logged: true,
    },
    {
      id: "admin2",
      name: "Erica",
      lastName: "Perez",
      age: 25,
      email: "eri.perez@gmail.com",
      password: "6789999",
      code: "",
      verified: true,
      logged: true,
    },
    {
      id: "admin3",
      name: "Leandro",
      lastName: "Gianelli",
      age: 25,
      email: "GianelliLeandr0@gmail.com",
      password: "chaucha",
      code: "pepperoni",
      verified: true,
      logged: true,
    },
    {
      id: "admin4",
      name: "Sebastian",
      lastName: "Fenza",
      age: 26,
      email: "SebaFenzaAcedemico@gmail.com",
      password: "RacingTeAmo",
      code: "academia",
      verified: true,
      logged: true,
    },
    
  ];
  