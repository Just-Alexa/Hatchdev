class Laptop {
  keyboard: Keyboard[] = [];
  nic: NetworkInterfaceCard;
  screen: Display;
  hardDisk: HardDisk;
  powerState: boolean = false;
  bitKind: BitKind;
  os: OS;
  allUpdateLogs: string[] = [];

  constructor(
    keyboard: Keyboard,
    bit: BitKind,
    display: Display,
    nic: NetworkInterfaceCard,
    os: OS,
    harddisk: HardDisk
  ) {
    this.keyboard.push(keyboard);
    this.bitKind = bit;
    this.screen = display;
    this.nic = nic;
    this.os = os;
    this.hardDisk = harddisk;
  }

  switchOn() {
    this.powerState = true;
  }

  switchOff() {
    this.powerState = false;
  }

  showAllUpdateLogs() {
    console.log("All updates made: \n" + this.allUpdateLogs.join("\n"));
  }

  update(thingToUpdate: string, newValue: any) {
    let error: string = "";

    switch (thingToUpdate.toLowerCase()) {
      case "keyboard":
        if (!(newValue instanceof Keyboard)) {
          error =
            "Invalid input: The new value must be an instance of Keyboard";
          return error; // Return the error message instead of console.log
        }
        this.keyboard.push(newValue);
        this.allUpdateLogs.push(
          `Keyboard updated: ${newValue.kind} keyboard with ${newValue.layout} layout`
        );
        break;
      case "nic":
        if (typeof newValue !== "string") {
          error = "Invalid input: The new value must be a string";
          return error;
        }
        this.nic.name = newValue;
        this.allUpdateLogs.push(`NIC updated: ${newValue}`);
        break;
      case "display":
        if (!(newValue instanceof Display)) {
          error = "Invalid input: The new value must be aninstance of Display";
          return error;
        }
        this.screen = newValue;
        this.allUpdateLogs.push(
          `Display updated: ${newValue.size} inches ${newValue.type} display`
        );
        break;
      case "hardDisk":
        if (!(newValue instanceof HardDisk)) {
          error =
            "Invalid input: The new value must be an instance of HardDisk";
          return error;
        }
        this.hardDisk = newValue;
        this.allUpdateLogs.push(`HardDisk updated: ${newValue.type}`);
        break;
      case "os":
        if (!(newValue instanceof OS)) {
          error = "Invalid input: The new value must be an instance of OS";
          return error;
        }
        this.os = newValue;
        this.allUpdateLogs.push(`OS updated: ${newValue.type}`);
        break;
      default:
        error = "Invalid input: Update option not found";
        return error; // Return the error message
    }
  }
}

// Rest of the code remains the same

export {
  Laptop,
  OS,
  BitKind,
  Keyboard,
  KeyboardKind,
  KeyboardLayout,
  NetworkInterfaceCard,
  Display,
  DisplayType,
  HardDisk,
};