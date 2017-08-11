/**
 * Example of a class holding state.
 */
class Family {
  /**
   * Create a Family object specifying lastname.
   * @param lastName Family name
   */
  constructor(lastName) {
    this._lastName = lastName
  }

  lastName() {
    return _lastName
  }

  /**
   * Get full name of a person.
   * @param firstName
   * @returns {string}
   */
  getFullName(firstName) {
    return firstName + ' ' + this._lastName
  }
}

module.exports = Family