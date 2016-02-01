// import React from 'react';
import SouthernKitchen from './carla-hall/southern-kitchen.js';
import Proof from './tnt/proof.js';
import Sharknado from './syfy/sharknado.js';
import WKC from './wkc/dog-show.js';
import MindyProject from './hulu/mindy.js';
import Veep from './hbo/veep.js';
import ILNY from './ilny/ilny.js';
import WinterCalendar from './cn/winter-calendar.js';

const CaseStudyTemplates = (function templates () {
  return {
    SouthernKitchen: SouthernKitchen,
    Proof: Proof,
    Sharknado: Sharknado,
    WKC: WKC,
    Mindy: MindyProject,
    Veep: Veep,
    ILNY: ILNY,
    WinterCalendar: WinterCalendar
  };
}());

export default CaseStudyTemplates;
