import ReactDOM from 'react-dom/client';
import Home from './views/Configurable-IU-&-Nomenclature/Home/Home';
import Input from './views/Functions/Input';
import RadioBtn from './views/Functions/Radio-Btn';
import CheckBoxes from './views/Functions/Check-Boxes';
import Select from './views/Functions/Select';


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'font-awesome/css/font-awesome.min.css'
import ConfigurableUI from './views/Configurable-IU-&-Nomenclature/ConfiguraleUI/ConfigurableUI';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
{/* <Home /> */}
{/* <Input/> */}
{/* <RadioBtn/> */}
{/* <CheckBoxes/> */}
{/* <Select /> */}
<ConfigurableUI/>
</>
);