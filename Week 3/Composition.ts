// class Laptop {
//     keyboard: Keyboard
//     nic: NetworkInterfaceCard
//     screen: Display
//     hardDisk: HardDisk
//     powerState: boolean = false;
//     bitKind: BitKind

//     constructor(
//         bit: BitKind,
//         display: Display,
//         nic: NetworkInterfaceCard,
//         keyboard: Keyboard,
//         hardDisk: HardDisk
//     ) {
//         this.keyboard = {
//             kind: "in-built",
//             layout: "Qwerty"
//         }
//         this.nic = {
//             name: "Realtek"
//         }
//         this.screen = {
//             size: 15.6,
//             type: "amoled"
//         }
//         this.hardDisk = {
//             type: "ssd",
//             size: 512
//         }

//     }

//     switchOn(){
//         this.powerState = true;
//     }

//     update(){
//         this.
//     }

//     shutDown() {
//         this.powerState = false;
//     }
// }

// type OsKind = "Linux" | "Mac" | "Windows"
// type BitKind = "x64" | "x32" | "X84"

// class OperatingSystem {
//     kind: OsKind;
//     version: number;

// }

// class HardDisk {
//     type: "ssd" | "hdd"
//     size: number
// }

// class Display {
//     size: number
//     type: "amoled" | "lcd" | "oled"

//     set display(val: number) {
//         this.size = val;
//     }

//     setDisplayType(type: DisplayType) {
//         this.type = type;
//     }
// }

// class NetworkInterfaceCard {
//     name: string
// }

// class Keyboard {
//     kind: KeyBoardKind
//     layout: KeyBoardLayout
// }

// type KeyBoardKind = "in-built" | "external"
// type KeyBoardLayout = "Qwerty" | "Qwrertz" | "Azerty"

class Laptop {
  keyboard: KeyBoard[] = [];
  nic: NetworkInterfaceCard;
  screen: Display;
  os: OperatingSystem;
  hardDisk: HardDisk;
  powerState: boolean = false;
  bitKind: BitKind;
  version: string;
  

  constructor(
    os: OperatingSystem,
    bit: BitKind,
    display: Display,
    nic: NetworkInterfaceCard,
    hd: HardDisk,
    keyBoards: KeyBoard[]
  ) {
    this.powerState = false; // the laptop is swtiched off.
  }

  switchOn() {
    this.powerState = true;
  }

  update(version: number) {
    this.version = String(version);
  }

  shutDown() {
    this.powerState = false;
  }
}

type OsKind = "Linux" | "Mac" | "Windows";
type BitKind = "x64" | "x32" | "x86";

class OperatingSystem {
  kind: OsKind;
  version: number;

  constructor(kind: OsKind, version: number) {
    this.kind = "Windows";
    this.version = 11;
  }
}

class HardDisk {
  type: "ssd" | "hdd";
  size: number;

  constructor(type: "ssd" | "hdd", size: number) {
    this.type = "ssd";
    this.size = 512;
  }
}

class Display {
  size: number;
  type: DisplayType;

  constructor(size: number, type: DisplayType) {
    this.size = 13.3;
    this.type = "amoled";
  }

  set displaySize(val: number) {
    this.size = val;
  }

  setDisplayType(type: DisplayType) {
    this.type = type;
  }
}

type DisplayType = "amoled" | "lcd" | "oled";

class NetworkInterfaceCard {
  constructor(public readonly name: string) {}
}

type KeyBoardKind = "in-built" | "external";
type KeyBoardLayout = "Qwerty" | "Qwertz" | "Azerty";

class KeyBoard {
  kind: KeyBoardKind;

  layout: KeyBoardLayout;

  constructor(kind: KeyBoardKind, layout) {
    this.kind = kind;
    this.layout = "Qwertz";
  }
}
