import React from 'react';

export const JournalEntry = () => {
	return (
		<div className="journal__entry">
			<div
				className="journal__entry-picture"
				style={{
					backgroundSize: '100% 100%',
					backgroundImage: 'url(https://cdn.pixabay.com/photo/2013/07/12/14/08/drawing-pin-147814_960_720.png)',
				}}
			></div>

			<div className="journal__entry-body">
				<p className="journal__entry-title">Entrada #N</p>
				<p className="journal__entry-content">
					Nulla faucibus commodo dolor id pulvinar. Nulla facilisi.
				</p>
			</div>

            <div className="journal__entry-date-box">
                <span>Domingo</span>
                <h4>4</h4>
            </div>
		</div>
	);
};
