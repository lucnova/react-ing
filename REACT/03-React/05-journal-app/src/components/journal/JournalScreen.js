import React from 'react';
import { Sidebar } from './Sidebar';
import { NoEntrySelected } from './NoEntrySelected';

export const JournalScreen = () => {
	return (
		<div className="journal__main-content">
			<Sidebar />

			<main>
				<NoEntrySelected />
			</main>
		</div>
	);
};
