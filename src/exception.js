export default class ParapetException extends Error {
  constructor(name, message, tags) {
    super(message);
    this.name = name
    this.tags = tags
    Error.captureStackTrace(this, this.name);
  }
}
