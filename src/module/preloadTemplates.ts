export async function preloadTemplates(): Promise<Handlebars.TemplateDelegate[]> {
  const templatePaths: string[] = [
    // Add paths to "systems/aogwars/templates"
    'systems/aogwars/templates/actors/ship_card.hbs',
  ];

  return loadTemplates(templatePaths);
}
