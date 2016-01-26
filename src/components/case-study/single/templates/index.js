// import React from 'react';
import SouthernKitchen from './carla-hall/southern-kitchen.js';
import Proof from './tnt/proof.js';
import Sharknado from './syfy/sharknado.js';
import WKC from './wkc/dog-show.js';
import MindyProject from './hulu/mindy.js';

const CaseStudyTemplates = (function templates () {
  return {
    SouthernKitchen: SouthernKitchen,
    Proof: Proof,
    Sharknado: Sharknado,
    WKC: WKC,
    Mindy: MindyProject
  };
}());

export default CaseStudyTemplates;
