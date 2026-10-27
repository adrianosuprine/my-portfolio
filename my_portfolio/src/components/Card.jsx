import React from 'react';
import '../CSS/cards.css';

// const Card = ({ item: { title, des, icon } }) => {
//   return (
//     <div className="card">
//       <div className="card-content">
//         <div className="card-inner">
//           <div className="card-icon">
//             {icon ? (
//               <span className="icon">{icon}</span>
//             ) : (
//               <>
//                 <span className="line"></span>
//                 <span className="line"></span>
//                 <span className="line"></span>
//                 <span className="line"></span>
//               </>
//             )}
//           </div>
//           <div className="card-details">
//             <h2 className="card-title">{title}</h2>
//             <p className="card-description">{des}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;
const Card = ({ item: { title, des, icon } }) => {
  return (
    <div className="card">
        <div className="card-details">
        <div className="card-icon">
            {icon ? (
              <span className="icon">{icon}</span>
            ) : (
              <>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </>
            )}
          </div>
          <h2 className="card-title">{title}</h2>
          <div className="card-content">
            <p className="card-description">{des}</p>
          </div>

      </div>
       
    </div>
  );
}

export default Card;
