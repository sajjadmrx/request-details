export interface Device {
  /**
   * Determined dynamically
   */
  model: string | undefined;

  /**
   * Possible type:
   * console, mobile, tablet, smarttv, wearable, embedded
   */
  type: string | undefined;

  /**
   * Possible vendor:
   * Acer, Alcatel, Amazon, Apple, Archos, Asus, BenQ, BlackBerry, Dell, GeeksPhone,
   * Google, HP, HTC, Huawei, Jolla, Lenovo, LG, Meizu, Microsoft, Motorola, Nexian,
   * Nintendo, Nokia, Nvidia, Ouya, Palm, Panasonic, Polytron, RIM, Samsung, Sharp,
   * Siemens, Sony-Ericsson, Sprint, Xbox, ZTE
   */
  vendor: string | undefined;
}

/**

 Interface representing a device with properties for model, type, and vendor.
 @interface Device
 @property {string | undefined} model - The model of the device, determined dynamically.
 @property {string | undefined} type - The type of the device. Possible values: console, mobile, tablet, smarttv, wearable, embedded.
 @property {string | undefined} vendor - The vendor of the device. Possible values: Acer, Alcatel, Amazon, Apple, Archos, Asus, BenQ, BlackBerry, Dell, GeeksPhone, Google, HP, HTC, Huawei, Jolla, Lenovo, LG, Meizu, Microsoft, Motorola, Nexian, Nintendo, Nokia, Nvidia, Ouya, Palm, Panasonic, Polytron, RIM, Samsung, Sharp, Siemens, Sony-Ericsson, Sprint, Xbox, ZTE.
 */
