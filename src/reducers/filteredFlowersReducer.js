// import INIT_FLOWER_STATE from '../flowers';

// function filterFlowersList(state = INIT_FLOWER_STATE, action) {
  
//   switch (action.type) {
    
//     case 'UPDATE_FILTERED_FLOWERS':

//       const newFlowers = action.flowers.filter(flower => {
//         for(let i = 0; i < action.list.length; i++) {
//           if (flower.availability.includes(action.list[0])) {
//             return flower
//           }
//         }
//       })

//       return [...state, newFlowers];
//     default:
//       return state;
//   }

// }

// export default filterFlowersList;
