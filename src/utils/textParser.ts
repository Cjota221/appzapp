export type TemplateValues = Record<string, string>;

export function fillTemplate(template: string, values: TemplateValues) {
  return template.replace(/\{([^}]+)\}/g, (_, rawKey) => {
    const key = rawKey.trim();
    return values[key] ?? `{${key}}`;
  });
}
