import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NotePage = () => {
	return (
		<div className="notepage__main-content">
			<NotesAppBar />

			<div className="notepage__content">
				<input type="text" placeholder="Titulo" className="notepage__title" autoComplete="off" name="note_title" />
				<textarea placeholder="Descripcion" className="notepage__textarea" autoComplete="off" name="note_desc" />
				<div className="notepage__image">
					<img src="https://p0.piqsels.com/preview/94/264/999/common-raven-raven-raven-bird-crow.jpg" alt="Imagen" />
				</div>
			</div>
		</div>
	);
};
