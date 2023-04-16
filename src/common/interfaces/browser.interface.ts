export interface Browser {
  /**
   * Possible values :
   * Amaya, Android Browser, Arora, Avant, Baidu, Blazer, Bolt, Camino, Chimera, Chrome,
   * Chromium, Comodo Dragon, Conkeror, Dillo, Dolphin, Doris, Edge, Epiphany, Fennec,
   * Firebird, Firefox, Flock, GoBrowser, iCab, ICE Browser, IceApe, IceCat, IceDragon,
   * Iceweasel, IE [Mobile], Iron, Jasmine, K-Meleon, Konqueror, Kindle, Links,
   * Lunascape, Lynx, Maemo, Maxthon, Midori, Minimo, MIUI Browser, [Mobile] Safari,
   * Mosaic, Mozilla, Netfront, Netscape, NetSurf, Nokia, OmniWeb, Opera [Mini/Mobi/Tablet],
   * Phoenix, Polaris, QQBrowser, RockMelt, Silk, Skyfire, SeaMonkey, SlimBrowser, Swiftfox,
   * Tizen, UCBrowser, Vivaldi, w3m, Yandex
   *
   */
  name: string | undefined;

  /**
   * Determined dynamically
   */
  version: string | undefined;

  /**
   * Determined dynamically
   * @deprecated
   */
  major: string | undefined;
}

/**
 * Represents the possible browser names.
 *
 * @typedef {string} BrowserName
 * @memberof Browser
 * @enum {string}
 * @readonly
 */
type BrowserName =
  | "Amaya"
  | "Android Browser"
  | "Arora"
  | "Avant"
  | "Baidu"
  | "Blazer"
  | "Bolt"
  | "Camino"
  | "Chimera"
  | "Chrome"
  | "Chromium"
  | "Comodo Dragon"
  | "Conkeror"
  | "Dillo"
  | "Dolphin"
  | "Doris"
  | "Edge"
  | "Epiphany"
  | "Fennec"
  | "Firebird"
  | "Firefox"
  | "Flock"
  | "GoBrowser"
  | "iCab"
  | "ICE Browser"
  | "IceApe"
  | "IceCat"
  | "IceDragon"
  | "Iceweasel"
  | "IE [Mobile]"
  | "Iron"
  | "Jasmine"
  | "K-Meleon"
  | "Konqueror"
  | "Kindle"
  | "Links"
  | "Lunascape"
  | "Lynx"
  | "Maemo"
  | "Maxthon"
  | "Midori"
  | "Minimo"
  | "MIUI Browser"
  | "[Mobile] Safari"
  | "Mosaic"
  | "Mozilla"
  | "Netfront"
  | "Netscape"
  | "NetSurf"
  | "Nokia"
  | "OmniWeb"
  | "Opera [Mini/Mobi/Tablet]"
  | "Phoenix"
  | "Polaris"
  | "QQBrowser"
  | "RockMelt"
  | "Silk"
  | "Skyfire"
  | "SeaMonkey"
  | "SlimBrowser"
  | "Swiftfox"
  | "Tizen"
  | "UCBrowser"
  | "Vivaldi"
  | "w3m"
  | "Yandex";

/**
 * Interface representing a web browser with properties for name, version, and major version.
 *
 * @interface Browser
 *
 * @property {string | undefined} name - The name of the browser. Possible values: Amaya, Android Browser, Arora, Avant, Baidu, Blazer, Bolt, Camino, Chimera, Chrome, Chromium, Comodo Dragon, Conkeror, Dillo, Dolphin, Doris, Edge, Epiphany, Fennec, Firebird, Firefox, Flock, GoBrowser, iCab, ICE Browser, IceApe, IceCat, IceDragon, Iceweasel, IE [Mobile], Iron, Jasmine, K-Meleon, Konqueror, Kindle, Links, Lunascape, Lynx, Maemo, Maxthon, Midori, Minimo, MIUI Browser, [Mobile] Safari, Mosaic, Mozilla, Netfront, Netscape, NetSurf, Nokia, OmniWeb, Opera [Mini/Mobi/Tablet], Phoenix, Polaris, QQBrowser, RockMelt, Silk, Skyfire, SeaMonkey, SlimBrowser, Swiftfox, Tizen, UCBrowser, Vivaldi, w3m, Yandex.
 *
 * @property {string | undefined} version - The version of the browser, determined dynamically.
 *
 * @property {string | undefined} major - The major version of the browser, determined dynamically. (Deprecated)
 */
