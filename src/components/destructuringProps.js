import React from 'react';

// const destructuringProps = ({firstName,lastName}) => {
//     return (
//         <div>
//             {firstName} {lastName}
//         </div>
//     );
// };


//---------------OR---------------

const destructuringProps = props => {
    const {firstName,lastName}=props
    return (
        <div>
            {firstName} {lastName}
        </div>
    );
};

export default destructuringProps;