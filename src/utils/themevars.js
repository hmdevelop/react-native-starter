import { normalize } from "../helpers/normalize.js";

export default (vars = {
  font: "Helvetica",

  primary: `#9c27b0`,
  plight: `#d05ce3`,
  pdark: `#6a0080`,
  secondary: `#f4511e`,
  slight: `#ff844c`,
  sdark: `#b91400`,
  success: `#30a54a`,
  danger: `#d93749`,
  warning: `#fdc02f`,
  info: `#24a2b6`,
  light: `#f8f9fa`,
  dark: `#343a40`,
  white: `#ffffff`,

  r1: normalize(1),
  r2: normalize(2),
  r3: normalize(3),
  r4: normalize(4),
  r5: normalize(5),
  r6: normalize(6),
  r7: normalize(7),
  r8: normalize(8),
  r9: normalize(9),
  r10: normalize(10),
  r12: normalize(12),
  r14: normalize(14),
  r16: normalize(16),
  r20: normalize(20),
  r24: normalize(24),
  r34: normalize(34),
  r48: normalize(48),
  r60: normalize(60),
  r96: normalize(96)
});
