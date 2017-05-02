import SouthernKitchen from './carla-hall/southern-kitchen.js';
import Proof from './tnt/proof.js';
import Sharknado from './syfy/sharknado.js';
import WKC from './wkc/dog-show.js';
import WKC2016 from './wkc/dog-show-2016.js';
// import MindyProject from './hulu/mindy.js';
import Mindy2016 from './hulu/mindy-2016.js';
import Veep from './hbo/veep.js';
import ILNY from './ilny/ilny.js';
import WinterCalendar from './cn/winter-calendar.js';
import TwelveMonkeys from './syfy/12-monkeys.js';
import Casual from './hulu/casual.js';
import HowIDidIt from './yahoo/how-i-did-it.js';
import Hunters from './syfy/hunters.js';
import Younger from './tvland/younger.js';
import Profit from './cnbc/profit.js';
import NightOf from './hbo/the-night-of.js';

const CaseStudyTemplates = (function templates () {
  return {
    NightOf: NightOf,
    SouthernKitchen: SouthernKitchen,
    Proof: Proof,
    Sharknado: Sharknado,
    WKC: WKC,
    WKC2016: WKC2016,
    Mindy: Mindy2016,
    Mindy2016: Mindy2016,
    Veep: Veep,
    ILNY: ILNY,
    WinterCalendar: WinterCalendar,
    TwelveMonkeys: TwelveMonkeys,
    Casual: Casual,
    HowIDidIt: HowIDidIt,
    Hunters: Hunters,
    Younger: Younger,
    Profit: Profit
  };
}());

export default CaseStudyTemplates;
