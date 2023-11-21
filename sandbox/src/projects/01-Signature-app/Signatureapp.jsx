import React, { useState } from 'react'
import Title from '../../components/Title'

function Signatureapp() {

	const inputStyle={
		border:'none',
		borderBottom: '2px dotted',
		marginRight: '15px',
		outline: 'none',
		padiing: '.35 rem 0',
	}

	document.body.style.background = '#eee'

	const [name, setName] = useState('Default Name')
	const [date, setDate] = useState()


	const NameChanging = (e) => {
		setName(e.target.value)
	}
	const DateChanging = (e) => {
		setDate(e.target.value)
	}

  return (
    <div className='container text-center'>
		<Title text={name} classes={'font-sec'}/>
		<Title text={!date ? 'Вы можете ввести дату...' : date} classes={'font-sec'}/>

    	<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, repellendus dolorem! Ea, veniam ipsa laudantium optio, beatae reiciendis nihil aliquam ad facilis amet error, explicabo consequatur ipsam nesciunt blanditiis maxime.</p>

		{/* Изначально идет стилизация Footer-а. Затем вызываются два поля */}
		<footer style={{
			display:'flex',
			justifyContent:'space-around',
			position:'relative',
			top:'40vh'}}>

			<input type="date" value={date} style={inputStyle} onChange={DateChanging}/>
			<input type="text" value={name} style={inputStyle} onChange={NameChanging}/>

		</footer>
    </div>
  )
}

export default Signatureapp