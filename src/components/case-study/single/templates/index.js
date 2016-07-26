import SouthernKitchen from './carla-hall/southern-kitchen.js';
import Proof from './tnt/proof.js';
import Sharknado from './syfy/sharknado.js';
import WKC from './wkc/dog-show.js';
import MindyProject from './hulu/mindy.js';
import Veep from './hbo/veep.js';
import ILNY from './ilny/ilny.js';
import WinterCalendar from './cn/winter-calendar.js';
import TwelveMonkeys from './syfy/12-monkeys.js';
import Casual from './hulu/casual.js';
import HowIDidIt from './yahoo/how-i-did-it.js';
import Hunters from './syfy/hunters.js';
import Younger from './tvland/younger.js';

const CaseStudyTemplates = (function templates () {
  return {
    SouthernKitchen: SouthernKitchen,
    Proof: Proof,
    Sharknado: Sharknado,
    WKC: WKC,
    Mindy: MindyProject,
    Veep: Veep,
    ILNY: ILNY,
    WinterCalendar: WinterCalendar,
    TwelveMonkeys: TwelveMonkeys,
    Casual: Casual,
    HowIDidIt: HowIDidIt,
    Hunters: Hunters,
    Younger: Younger
  };
}());

export default CaseStudyTemplates;
