import React from 'react';
import qzone1 from '../../assets/qZone1.png';
import qzone2 from '../../assets/qZone2.png';
import qzone3 from '../../assets/qZone3.png';

import bg from '../../assets/bg.png';

const QZone = () => {
	return (
		<>
			<div className="bg-light py-4 my-3 mx-auto">
				<img src={qzone1} alt="" />
				<img src={qzone2} alt="" />
				<img src={qzone3} alt="" />
			</div>
			<img src={bg} alt="" />
		</>
	);
};

export default QZone;
