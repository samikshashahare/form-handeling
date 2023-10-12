import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
// this is first way to handel checkboxes

// export default function CheckBoxes() {
//     const [mobile, seMobile] = useState(false);
//     const [laptop, seLaptop] = useState(false);
//     const [smartwatch, setSmartwatch] = useState(false);

//     return (
//         <div>
//             <h1>Handeling Check-Boxes</h1>
//             <form>
//                 {mobile ? 'mobile is checked' : 'mobile is not checked'}<br />
//                 <input type='checkbox' value="mobile" checked={mobile}
//                     onChange={(e) => {
//                         seMobile(e.target.checked);
//                     }}
//                 />Mobile<br />

//                 <input type='checkbox' value="laptop" checked={laptop} />laptop<br />

//                 <input type='checkbox' value="smartwatch" checked={smartwatch} />smartwatch<br />

//             </form>
//         </div>
//     )
// }

// this is sencond way to handel checkboxes


export default function CheckBoxes() {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        console.log(devices);
    }, [devices]);

    const handlecheck = (e) => {
        if (e.target.checked) {
            setDevices([...devices, e.target.value]);
        }
        else {
            const indexToBeDeleted = devices.indexOf(e.target.value);
            devices.splice(indexToBeDeleted, 1);
            setDevices([...devices]);
        }
    }
    return (
        <div>
            <h1>Handeling Check-Boxes</h1>

            <form>
                <input
                    type='checkbox' value="mobile"
                    onChange={handlecheck}
                />Mobile<br />

                <input
                    type='checkbox' value="laptop"
                    onChange={handlecheck}

                />laptop<br />

                <input
                    type='checkbox' value="smartwatch"
                    onChange={handlecheck}

                />smartwatch<br />
            </form>
        </div>
    )
}




