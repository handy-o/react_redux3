import Card from "./Card";
import { useState } from 'react';
import Btns from "./Btns";

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

	const [count, setCount] = useState(0);

	return (
		<>
			<section style={{
				top: '140%',
				transform: `rotate( ${(360 / arr.length) * count}deg)`,
			}}>
				{arr.map((item, idx) => {
					return (
						<Card key={idx} item={item} index={idx} num={arr.length} />
					);
				})}
			</section>

			<Btns count={count} setCount={setCount} />
			{/* 하위 Btns 컴포넌트에 props 넘겨주기 */}
		</>
	);
}

export default Section;
