const myStorage = {
  car: {
    inside: {
      'glovebox': 'maps',
      'passengerseat': 'crumbs',
    },
    outside: {
      trunk: 'jack',
    },
  },
};

function gloveBoxContents(){
  
  let  gloveBoxContents = myStorage.car.inside.glovebox;
   console.log (gloveBoxContents);
;
}

    gloveBoxContents();