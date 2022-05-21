function Section() {
	const arr = [
		'Blizzards',
		'Calm',
		'Dusty_Road',
		'Escape',
		'Payday',
		'Retreat',
		'Seasonal',
		'Vespers',
	];

	return (
		<section>
			{arr.map((item, idx) => {
				return <article key={idx}>{item}</article>;
			})}
		</section>
	);
}

export default Section;
