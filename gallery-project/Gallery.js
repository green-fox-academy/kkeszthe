'use strict';
import { fs } from './app.js';
import { Image } from './Image.js';
export class Gallery {
	gallery = [];

	constructor(path) {
		const content = fs.readFileSync(path, 'utf8');
		const lines = content.split('\n');
		lines.forEach((item) => {
			let line = item.split(';');
			this.gallery.push(new Image(line[0], line[1], line[2]));
		});
	}
}
