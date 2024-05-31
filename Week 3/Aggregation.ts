const display = new Display(13, "amoled");

display.displaySize = 16;
display.setDisplayType("amoled");

const nic = new NetworkInterfaceCard("nitlap");

const hardDisk = new HardDisk("ssd", 512);

const inBuiltKeyboard = new KeyBoard("in-built", "Qwertz");

const os = new OperatingSystem("Windows", 11);

const nitlap = new Laptop(os,"x64", display, nic, hardDisk, [inBuiltKeyboard]);