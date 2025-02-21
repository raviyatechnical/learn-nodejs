class Status {
  static INACTIVE = "inactive";
  static ACTIVE = "active";

  static getLabel(status) {
    switch (status) {
      case this.INACTIVE:
        return "Inactive";
      case this.ACTIVE:
        return "Active";
      default:
        throw new Error("Invalid status");
    }
  }

  static getColor(status) {
    switch (status) {
      case this.INACTIVE:
        return "danger";
      case this.ACTIVE:
        return "success";
      default:
        throw new Error("Invalid status");
    }
  }
}

Object.freeze(Status); // Prevent modifications

module.exports = Status;
