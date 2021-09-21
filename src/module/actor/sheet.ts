import { AOGWARS } from '../config';

/** @extends {ActorSheet} */
export default class AOGWActorSheet extends ActorSheet {
  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      template: 'systems/aogwars/templates/actors/ship_card.hbs',
    });
  }
}
