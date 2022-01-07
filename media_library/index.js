class Media {
  constructor(title) {
    this._title = title;
    this._rating = [];
    this._isCheckedOut = false;
  }

  get title() {
    return this._title;
  }

  get rating() {
    return this._rating;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  addrating(newRating) {
    this._rating.push(newRating);
  }

  getAverageRating() {
    return (this._rating = (arr) =>
      arr.reduce((a, b) => a + b, 0) / arr.length);
  }
}

class Book extends Media {
  constructor(title, pages) {
    super(title);
    this._pages = pages;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, runTime) {
    super(props);
    this._runTime = runTime;
  }
}

class CD extends Media {
  constructor(title, artist) {
    super(title);
    this._artist = artist;
    this._songs = [];
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs();
  }

  addSong(songName) {
    this._songs.push(songName);
  }
}
