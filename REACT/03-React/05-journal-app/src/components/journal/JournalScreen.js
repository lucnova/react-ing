import React from 'react';
import { Sidebar } from './Sidebar';
// import { NoEntrySelected } from './NoEntrySelected';
import { NotePage } from '../notes/NotePage';

export const JournalScreen = () => {
	return (
		<div className="journal__main-content">
			<Sidebar />

			<main>
				{/* <NoEntrySelected /> */}
				<NotePage />
			</main>
		</div>
	);
};
