export interface CPU {
  /**
   * Possible architecture:
   *  68k, amd64, arm, arm64, avr, ia32, ia64, irix, irix64, mips, mips64, pa-risc,
   *  ppc, sparc, sparc64
   */
  architecture: string | undefined;
}
/**

 Interface representing a CPU with properties for architecture.
 @interface CPU
 @property {string | undefined} architecture - The architecture of the CPU. Possible values: 68k, amd64, arm, arm64, avr, ia32, ia64, irix, irix64, mips, mips64, pa-risc, ppc, sparc, sparc64.
 */
