'use strict';
class Image {
	path;
	title;
	description;

	constructor(path, title, description) {
		this.path = path;
		this.title = title;
		this.description = description;
	}

	getPath() {
		return this.path;
	}
	getTitle() {
		return this.title;
	}
	getDescription() {
		return this.description;
	}
}

export { Image };
