export interface Engine {
  /**
   * Possible name:
   * Amaya, EdgeHTML, Gecko, iCab, KHTML, Links, Lynx, NetFront, NetSurf, Presto,
   * Tasman, Trident, w3m, WebKit
   */
  name: string | undefined;
  /**
   * Determined dynamically
   */
  version: string | undefined;
}

/**

 Interface representing a web rendering engine with properties for name and version.
 @interface Engine
 @property {string | undefined} name - The name of the rendering engine. Possible values: Amaya, EdgeHTML, Gecko, iCab, KHTML, Links, Lynx, NetFront, NetSurf, Presto, Tasman, Trident, w3m, WebKit.
 @property {string | undefined} version - The version of the rendering engine, determined dynamically.
 */
