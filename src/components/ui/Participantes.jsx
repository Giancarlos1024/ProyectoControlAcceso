import React from 'react'

const Participantes = () => {

    const Participantes = [
        {
            id:1,
            imgUrl:"/img/participante.jpg"
        },
        {
            id:2,
            imgUrl:"/img/participante2.jpg"
        },
        {
            id:3,
            imgUrl:"/img/participante3.jpg"
        },

    ]

  return (
    <div className='flex'>
        {Participantes.map((participante, index) => (
            <ul key={participante.id || index} >
                <li className=''><img className='w-4 h-4 rounded-2xl' src={participante.imgUrl} alt={`imagen ${participante.imgUrl}`} /></li>
            </ul>    
        ))

        }
    </div>
  )
}

export default Participantes
