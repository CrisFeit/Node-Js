import React from 'react'
import Alimentacao from '../assets/images/alimentacao.svg'
import Outros from '../assets/images/outros.svg'
import Saude from '../assets/images/saude.svg'
import Transporte from '../assets/images/transporte.svg'
import Utilidades from '../assets/images/utilidades.svg'
import { IconeTema } from '../Components/UI'

function ImageFilter(type) {    
    const Images = {
        Restaurante : <IconeTema src={Alimentacao} alt="Alimentacao" />,
        Utilidades : <IconeTema src={Utilidades} alt="Utilidades" />,
        Saude : <IconeTema src={Saude} alt="Saude" />,
        Transporte : <IconeTema src={Transporte} alt="Transporte" />,
        Default : <IconeTema src={Outros} alt="Outros" />,
    }
    return Images[type] || Images.Default
}

export default ImageFilter
