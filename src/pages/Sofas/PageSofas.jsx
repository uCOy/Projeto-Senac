import React from 'react';
import CorpoSofa from '../../Components/Sofas/CorpoSofa/Sofa';
import SofasRetratil from '../../Components/Sofas/CorpoSofa/Retratil/RetratilApi';

function PagesSofas () {
    return(
        <div>
            <SofasRetratil/>
            <CorpoSofa/>
        </div>
    )
}

export default PagesSofas